import React from 'react'
import '../Events.css'
import { Event } from './Event'

export const Events = () => {
  return (

    <>
    

    <h1 className="txtgr">
        Events
    </h1>


    <div className="evp">
            
        
<div className="cardeve">
        <button className="btneve"> <span className="txtgr"> Upcoming </span> </button>
        <button className="btneve"><span className="txtgr"> Ongoing </span></button>
        <button className="btneve"><span className="txtgr"> Past </span></button>
    </div>
    
    
    <div className="plate">
      <Event/>
      <Event/>
      <Event/>
      
    </div>




    </div>
    </>

    
    
  )
}
