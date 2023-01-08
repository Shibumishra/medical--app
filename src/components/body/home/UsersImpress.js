import React from 'react';
import './UsersImpress.css';

const UsersImpress = () => {
    return (
        <>
        <div className="icon-container">
            <div className="img-wrapper">
                <i className="fas fa-hospital"></i>
            </div>
                <h4>170+</h4>
                <p>Hospitals</p>
        </div>
        <div className="icon-container">        
            <div className="img-wrapper">
                <i className="fas fa-users"></i>
            </div>
                <h4>240+</h4>
                <p>staff</p>
        </div>
        <div className="icon-container">    
            <div className="img-wrapper">
                <i className="fas fa-smile"></i>
            </div>
                <h4>1500+</h4>
                <p>happy patients</p>
        </div>
        <div className="icon-container">    
            <div className="img-wrapper">
                <i className="fas fa-procedures"></i>
            </div>
                <h4>160+</h4>
                <p>bed facility</p>
        </div>
        </>
    )
}

export default UsersImpress;
