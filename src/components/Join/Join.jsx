import React, { useRef } from 'react'; // Import useRef
import './Join.css';
import emailjs from '@emailjs/browser';

const Join = () => {
    const form = useRef(); // Initialize useRef

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
            publicKey: 'YOUR_PUBLIC_KEY',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              // Optionally, you can reset the form or show a success message here
              form.current.reset();
            },
            (error) => {
              console.log('FAILED...', error.text);
              // Optionally, you can show a failure message here
            }
          );
    };

    return (
        <div className='Join' id='join-us'>
            <div className="left-j">
                <hr />
                <div>
                    <span className='stroke-text'> READY TO</span>
                    <span> LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY</span>
                    <span className='stroke-text'> WITH US?</span>
                </div>
            </div>
            <div className="right-j">
                <form ref={form} className='email-container' onSubmit={sendEmail}>
                    <input type="email" name="user_email" placeholder='Enter your email address' required />
                    <button type="submit" className='btn btn-j'>Join Now</button>
                </form>
            </div>
        </div>
    );
}

export default Join;
