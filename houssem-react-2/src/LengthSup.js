


export const LengthSup = () => {

    const t = ['houssem', 'ali', 'ahmed', 'aymen', 'marwen', 'zayneb'];



    

    const FilterLengthSup = (t) => {
        if(t.length > 4) {
            return true;
        }
        else {
            return false;
        }
    }

    return (
        <>
            <h1>Filter: length greater than...:</h1>
            <p>Origine table : {t.join(' , ')}</p>
            <p>Filter table where length is greater than 4: {t.filter(FilterLengthSup).join(' , ')}</p>
        </>
    );
}