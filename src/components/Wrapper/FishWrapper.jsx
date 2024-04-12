import React, { useEffect, useState } from "react";
import FishCard from "../Cards/FishCard";
import Modal from "../Modal/Modal";
import styles from "./wrapper.module.css";
import { nanoid } from 'nanoid'
import CreateCardForm from "../CreateCardForm/CreateCardForm";
import {useLoaderData} from "react-router-dom";
import { getFish } from "../../services/fishApi";

export async function fishLoader(){
    const fishes = await getFish();
    console.log("fishLoader", fishes);
    return fishes;
}

const FishWrapper = () =>{
    const fishes = useLoaderData();
    const [createCard, setCreateCard] = useState (false);
    const [cardList, setCardList]   = useState (fishes);
    const cardClickedDone = (name)=>{
        console.log(`Card: ${name}`);
    }

    const handleCardSubmit = (fish) =>{
        if(fish){
            setCardList((prevCards)=>{
              return [...prevCards, fish]
            });
           setCreateCard(false);
        }
        
        console.log(`Card: ${fish}`);
    };

    useEffect(() =>{
        const timeoutId= setTimeout(() =>{
            console.log(`List changed!`);
        }, 1000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [cardList]);

    return(
        <div className={styles.fishWrapper}>
            <button onClick={()=> setCreateCard(true)} className={styles.likebtn}> Add Card </button>
            {createCard && <Modal 
                            Header="Create New Card"
                            onClose={()=>setCreateCard(false)}
                            >
                                <CreateCardForm onCardSubmit={handleCardSubmit} />
                            </Modal>}
            <div className={styles.cardContainer}>
                {cardList.map((fish)=>{
                return(
                    <FishCard 
                    key={nanoid()}
                    src={fish?.illustrationPhoto?.src || "fishes/demo.jpg"} 
                    alt={fish?.illustrationPhoto?.alt || "no image"} 
                    title={fish.scientificName}
                    region={fish.region}
                    name={fish.name}
                    info={fish.info}
                    cardClickd={({name})=>cardClickedDone(name)}
                    />
                )
                })}
            </div>
            
        </div>
    );
}

export default FishWrapper;