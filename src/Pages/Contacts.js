import React from 'react';
import './Contacts.css';

const Contacts = () => {
    return (
        <div className="contacts-container">
            <div className="contacts-content">
                <h1 className="contacts-title">Contact Us</h1>
                <div className="contacts-details">
                    <p>If you have any questions or need assistance, feel free to reach out to us!</p>
                    <div className="contact-item">
                        <h3>Email</h3>
                        <p><a href="mailto:developer@example.com" className="contact-link">developer@example.com</a></p>
                    </div>
                    <div className="contact-item">
                        <h3>Phone</h3>
                        <p><a href="tel:+1234567890" className="contact-link">+1 (234) 567-890</a></p>
                    </div>
                    <div className="contact-item">
                        <h3>Social Media</h3>
                        <p>
                            <a href="https://twitter.com/developer" className="contact-link">Twitter</a> | 
                            <a href="https://github.com/developer" className="contact-link">GitHub</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
