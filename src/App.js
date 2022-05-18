import { useState } from 'react';
import './App.css';

function App() {
  
   const [counter, setCounter] = useState(0);

   function increment() {

     setCounter( counter => counter +1);
   }

   function decrement(){
    setCounter( counter =>  counter<=0 ? counter= 0 : counter-1);
   }

   function reset(){
    setCounter( counter => counter=0);
   }


  return(
      <div className="counter">
      <h1>REACT COMPTEUR :</h1>
      <span className="counter__output">{counter}</span>
      <div className="btn__container">
        <button className="neon" onClick={increment}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>+</button>
        <button className="neon" onClick={decrement}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>-</button>
        <button className="neon" onClick={reset}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>Reset</button>
      </div>
    </div>
  );

}

export default App;
