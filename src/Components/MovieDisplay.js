import React from "react";


const MovieDisplay=(props)=>{

console.log(props);
    return(
        <div style={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            gap:"20px"
        }}>{props.Movelists.actor}
        <img src={props.Movelists.banner} width={"70%"}/>
        </div>
    )
}


export default MovieDisplay;