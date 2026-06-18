import { useState } from "react";
import './Menu.css'


const Menu = () => {
console.log('render');

const [value1,setValueOne] = useState('');
const [value2,setValueTwo] = useState('');
const [mathsymbols,setMathSymbols] = useState();
const [testSymbole, setTestSymbole] = useState(false);
const [result,setResult] = useState(0);
const [inputValue,setInputValue] = useState('');
const [inputError,setInputError] = useState('');
const [displayText,setDisplayText] = useState('');
const [isButtonClicked,setIsButtonClicked] = useState(false);

const buttonClickSymbole = (z) => {
    setMathSymbols(z);
    setTestSymbole(true);
}

const buttonClickValueOne = (x) => {
    setValueOne(value1 + x);
};
const buttonClickValueTwo = (y) => {
    setValueTwo(value2 + y);
};

const buttonNumberClick = (num) => {
    if (testSymbole === false) {
        buttonClickValueOne(num);
    } else {
        buttonClickValueTwo(num);
    }
};


const buttonresult = () => {
    console.log('result');
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);
    
    if (mathsymbols === '+') {
        setResult(num1 + num2);
    }
    else if (mathsymbols === '-'){
        setResult(num1 - num2);
    }
    else if (mathsymbols === '*'){
        setResult(num1 * num2);
    }
    else if (mathsymbols === '/'){
        if (num2 === 0){
            setInputError('Division par zero impossible');
            console.log('erreur');
        }
        else {
            setResult(num1 / num2);
             setInputError('');
            
        }
    }
}

const emptyValue = () => {
    setValueOne('');
    setValueTwo('');
    setMathSymbols('');
    setResult('');
    setTestSymbole(false);
    setInputError('');

}

const handleValueOneChange = (e) => {
    setValueOne(e.target.value);
}

const handleValueTwoChange = (e) => {
    setValueTwo(e.target.value);
}

const displayValueInput = (e) => {
    setInputValue(e.target.value);

}

const handleSubmit = (event) => {
    
    setDisplayText(inputValue);
  };


  const handleDisplayButtonClick = () => {
    /* 
    setIsButtonClicked(isButtonClicked === false ? true : false);
    
    if (isButtonClicked === false){
         setIsButtonClicked(true);
         className 
    }
    else {
        setIsButtonClicked(false);
    }
   */
   setIsButtonClicked(!isButtonClicked );
   if (isButtonClicked === true ) {
        setInputValue('');
   }

   
    
  }

  const getButtonStyle = () => {
   

    if (isButtonClicked === true && inputValue === "" ) {
       
       return "bt_hide disabled_button";
    }
    else 
        if (isButtonClicked === false && inputValue === ""){
        return "bt_display disabled_button";
    }else 
        if (isButtonClicked === false && inputValue !== "" ){
            return "bt_display";
    }else 
        {
            return "bt_hide";
        }
  }
  // button clicker (color red)
  // button not click && input fara4()
 
    return(
        <header> 
        <nav>
            <div>
                <input value={result} name="resut" type="text" placeholder="result" className="result-input"/>
                <p className="error-message" className="display">{inputError}</p>
            </div>
            <div className="calculator-container">
               <input value={value1} name='value1' type='text' placeholder='value1' onChange={handleValueOneChange} className="calculator-input"/>
               <input value={mathsymbols} name='mathsymbols' type='text' placeholder='mathsymbols' className="calculator-input"/>
               <input value={value2} name='value2' type='text' placeholder='value2' onChange={handleValueTwoChange} className="calculator-input"/>
            </div>
            <div>
                <div>
                    <button onClick={() => buttonClickSymbole('/')}>/</button>
                    <button  onClick={() => buttonClickSymbole('*')}>*</button>
                    <button  onClick={() => buttonClickSymbole('-')}>-</button>
                    <button  onClick={() => buttonClickSymbole('+')}>+</button>
                </div>
                <div>
                    <button onClick={() => buttonNumberClick('7')}>7</button>
                    <button onClick={() => buttonNumberClick('8')}>8</button>
                    <button onClick={() => buttonNumberClick('9')}>9</button>
                </div>
                 <div>
                    <button onClick={() => buttonNumberClick('4')}>4</button>
                    <button onClick={() => buttonNumberClick('5')}>5</button>
                    <button onClick={() => buttonNumberClick('6')}>6</button>
                </div>
                 <div>
                    <button onClick={() => buttonNumberClick('1')}>1</button>
                    <button onClick={() => buttonNumberClick('2')}>2</button>
                    <button onClick={() => buttonNumberClick('3')}>3</button>
                </div>
                 <div>
                    <button onClick={() => buttonNumberClick('0')}>0</button>
                    <button onClick={emptyValue}>C</button>
                    <button onClick={buttonresult} class="equals-btn">=</button>
                </div>s
            </div>

            <div className="display_container">
                <input  value={inputValue}  name='test' type='text' placeholder='test' onChange={displayValueInput} className="result-input" disabled = {isButtonClicked === true ? true : false}/>
                <button onClick={handleDisplayButtonClick } className={getButtonStyle()} disabled={inputValue === '' ? true : false} >{isButtonClicked === true ? 'click to hide' : 'click to display'    }</button>
                <p className="display">{isButtonClicked === true ? inputValue : ''} </p>

            </div>
        </nav>
    </header>
    );
}

export default Menu;