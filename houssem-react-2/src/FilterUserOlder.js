import { useState } from "react";


export const FilterUserOlder = () => {

    const t = [
        { first_name: 'Ali', last_name: 'cherni', age: 20 },
        { first_name: 'ahmed', last_name: 'ben salem', age: 18 },
        { first_name: 'ayoub', last_name: 'khammassi', age: 21 },
        { first_name: 'houssem', last_name: 'guizani', age: 30 }
    ]

    const [valueInput, setValueInput] = useState();
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const displayValueInput = (e) => {
        setValueInput(Number(e.target.value));
    }
    const filterUser = (t) => {
        if (t.age >= valueInput) {
            return true;
        }
        else {
            return false;
        }
    }

    const age = (t) => {
        return `${t.first_name} ${t.last_name} (${t.age} years)`;
    }

       const handleDisplayButtonClick = () => {
/*
        if (isButtonClicked === false) {
            setIsButtonClicked(true);
        }
        else {
            setIsButtonClicked(false);
        }
        */
       // 
        setIsButtonClicked(!isButtonClicked );

    }

    const getDisplayResult = () => {
        if (isButtonClicked === true && valueInput !== 0) {
            return t.filter(filterUser).map(age).join(',')
        } else {
            return '';
        }
    }

    return (
        <>
            <h1>Filter users older than...</h1>
            <input value={valueInput} name='age' type='number' onChange={displayValueInput} disabled = {isButtonClicked === true ? true : false} />
            <button onClick={handleDisplayButtonClick} >Search</button>
            <p>{getDisplayResult()}</p>
            

        </>

    )
}