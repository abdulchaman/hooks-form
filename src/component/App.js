import React,{useState} from 'react';
const App =()=>{
    const [objState, setObjState] = useState({});
    const handleChange=(event)=>{
        let name = event.target.name;
        let value = event.target.value;
        let data = {[event.target.name]:event.target.value};
        setObjState({...objState,...data});
    }
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(objState);
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <div><input type='text' name='name' onChange={handleChange} placeholder='Your name'></input></div>
                    <div><input type='email' name='email' onChange={handleChange} placeholder='Your email'></input></div>
                    <div><input type='text' name='password' onChange={handleChange} placeholder='Your password'></input></div>
                    <div><input type='text' name='phone' onChange={handleChange} placeholder='Your phone'></input></div>
                    <button type='submit'>Submit</button>
                    <button type='reset'>Reset</button>
                </div>
            </form>
        </>
    )
}
export default App;