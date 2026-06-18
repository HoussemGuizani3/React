import { useState } from "react";
import './testOne.css';

export const TestOne = () => {

    const [inputValue,setInputValue] = useState('');




    const displayValueInput = (e) => {
        setInputValue(e.target.value);
    }


    return(
      <>
         <h1>Test One</h1>
        <input value={inputValue} name='test' type='text' onChange={displayValueInput} />
        <button>Display</button>
        <button>Hidden</button>
        <p>{inputValue}</p>
      </>  
    );
}