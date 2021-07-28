import React, { useState} from 'react';
import "../App.css"


        

       
        
    
 const RightDash =()=>{
      
        var today = new Date(),
        date =  today.getDate()+'-'+(today.getMonth() + 1) + '-' + today.getFullYear()
  
        let time = new Date().toLocaleTimeString();
        const [currentTime, setCurrentTime ] = useState(time);
       const updateTime =()=>{
         time = new Date().toLocaleTimeString();
        setCurrentTime(time)
       }; 
       setInterval(updateTime,1000)
        return(
            <div className="containr">
                {/* <div className="time"> 
                <h1>Todays Event</h1>
                <h2>{date}</h2>  */}
               {/* <h2>{currentTime}</h2> */}
                
            </div>
        )
    }

    
    export default RightDash;