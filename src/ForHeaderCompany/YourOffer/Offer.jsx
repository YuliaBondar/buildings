import React, { useState } from 'react';
import './Offer.css';

const Offer = () => {
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(null);
    const [emails, setEmails] = useState([]);

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const handleChange = (event) => {
        const value = event.target.value;
        setEmail(value);
        setIsValid(validateEmail(value));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isValid) {
            alert('Email is valid!');
            setEmails([...emails, email]);
            console.log(emails);
            setEmail('');
            setIsValid(null);
        } else {
            alert('Please enter a valid email.');
        }
    };

    return (
        <div className='offer-item'>
            <div className="offer">
                <div className="text-offer">
                    <h1>Want to get our offer<br/>updates and news?</h1>
                    <p>Submit your e-mail and we will give you update about<br/>information and discount. Every single week. (not spamming)</p>
                </div>
                <div className="input-item">
                    <input 
                        type="email"
                        placeholder='Enter your e-mail here'
                        value={email}
                        onChange={handleChange}
                        style={{ borderRadius:'2px',borderColor: isValid === null ? '' : isValid ? 'green' : 'red' }}
                    />
                    <button className="contact-button" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Offer;
