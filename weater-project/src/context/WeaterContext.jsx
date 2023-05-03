import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import data from "../dataCity/cities.json"

const WeaterContext = createContext();

export const WeaterProvider = ({children}) => {
    const cities = data; 
    const [weater , setWeater] = useState([]);
    const [city, setCity] = useState("Ankara");
    
 


    useEffect(() => {
        const selectCities = data.filter(item => item.name===city)[0]
        const key = "14a434db4dbd4882a21134320230205"
       console.log(selectCities);
       
        axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${key}%20&q=${selectCities.latitude},${selectCities.longitude}&days=8&aqi=no&alerts=no`)
        .then((res) => res.data)
        .then((res)=>res.forecast)
        .then((res) =>{
            setWeater(res.forecastday)
        })
        .catch((e)=> console.log("hata"))
   

    } , [city]);

    const values = { weater , setWeater , city , setCity , cities}
 
   
    if(weater.length===0){
        console.log(weater);
    }else{
    return <WeaterContext.Provider value={values}>{children}</WeaterContext.Provider>
    }
}

export const useWeater = () => useContext(WeaterContext);