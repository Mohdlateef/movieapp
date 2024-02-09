import React from "react";
import moviesData from "./Data/MovieData";

import MoviesList from "./Components/MovieList";


const App=()=>{
    


    return(
        <div>

<MoviesList data={moviesData}/>
        </div>
    )
}

export default App