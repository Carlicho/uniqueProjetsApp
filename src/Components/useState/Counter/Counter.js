import React from "react";
import { useState } from "react";

function Count ()  {
    const [Count, setCount] = useState(0)
    
    return ( 
        
        <div>

            <div><h1>Count</h1></div>
            <div>{Count}</div>

            <button onClick={()=> setCount (Count +1)}>incrementar</button>
            <button onClick={()=> setCount (0)}>Decrementar</button>
            <button onClick={()=> setCount (Count - 1)}>Resetear</button>

        </div>
     );
}
 
export default Count;