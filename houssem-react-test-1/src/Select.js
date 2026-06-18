import './select.css';
import logo from './logo.svg';
import { useState } from 'react';
const SelectContainerHeader = () => {
    console.log('render');
    const name = 'houssem';
 
    const [x,setX] = useState(0);
    const addPlusOne = () => {
        console.log('function called here',x);
        setX(x + 1); 
        getXNature();
    }

    const mulByTwo = () => {
        console.log('function mul here ',x);
        setX(x * 2);
        getXNature();
    }

    const subTwo = () => {
        console.log('function sub here',x);
        setX(x - 2);
        getXNature();
    }

    const [oddOrEven,setNature] = useState('');
    const getXNature = () => {
        console.log('function check nature of x');
        if (x % 2 === 0) {
            setNature('the value of  '+ x +' is Even');
        }
        else {
            setNature('the value of ' + x + ' is Odd');
        }
    }
    
    



    return (
        <header>
            <nav className='nav-container'>
                <div className="nav-logo">
                    <img src={logo} title='icone' alt='icones' />
                    <h1>TITLE</h1>
                </div>
                <div>
                    <input type="text" name="nav-search" placeholder="search" className="nav-search" />
                    <p>{name + ' ' + 'guizani'}</p>
                </div>
                <div className="nav-button">
                    <button>Login</button>
                    <button>Sign Up</button>
                </div>
                <div>
                    <p>{oddOrEven}</p>
                    
                    <p>{x}</p>

                    <p>{( x % 2 === 0) ? 'value Even' : 'value odd'}</p>
                    <button id='buttonClick' onClick={addPlusOne}>Click here to add plus one to the variable x</button>
                    <button id='buttonMul' onClick={mulByTwo}>Click here to multiply the variable x by two</button>
                    <button id='buttonSub' onClick={subTwo}>Click here to substract two from the variable x</button>
                </div>
            </nav>

        </header>
    );
}



export default SelectContainerHeader;

// Online Javascript Editor for free

const positive = (x) => {
    if (x > 0){
        return 'positive';
    }
    else {
        return 'negative';
    }
}

//ternary operations
const positive = (x) => {
    return x > 0 ? 'positive': 'negative';
    
}