import React from 'react'
import { useState, useEffect } from "react";

const PushUps = () =>  {
    const [dataAdded, setEntireData] = useState([]);
    useEffect(() => {
        getChallengeRequirements();
      }, []);
    
      async function getChallengeRequirements() {
        setEntireData([]);
        try {
          const response = await fetch("http://localhost:30049/userlist");
          const data = await response.json();
          setEntireData(data);
          console.log(data);
        } catch (error) {
          console.error("Failed to fetch data:", error);
        }
      }
      

    return (
        <div className = "pushups" style={{ top: "100px", position: "absolute", fontWeight: "bold", fontSize: "250%", left: "40%" }}> 
            Push up challenge
            <div className='textPushups' style = {{ top: "85px", position: "absolute", fontSize: "80%", left: "-59%", width: "350%", maxWidth: "350%"}}>
                {/* do {dataAdded[0].challenges[0].pushUpsToDo} today, and then the count keeps on increasing, till you complete your target */}
            </div>
        </div>
    )
}
export default PushUps;