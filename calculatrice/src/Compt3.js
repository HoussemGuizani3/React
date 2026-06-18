
import { useState } from 'react';
import './compt3.css';


export const Compt3 = () => {
    const [valueInput,setValueInput] = useState(0);
    const t = [1, 2, 3, 4, 5, 6, 7];
    
    const supA4 = (x) => {
        if (x >= valueInput){
            return true;
        }
        else {
            return false;
        }
    }

    const updateValueInput = (e) => {
        setValueInput(e.target.value);
    }
    


    return (
        <>
            <h1>Hello World</h1>
            <label>Number to choose</label>
            <input value={valueInput} name='choose' type='number' onChange={updateValueInput}/>
            <div className='table'>
              {/*  {t.join(',')}*/}
                {t.filter(supA4).join(',')}
            </div>
        </>
    )
}



