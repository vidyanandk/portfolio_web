import React, { useState } from 'react';
import './contact.css'; // Import the CSS file
import axios from 'axios'
const Contact = () => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

     const baseUrl = "http://localhost:5000";
     const deployUrl="https://portfolio-web-3.onrender.com/"

    const handleSubmit = async () => {
        //  e.preventDefault();

        // Form data to send to the server
        const formData = {
            email,
            subject,
            message
        };

        // Example: send form data to a hypothetical endpoint
        try {
            

            const response=await axios.post(`${deployUrl}/email/sendEmail`,formData);
            

            if (response.ok) {
                // Reset form fields on successful submission
                setEmail('');
                setSubject('');
                setMessage('');
                alert('Email sent successfully!');
            } else {
                throw new Error('Failed to send email.');
            }
        } catch (error) {
            console.error('Error:', error.message);
            alert('Failed to send email. Please try again later.');
        }
    };

    return (
        <div className='contact'>
             <h1>Contact me</h1>
             <div className="email-form-container"> 
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="email"
                        id="email"
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <input
                        type="text"
                        id="subject"
                        placeholder='Subject'
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <textarea
                        id="message"
                        value={message}
                        placeholder='Enter message'
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
       
    );
};

export {Contact};


