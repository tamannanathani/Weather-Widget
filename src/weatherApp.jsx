import InfoBox from "./infoBox";
import SearchBox from "./SearchBox";
import { useState } from "react";

export default function WeatherApp(){
    const[weatherInfo,setWeatherinfo]=useState({
        city:"Delhi",
        feelslike:24.34,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze",
    });

    let updateInfo=(newInfo)=>{
        setWeatherinfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}