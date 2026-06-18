import { useState } from 'react';
import validator from 'validator';
import './form.css';

export const Form = () => {
    const [inputFirstName, setinputFirstName] = useState('');
    const [inputLastName, setinputLastName] = useState('');
    const [inputAge, setinputAge] = useState('');
    const [inputMobile, setinputMobile] = useState('');
    const [inputEmail, setinputEmail] = useState('');
    const [inputPassword, setinputPassword] = useState('');


    const [errorFirstName, setErrorFirstName] = useState('');
    const [errorLastName, setErrorLastName] = useState('');
    const [errorAge, setErrorAge] = useState('');
    const [errorMobile, setErrorMobile] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    const displayValueInput = (e) => {
        const { name, value } = e.target;
        if (name === 'first_name') setinputFirstName(value);
        if (name === 'last_name') setinputLastName(value);
        if (name === 'Age') setinputAge(value);
        if (name === 'mobile') setinputMobile(value);
        if (name === 'email') setinputEmail(value);
        if (name === 'password') setinputPassword(value);
        setIsFormValid(false);
    };

    const handleValidation = (e) => {
        var isValid = true;

        //check first name
        if (validator.isEmpty(inputFirstName)) {
            setErrorFirstName("First name is required");
            isValid = false;
        } else if (!validator.isAlpha(inputFirstName, 'fr-FR', { ignore: ' ' })) {
            setErrorFirstName("First name must contain letters only");
            isValid = false;
        } else {
            setErrorFirstName('');
        }

        //check last name
        if (validator.isEmpty(inputLastName)) {
            setErrorLastName("Last name is required");
            isValid = false;
        } else if (!validator.isAlpha(inputLastName, 'fr-FR', { ignore: ' ' })) {
            setErrorLastName("Last name must contain letters only");
            isValid = false;
        } else {
            setErrorLastName('');
        }

        //check age
        if (!inputAge) {
            setErrorAge("Age is required");
            isValid = false;
        } else if (inputAge < 18 || inputAge > 70) {
            setErrorAge("Age must be between 18 and 70");
            isValid = false;
        } else {
            setErrorAge('');
        }

        // Check Mobile
        if (validator.isEmpty(inputMobile)) {
            setErrorMobile("Mobile number is required");
            isValid = false;
        } else if (!validator.isMobilePhone(inputMobile)) {
            setErrorMobile("Invalid mobile phone number");
            isValid = false;
        } else {
            setErrorMobile('');
        }

        // Check Email
        if (validator.isEmpty(inputEmail)) {
            setErrorEmail("Email is required");
            isValid = false;
        } else if (!validator.isEmail(inputEmail)) {
            setErrorEmail("Invalid email format");
            isValid = false;
        } else {
            setErrorEmail('');
        }

        //  Check Password
        if (validator.isEmpty(inputPassword)) {
            setErrorPassword("Password is required");
            isValid = false;
        } else if (!validator.isLength(inputPassword, { min: 6 })) {
            setErrorPassword("Password must be at least 6 characters long");
            isValid = false;
        } else {
            setErrorPassword('');
        }
        setIsFormValid(isValid);

    };

    return (
        <>
            <div className='container_form'>
                <h1 className='container_form_title'>Bienvenue</h1>

                <form method="POST" target="_blank">

                    <div className='form_groupe'>
                        <label className='form_label'>First name</label>
                        <input value={inputFirstName} name='first_name' type='text' className='form_input' onChange={displayValueInput} />
                        <span className='error'>{errorFirstName}</span>
                    </div>

                    <div className='form_groupe'>
                        <label className='form_label'>Last name</label>
                        <input value={inputLastName} name='last_name' type='text' className='form_input' onChange={displayValueInput} />
                        <span className='error'>{errorLastName}</span>
                    </div>

                    <div className='form_groupe'>
                        <label className='form_label'>Age</label>
                        <input value={inputAge} name='Age' type='number' className='form_input' onChange={displayValueInput} />
                        <span className='error'>{errorAge}</span>
                    </div>

                    <div className='form_groupe'>
                        <label className='form_label'>Mobile</label>
                        <input value={inputMobile} name='mobile' type='text' className='form_input' onChange={displayValueInput} />
                        <span className='error'>{errorMobile}</span>
                    </div>

                    <div className='form_groupe'>
                        <div>
                            <label htmlFor="Men" className='form_label'>Men</label>
                            <span>/</span>
                            <label htmlFor="Women" className='form_label'>Women</label>
                        </div>
                        <div>
                            <input type="radio" id="Men" name="sexe" value="Men" />
                            <input type="radio" id="Women" name="sexe" value="Women" />
                        </div>
                    </div>

                    <div className='form_groupe'>
                        <label htmlFor="country" className='form_label'>Country</label>
                        <select id="country" name="country" className='form_select'>
                            <option value="#">Choose</option>
                            <option value="tn">Tunisia</option>
                            <option value="ma">Marocco</option>
                            <option value="eg">Egypt</option>
                            <option value="al">Algerie</option>
                            <option value="fr">France</option>
                            <option value="ger">Germany</option>
                            <option value="usa">USA</option>
                        </select>
                    </div>

                    <div className='form_groupe'>
                        <label className='form_label'>Email</label>
                        <input value={inputEmail} name='email' type='email' className='form_input' onChange={displayValueInput} />
                        <span className='error'>{errorEmail}</span>
                    </div>

                    <div className='form_groupe'>
                        <label className='form_label'>Password</label>
                        <input value={inputPassword} name='password' type='password' className='form_input' onChange={displayValueInput} />
                        <span className='error'>{errorPassword}</span>
                    </div>

                    <div className='form_button'>
                        <button type="button" onClick={handleValidation} >Valide</button>
                        <button type="button" disabled ={isFormValid === false}>Login</button>
                    </div>
                </form>
            </div>
        </>
    );
};