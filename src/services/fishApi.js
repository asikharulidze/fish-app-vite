const API_URL = "http://localhost:9000";

export const getFish = async () =>{
    const response = await fetch(`${API_URL}/fishes`);
    if(!response.ok){
        throw new Error("failed to fetch fish");
    }
    const data = await response.json();
    return data;
}