import React from 'react'
import './App.css';
import CounterContext from './CounterContext';
import Parent from './Parent.js'

function App() {
  return (
    <CounterContext.provider value={10}>
      <div>
        <Parent name="Mr. Siddique" />  
      </div>
    </CounterContext.provider>
    
  );
}

export default App;
