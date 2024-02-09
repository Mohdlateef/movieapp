import React, { useState } from "react";
import moviesData from "./Data/MovieData";

import MoviesList from "./Components/MovieList";
import MovieDisplay from "./Components/MovieDisplay";


const App=()=>{
    
let[Movelists,setMovielists]=useState("")

    return(
        <div style={{
            display:"flex"
            

}}>

<MoviesList data={moviesData} setMovielists={setMovielists}/>
<MovieDisplay Movelists={Movelists} />
        </div>
    )
}

export default App