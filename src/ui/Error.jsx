import {useNavigate, useRouteError} from 'react-router-dom';
function Error(){
    const navigate = useNavigate();
    const error = useRouteError();
    const handleNavigate = (path)=>{
        navigate(path);
    }
    return(
        <div className='text-center'>
            <h1>Ooops, something went wrong 😥</h1>
            <h2>Page not found</h2>
            <p>{error.data || error.message}</p>
            <button onClick={()=>handleNavigate('/')} style={{width:"100px"}}>Go to home</button>
        </div>
    )
}

export default Error;