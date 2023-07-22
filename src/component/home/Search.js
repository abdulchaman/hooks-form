import React,{useState, useEffect} from 'react';
const url = "http://3.17.216.66:4000/location";
const cityUrl = "http://3.17.216.66:4000/restaurant?stateId=";
const Search = () => {
    const [state, setState] = useState([]);
    const [location, setLocation] = useState([]);
    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>{
            setState(data)
            console.log(data)   
        })
    },[]);

    const displayState = (data)=>{
      if(data){
        return data.map((item)=>{
          return (
            <option key={item._id} value={item.state_id}>{item.state}</option>
          )
        })
      }
    };
    const handleState=(event)=>{
      let stateId = event.target.value;
      fetch(`${cityUrl}${stateId}`)
      .then((res) => res.json())
      .then((data)=>{
        setLocation(data);
        console.log(data);
      })
    };
    const displayLocation =(data)=>{
      if(data){
        return data.map((item)=>{
          return(
            <option key={item._id}>{item.restaurant_name}</option>
          )
        })
      }
    }
  return (
    <>
        <div>
          <select onChange={handleState}> 
            <option>---select state---</option>
            {displayState(state)}
          </select>
          <select>
            <option>---select location---</option>
            {displayLocation(location)}
          </select>
        </div>
    </>
  )
}

export default Search;