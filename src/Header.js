import React, { useEffect, useState } from "react";
import './header.css'
const Header=()=>{
   const[value,setValue]=useState("")
   const[search,setSearch]=useState("")
   const[data,setData]=useState("")
   const handleChange=(e)=>{
    setValue(e.target.value)
   }
   const handleClick=(e)=>{
    e.preventDefault();
    setSearch(value)
   }
    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=d92bf1e625072902f66e0fefc4ee09ad`)
    .then(res=>res.json()).then(res=>setData(res))
    .catch(err=>console.log(err))
    },[search]);
  if(!data.name){
          return(
            <>
       <div className="container">
         <div className="head">
          <h1>Weather App</h1>
         </div>
         <div className="search">
            <input type="text" placeholder="Enter City Name" onChange={handleChange} />
            <button onClick={handleClick}>Enter</button>
         </div>
        </div>
         <div className="box1">
              <h1>Enter Valid City Name</h1>
            </div>
            </>
        )
    }else{
        return(
            <>
             <div className="container">
                <div className="head">
                  <h1>Weather App</h1>
                </div>
                <div className="search">
                    <input type="text" placeholder="Enter City Name" onChange={handleChange} />
                    <button onClick={handleClick}>Enter</button>
                </div>
             <div className="box">
                 <div>
                 <h1>Weather details of city:{data.name}</h1>
                 </div>
                 <div>
                 <h1>Current Temperature:{data.main ?<span>{data.main.temp}</span>:null}</h1>
                 </div>
                 <div>
                 <h1>Temperature Range:{data.main ?<span>{data.main.temp_min}°C to {data.main.temp_max}°C</span>:null}</h1>
                 </div>
                 <div>
                 <h1>Humidity:{data.main ?<span>{data.main.humidity}</span>:null}</h1>
                 </div>
                 <div>
                 <h1>Wind Speed:{data.wind ?<span>{data.wind.speed}</span>:null}</h1>
                 </div>
             </div>
             </div>
            </>
        )
        
    }
}
export default Header;