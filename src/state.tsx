import{useState} from "react";

const StateComp =()=> {
let initialCount = 0;
    const [count, Setcount] = useState(initialCount);

    const addCount=()=>{
        Setcount(count + 1);
    }

    const reduceCount=()=>{
        Setcount(count - 1);
    }

    const initCount=()=>{
        Setcount(initialCount);
    }
    return(
        <>
            <h1>We have clicked: {count} times </h1>
            <button 
            onClick={addCount}>Increase
            </button>
            <button 
            onClick={reduceCount}>Decrease
            </button>
            <button 
            onClick={initCount}>Reset
            </button>
        </>
    )
}

export default StateComp;