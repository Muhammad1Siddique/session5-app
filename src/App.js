import React, {useState} from 'react'
import './App.css';
import counterContext from './counterContext';
import Parent from './Parent.js'

function App() {
  let counter= useState(1); // let [count, setCount] = useState(1)
  return (
    <counterContext.Provider value={counter}>
      <div>
        <Parent name="Mr. Siddique" />  
      </div>
    </counterContext.Provider>
    
  );
}

export default App;
