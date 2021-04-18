import React from 'react'
import Child from './Child.js'
const Parent =(props) =>{

    return(
        <div>
            <Child name = {props.name}/>
            <Child2 />
        </div>
        
    ) 
}

export default Parent;