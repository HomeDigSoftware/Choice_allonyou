import React, { useState } from 'react';
import TeamCard from './TeamCard.js';
import axios from 'axios';



export function ValorantButton({ setValorantMatch }) {
  return (
    <div className='valorant-card'>
      {/* <button className="data-btn" onClick={() => handleGetValorant(setValorantMatch )}> */}
      <button className="data-btn" onClick={() => onGetData(setValorantMatch )}>
        Valorant
      </button>
    </div>
  );
}


// , {
//   method: 'POST',
//   body: JSON.stringify({
//     region: 'hoenn'
//   })
async function onGetData(setValorantMatch){
  // console.log("start")
  const server_response = await fetch('/.netlify/functions/getMatchsApi' , {
    method: "POST" , 
    body: JSON.stringify({
      game: "valorant"
    })
  } )
  //  .then(server_response => server_response.text);
  const theData = await server_response.text();
  // console.log("the data ========== " , theData.upcoming);
  const text = JSON.parse(theData)
  // console.log(text.upcoming);
  setValorantMatch(text.upcoming)

 

} 







export function ValorantGetMatch({ valorantMatch }) {
  const [list , setList] = useState({});
  const the_data = "";
  const date = new Date();
  const curr_day = date.getDate(date);
  const curr_hour = date.getHours(date);
  const curr_minute = date.getMinutes(date)
  //valorantMatch.map((data) =>             {if(data.begin_at.slice(11 ,13) >= curr_hour && data.begin_at.slice(8 ,10) >= curr_day)
  //console.log(" current hour && minute " , data.begin_at.slice(11, 13), curr_hour , data.begin_at.slice(14, 16), curr_minute)
  return (
    <div className='valor-card'>
      <div className=" clear-both text-center iteam-align-center justify-center ">
         
         
         {valorantMatch.map((data) =>  (<TeamCard data={data} key={data.id} />))}
     
      </div>
    </div>
  );
}


