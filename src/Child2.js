import React, {useReducer} from 'react' 
import counterReducer from './counterReducer'

const Child2 =() =>{
    let [state, dispatch] = useReducer(counterReducer, 17);
    return(
        <div>
            <h1>Second Child</h1>
            <h4>State value is: {state}</h4>
            <button onClick={()=>dispatch('INCREMENT')}>Increment Reducer</button>
        </div>
    )
}
export default Child2;