
import React from "react";

const MoviesList=(Data)=>{

let movieData=Data.data;
// console.log(Data.setMovielists);


    return(
    <div>
    
      { 
       movieData.map((iteam,index)=>(
       
            <p onClick={()=>{

           Data.setMovielists(iteam) 

        //    console.log(iteam);
        }} key={index}> {iteam.title}</p>
       ))
        }
    </div>)
}
export default MoviesList