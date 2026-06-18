import { useState } from "react";

export const Filter_name = () => {


    const [valueInput, setValueInput] = useState('');
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const t = ['hello ali', 'hello houssem', 'welcome ali', 'hello omar', 'hi ali'];

    const searchInclude = (t) => {
        if (t.includes('ali')) {
            return true;
        }
        else {
            return false;
        }
    }
///////////////////////////
    const updateValueInput = (e) => {
        setValueInput(e.target.value);
    }



    const searchValue = (t) => {
        if (t.includes(valueInput)) {
            return true;
        }
        else {
            return false;
        }
    }

    const handleDisplayButtonClick = () => {

        if (isButtonClicked === false) {
            setIsButtonClicked(true);
        }
        else {
            setIsButtonClicked(false);
        }

    }

    const getDisplayResult = () => {
        if (isButtonClicked === true && valueInput !== '') {
            return t.filter(searchValue).join(',');
        } else {
            return '';
        }
    }



    return (
        <>
            <h1>Filter Names: first test</h1>
            <div>
                {t.filter(searchInclude).join(', ')}
            </div>
            <div>
                <h3>Filter names: second test</h3>
                <input value={valueInput} name='choose' type='text' onChange={updateValueInput} />
                <button onClick={handleDisplayButtonClick} >display</button>

                <p>{getDisplayResult()}</p>

            </div>

        </>

    );
}
