
import './signup.css'
import arrow_leftIcon from './images/arrow_left.png';
import actifIcon from './images/actif.png';
import otherIcon from './images/point.png'
import profileIcon from './images/profil.jpg';
import { useState } from 'react';
import validator from 'validator';
import { useNavigate } from 'react-router-dom'; 

export const Signup = () => {

    const [valueInputGender, setValueInputGender] = useState('');
    const [valueInputFirstName, setvalueInputFirstName] = useState('');
    const [valueInputLastName, setvalueInputLastName] = useState('');
    const [valueInputEmail, setvalueInputEmail] = useState('');
    const [valueInputPhoneNumber, setvalueInputPhoneNumber] = useState('');
    const [valueInputBirth, setvalueInputBirth] = useState('');
    const [valueInputPoste, setvalueInputPoste] = useState();
    const [valueInputCountry, setValueInputCountry] = useState('#');

    const [calculatedAge, setCalculatedAge] = useState('');

    const [displayFirstName, setDisplayFirstName] = useState('First name');
    const [displayLastName, setDisplayLastName] = useState('Last name');
    const [displayEmail, setDisplayEmail] = useState('Email');
    const [displayPhoneNumber, setDisplayPhoneNumber] = useState('');
    const [displayCountry, setDisplayCountry] = useState('');
    const [displayPostal, setDisplayPostal] = useState('');

    const [errorGender, setErrorGender] = useState('');
    const [errorFirstName, setErrorFirstName] = useState('');
    const [errorLastName, setErrorLastName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorAge, setErrorAge] = useState('');
    const [errorMobile, setErrorMobile] = useState('');
    const [errorPostal, setErrorPostal] = useState('');

    const [isFormValid, setIsFormValid] = useState(false);


    
    const displayValueRadioGender = (e) => {
        setValueInputGender(e.target.value);
        setIsFormValid(false);
    }

    const displayValueInputFirstName = (e) => {
        setvalueInputFirstName(e.target.value);
        setIsFormValid(false);
    }

    const displayValueInputLastName = (e) => {
        setvalueInputLastName(e.target.value);
        setIsFormValid(false);
    }

    const displayValueInputEmail = (e) => {
        setvalueInputEmail(e.target.value);
        setIsFormValid(false);
    }

    const displayValueInputPhoneNumber = (e) => {
        setvalueInputPhoneNumber(e.target.value);
        setIsFormValid(false);
    }

    const displayValueInputBirth = (e) => {
        setvalueInputBirth(e.target.value);
        setIsFormValid(false);
    }
    const displayValueInputPoste = (e) => {
        setvalueInputPoste(e.target.value);
        setIsFormValid(false);
    }
    const displayValueInputCountry = (e) => {
        setValueInputCountry(e.target.value);
        setIsFormValid(false);
    }

    const handelValidation = (e) => {
        var isValid = true;

        //check gender
        const selected = document.querySelector('input[name="gender"]:checked');
        
        if (!selected) {   
            console.log('radio is not valid');
            setErrorGender('error');
            isValid = false;
        } else {    
            console.log('radio is valid:', selected.value);
            setErrorGender('');
            isValid = true;
        }

        //check first name
        if (validator.isEmpty(valueInputFirstName)) {
            setErrorFirstName("First name is required");
            isValid = false;
        } else if (!validator.isAlpha(valueInputFirstName, 'fr-FR', { ignore: ' ' })) {
            setErrorFirstName("First name must contain letters only");
            isValid = false;
        } else {
            setvalueInputFirstName(valueInputFirstName);
            console.log(valueInputFirstName);
            setErrorFirstName('');
        }
        //check last name
        if (validator.isEmpty(valueInputLastName)) {
            setErrorLastName("Last name is required");
            isValid = false;
        } else if (!validator.isAlpha(valueInputLastName, 'fr-FR', { ignore: ' ' })) {
            setErrorLastName("Last name must contain letters only");
            isValid = false;
        } else {
            setvalueInputLastName(valueInputLastName);
            console.log(valueInputLastName);
            setErrorLastName('');
        }

        // Check Email
        if (validator.isEmpty(valueInputEmail)) {
            setErrorEmail("Email is required");
            isValid = false;
        } else if (!validator.isEmail(valueInputEmail)) {
            setErrorEmail("Invalid email format");
            isValid = false;
        } else {
            setErrorEmail('');
        }

        //check mobile 
        const regex = /^\d{8}$/;
        if (validator.isEmpty(valueInputPhoneNumber.toString())) {
            setErrorMobile("Mobile number is required");
            isValid = false;
        }
        else
            if (!regex.test(valueInputPhoneNumber)) {
                setErrorMobile("Mobile number must be exactly 8 digits");
                isValid = false;
            }
            else {
                setErrorMobile('');
            }

        //check Age
        if (validator.isEmpty(valueInputBirth)) {
            setErrorAge("Date of birth is required");
            isValid = false;
            setCalculatedAge(''); // Nfragh el 3mor ken t7attit date fadhya
        } else {
            var today = new Date(),
                birthDate = new Date(valueInputBirth),
                age = today.getFullYear() - birthDate.getFullYear(),
                m = today.getMonth() - birthDate.getMonth();

            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }

            if (age < 18) {
                setErrorAge("You must be at least 18 years old");
                isValid = false;
                setCalculatedAge('');
            } else {
                setErrorAge('');
                setCalculatedAge(age);
            }
        }

        // check Postal Code
        if (validator.isEmpty(valueInputPoste)) {
            setErrorPostal("Postal code is required");
            isValid = false;
        }
        else if (valueInputPoste.length !== 4) {
            setErrorPostal("Postal code must be exactly 4 digits");
            isValid = false;
        } else {
            setErrorPostal('');
        }


        if (isValid) {
            setIsFormValid(true);
            setDisplayFirstName(valueInputFirstName);
            setDisplayLastName(valueInputLastName);
            setDisplayEmail(valueInputEmail);
            setDisplayPhoneNumber(valueInputPhoneNumber);
            setDisplayCountry(valueInputCountry === '#' ? '' : valueInputCountry);
            setDisplayPostal(valueInputPoste);

        } else {
            setIsFormValid(false);
        }

    }

    const isButtonDisabled = () => {

        if (
            valueInputGender === '' ||
            valueInputFirstName === '' ||
            valueInputLastName === '' ||
            valueInputEmail === '' ||
            valueInputPhoneNumber === '' ||
            valueInputBirth === '' ||
            valueInputPoste === '' ||

            errorGender !== '' ||
            errorFirstName !== '' ||
            errorLastName !== '' ||
            errorEmail !== '' ||
            errorAge !== '' ||
            errorMobile !== '' ||
            errorPostal !== ''
        ) {
            return true;
        }

        return false;
    }

