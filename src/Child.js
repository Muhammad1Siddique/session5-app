import React, {useContext} from 'react'

const Child =(props) =>{ 
    let counterValue = useContext(counterContext); 
    document.write(counterValue);
    return(
        <div>
            <h3>This is first child</h3>
            <h2>My name is {props.name}</h2>
            

        </div>

    );
}

export default Child;