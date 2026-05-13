import { useState } from "react";

function Rdm(){

    var [num,change]=useState(0);
    function random(){
        
        change(Math.floor(Math.random() *100)+1);
    }

    return(
        <div>
            <h1>{num}</h1>
            <button onClick={random}>Random Number</button>
        </div>
    )
};
export default Rdm