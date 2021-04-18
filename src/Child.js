import React, {useContext} from 'react'
import counterContext from './counterContext'

const Child =(props) =>{ 
    let counterValue = useContext(counterContext); 
    return(
        <div>
            <h4>My name is {props.name}</h4>
            <br/>
            <br/>
            <h1>First child Using useContext</h1>
            <h4>Counter Value is {counterValue}</h4>
            <button onClick={()=>{counterValue[1](++counterValue[0])}}>Increment Context</button>

        </div>

    );
}

export default Child;