import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom';
import axios from 'axios'
import { showErrMsg, showSuccessMsg } from '../../utils/notification/Notification'
import { isEmpty, isEmail, isLength, isMatch } from '../../utils/validation/Validation'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import AddressForm from './SaveAddress/AddressForm';


const initialState = {
    name: '',
    middleName: '',
    lastName: '',
    number: '',
    email: '',
    password: '',
    cf_password: '',
    err: '',
    success: ''
}

function Register() {
    const [user, setUser] = useState(initialState)
    const [passwordShown, setPasswordShown] = useState(false);
    const [ConformpasswordShown, setConformPasswordShown] = useState(false);
    const [register, setRegister] = useState(false)

    // Password toggle handler
    const togglePassword = () => {

        setPasswordShown(!passwordShown);
    };

    const toggleConformPassword = () => {

        setConformPasswordShown(!ConformpasswordShown);
    };

    const { name, middleName, lastName, number, email, password, cf_password, err, success } = user

    const handleChangeInput = e => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value, err: '', success: '' })
    }


    const handleSubmit = async e => {
        e.preventDefault()
        if (isEmpty(name) || isEmpty(password))
            return setUser({ ...user, err: "Please fill in all fields.", success: '' })

        if (!isEmail(email))
            return setUser({ ...user, err: "Invalid emails.", success: '' })

        if (isLength(password))
            return setUser({ ...user, err: "Password must be at least 6 characters.", success: '' })

        if (!isMatch(password, cf_password))
            return setUser({ ...user, err: "Password did not match.", success: '' })

        try {
            const res = await axios.post('retail/register/doctorRegistration', {
                first_name: name,
                middle_name: middleName,
                last_name: lastName,
                email_id: email,
                password: password,
                registered_mobile: number
            })

            setUser({ ...user, err: '', success: res.data.msg })
        } catch (err) {
            err.response.data.msg &&
                setUser({ ...user, err: err.response.data.msg, success: '' })
        }
    }

    return (
        // /register
        <>
        {register&& <Redirect to="/doctorsDetailss" />} 
        <div className="sign_in_up_bg">
            <div className="container">
                <div className="row justify-content-lg-center justify-content-md-center">
                    <div className="col-lg-12">
                        <div className="main_logo25" id="logo">
                            <a href="index.html">
                                <img src="" alt />
                            </a>
                            <a href="index.html">
                                <img className="logo-inverse" src="" alt />
                            </a>
                        </div>
                    </div>
                    <div className="">
                        <div className="sign_form">
                            <h2>Welcome to Medical.retail-blitz</h2>
                            <p>Please fill this form to create an account !</p>
                            <div className="login_page" style={{ marginTop: "10px" }}>
                                {err && showErrMsg(err)}
                                {success && showSuccessMsg(success)}

                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="name">First Name</label>
                                        <input type="text" placeholder="Enter your name" id="name"
                                            value={name} name="name" onChange={handleChangeInput} />
                                    </div>

                                    <div>
                                        <label htmlFor="middleName">Middle Name</label>
                                        <input type="text" placeholder="Enter your Midddle name" id="middleName"
                                            value={middleName} name="middleName" onChange={handleChangeInput} />
                                    </div>

                                    <div>
                                        <label htmlFor="lastName">Last Name</label>
                                        <input type="text" placeholder="Enter your Last name" id="lastName"
                                            value={lastName} name="lastName" onChange={handleChangeInput} />
                                    </div>

                                    <div>
                                        <label htmlFor="number">Phone Number</label>
                                        <input type="number" placeholder="Enter Phone Number" id="number"
                                            value={number} name="number" onChange={handleChangeInput} />
                                    </div>

                                    <div>
                                        <label htmlFor="email">Email Address</label>
                                        <input type="text" placeholder="Enter email address" id="email"
                                            value={email} name="email" onChange={handleChangeInput} />
                                    </div>

                                    <div className="show_password">
                                        <label htmlFor="password">Password</label>
                                        <input type={passwordShown ? "text" : "password"} placeholder="Enter password" id="password"
                                            value={password} name="password" onChange={handleChangeInput} />
                                        <button className="show_password-icon" onClick={togglePassword} >{passwordShown ? <VisibilityIcon /> : <VisibilityOffIcon />}</button>
                                    </div>

                                    <div className="show_password">
                                        <label htmlFor="cf_password">Confirm Password</label>
                                        <input type={ConformpasswordShown ? "text" : "password"} placeholder="Confirm password" id="cf_password"
                                            value={cf_password} name="cf_password" onChange={handleChangeInput} />
                                        <button className="show_password-icon" onClick={toggleConformPassword} >{ConformpasswordShown ? <VisibilityIcon /> : <VisibilityOffIcon />}</button>
                                    </div>

                                    <AddressForm />
                                    <div className="row">
                                        <button type="submit" 
                                        //   onClick={() => {
                                        //     setRegister(true)
                                        // }}
                                        
                                        >Register</button>
                                    </div>
                                </form>

                                <p>Already an account? <Link to="/login">Login</Link></p>
                            </div>
                        </div>
                        <div className="sign_footer">
                            <img src="" alt />© 2021 <strong>Medical.retail-blitz</strong>.
                            All Rights Reserved.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Register;