const navigate = useNavigate();
    return (
        <div className="profil">
            <div className="profil-header">
                <div className="profil-header-left_left">
                   <button onClick={() => navigate(-1)} className="back-btn">
                        <img src={arrow_leftIcon} alt="" />
                        <h3>Profile</h3>
                    </button>
                </div>
                <div className="profil-header-right">
                    <img src={actifIcon} alt="notif" />
                    <img src={otherIcon} alt="other" />
                </div>
            </div>
            <div className='personal_info'>
                <div className='personal_info_left'>
                    <div className='personal_info_left_part1'>
                        <img src={profileIcon} alt="profil" />
                        <div className='personal_info_left_part1_title'>

                            <h3>{displayFirstName} {displayLastName}</h3>
                            <span>{displayEmail}</span>
                        </div>
                    </div>
                    <div className='personal_info_left_part2'>
                        <div className='personal_info_left_part21' >
                            <div>
                                <span>{displayPhoneNumber}</span>
                                <span>Mobile number</span>
                            </div>
                            <div>
                                <span>{displayCountry}</span>
                                <span>Country</span>
                            </div>
                        </div>
                        <hr />
                        <div className='personal_info_left_part21'>
                            <div>
                                <span>{calculatedAge}</span>
                                <span>Age</span>
                            </div>
                            <div>
                                <span>{displayPostal}</span>
                                <span>Postal Code</span>
                            </div>
                        </div>

                    </div>



                    <hr className='hrligne' />
                    <div className='personal_info_left_part3'>

                        <span>Personal information</span>
                        <span>Login & password</span>
                        <span>Log out</span>
                    </div>
                </div>
                <div className='personal_info_right'>
                    <h1>Personal information</h1>
                    <form method="POST" target="_blank">
                        <div className='personal_info_right_form'>
                            <div className='personal_info_right_form_radio'>
                                <div>
                                    <label>Male</label>
                                    <input type="radio" name="gender" onChange={displayValueRadioGender} />
                                </div>
                                <div>
                                    <label>Female</label>
                                    <input type="radio" name="gender" onChange={displayValueRadioGender} />
                                </div>
                            </div>

                            <div className='personal_info_right_form_name'>
                                <div className='personal_info_right_form_Fname'>
                                    <label>First Name</label>
                                    <input value={valueInputFirstName} type="text" name="first_name" placeholder="please give me first name" onChange={displayValueInputFirstName} />
                                    <span>{errorFirstName}</span>
                                </div>
                                <div className='personal_info_right_form_Lname'>
                                    <label>Last Name</label>
                                    <input value={valueInputLastName} type="text" name="last_name" placeholder="please give me last name" onChange={displayValueInputLastName} />
                                    <span>{errorLastName}</span>
                                </div>
                            </div>
                            <div className='personal_info_right_form_email'>
                                <label>Email</label>
                                <input value={valueInputEmail} type="email" name="email" placeholder="please give me Email" onChange={displayValueInputEmail} />
                                <span>{errorEmail}</span>
                            </div>
                            <div className='personal_info_right_form_mobile_birth'>
                                <div className='personal_info_right_form_mobile'>
                                    <label>Phone number</label>
                                    <input value={valueInputPhoneNumber} type="text" name="mobile_number" onChange={displayValueInputPhoneNumber} />
                                    <span>{errorMobile}</span>
                                </div>
                                <div className='personal_info_right_form_birth'>
                                    <label>Date of Birth</label>
                                    <input value={valueInputBirth} type="date" name="date_of_birth" onChange={displayValueInputBirth} />
                                    <span>{errorAge}</span>
                                </div>
                            </div>
                            <div className='personal_info_right_form_part'>
                                <div className='personal_info_right_form_contry'>
                                    <label htmlFor="country" className='form_label'>Country</label>
                                    <select value={valueInputCountry} id="country" name="country" className='form_select'
                                        onChange={displayValueInputCountry}>
                                        <option value="#">Choose</option>
                                        <option value="Tunisia">Tunisia</option>
                                        <option value="Marocco">Marocco</option>
                                        <option value="Egypt">Egypt</option>
                                        <option value="Algerie">Algerie</option>
                                        <option value="France">France</option>
                                        <option value="Germany">Germany</option>
                                        <option value="USA">USA</option>
                                    </select>
                                </div>
                                <div className='personal_info_right_form_postal'>
                                    <label>Postal Code</label>
                                    <input value={valueInputPoste} type="number" name="postal_number" onChange={displayValueInputPoste} />
                                    <span>{errorPostal}</span>
                                </div>
                            </div>
                            <div className='personal_info_right_form_button'>
                                <button type="button" onClick={handelValidation} disabled={isButtonDisabled()}
                                    className={isButtonDisabled() ? 'Disabled_button' :'Enabled_button' }>Save Changes</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>

        </div>


    );
}