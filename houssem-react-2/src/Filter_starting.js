import { useState } from "react";


export const Filter_starting = () => {

    const [valueInput, setValueInput] = useState('')
    const t = ['houssem', 'ali', 'ahmed', 'aymen', 'marwen', 'zayneb'];

    const FilterStarting = (t) => {
        if (t[0] === valueInput) {
            return true;
        }
        else {
            return false;
        }
    }

    const updateValueInput = (e) => {
        setValueInput(e.target.value);
    }
    const test = (el) => {
        if (el.startsWith(valueInput)) {
            return true;
        }
        else {
            return false;
        }
    }


    return (
        <>

            <h1>Search for users whose name starts with...:</h1>
            <input value={valueInput} name='choose' type='text' onChange={updateValueInput} />
            <div>
                {t.filter(test).join(',')}
               
            </div>
        </>

    );
}