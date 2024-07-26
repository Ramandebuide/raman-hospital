import React, { useEffect, useState } from 'react'
import RoomButton from './RoomButton'
import '../../App.css'
import axios from 'axios-typescript';

interface responseDataStucture{
    normalRoom?:number;
    oxygenRoom?:number;
    icuRoom?:number;
}
interface response{
  data:responseDataStucture;
  message:string;
}
const HospitalDetails = () => {
    const [details,setDetails]=useState<responseDataStucture>({});
    const [message,setMessage]=useState<string>("");

    const getRoomDetails=async(str?:string)=>{
    try {
      const response=await axios.post("http://localhost:4545/room",{
        
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({room:str})
    });
    const resData=JSON.parse(response.data)

      setDetails(resData.data);
      setMessage(resData.message);
  
    } catch (error) {
      console.log(error)
    }
}

useEffect(()=>{

getRoomDetails();
},[])


  return (
    <div>
      <div className='details'>
        <p>message : {message}</p>
        <p>NormalRoom : {details.normalRoom}</p>
        <p>OxygenRoom : {details.oxygenRoom}</p>
        <p>IcuRoom : {details.icuRoom}</p>
      </div>
      <div className='button'>
        <RoomButton  getRoomDetails={getRoomDetails} name={"normalroom"}/>
        <RoomButton getRoomDetails={getRoomDetails} name={"oxygenroom"}/>
        <RoomButton getRoomDetails={getRoomDetails} name={"icuroom"}/>
      </div>
    </div>

  )
}

export default HospitalDetails;
