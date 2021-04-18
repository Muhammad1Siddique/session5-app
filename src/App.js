import React from 'react'
import './App.css';
import counterContext from './counterContext';
import Parent from './Parent.js'

function App() {
  return (
    <counterContext.Provider value={10}>
      <div>
        <Parent name="Mr. Siddique" />  
      </div>
    </counterContext.Provider>
    
  );
}

export default App;
