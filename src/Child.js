import React, {useContext} from 'react'
import counterContext from './counterContext'

const Child =(props) =>{ 
    let counterValue = useContext(counterContext); 
    return(
        <div>
            <h3>This is first child</h3>
            <h2>My name is {props.name}</h2>
            <h1>Counter Value is {counterValue}</h1>
            <button onClick={()=>{counterValue[1](++counterValue[0])}}>Increment</button>

        </div>

    );
}

export default Child;