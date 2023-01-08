import React, { useState } from 'react'
import axios from 'axios'
import { isEmail } from '../../utils/validation/Validation'
import { showErrMsg, showSuccessMsg } from '../../utils/notification/Notification'

const initialState = {
    email: '',
    err: '',
    success: ''
}

function ForgotPassword() {
    const [data, setData] = useState(initialState)

    const { email, err, success } = data

    const handleChangeInput = e => {
        const { name, value } = e.target
        setData({ ...data, [name]: value, err: '', success: '' })
    }

    const forgotPassword = async () => {
        if (!isEmail(email))
            return setData({ ...data, err: 'Invalid emails.', success: '' })

        try {
            const res = await axios.post('/user/forgot', { email })

            return setData({ ...data, err: '', success: res.data.msg })
        } catch (err) {
            err.response.data.msg && setData({ ...data, err: err.response.data.msg, success: '' })
        }
    }

    return (
        // <div className="fg_pass">
        //     <h2>Forgot Your Password?</h2>

        //     <div className="row">
        //         {err && showErrMsg(err)}
        //         {success && showSuccessMsg(success)}

        //         <label htmlFor="email">Enter your email address</label>
        //         <input type="email" name="email" id="email" value={email}
        //         onChange={handleChangeInput} />
        //         <button onClick={forgotPassword}>Verify your email</button>
        //     </div>
        // </div>
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
                    <div className="col-lg-6 col-md-8">
                        <div className="sign_form">
                            <h2>Forgot Your Password?</h2>
                            <div className="login_page">
                                {err && showErrMsg(err)}
                                {success && showSuccessMsg(success)}
                                <div>
                                    <label htmlFor="email">Enter your email address</label>
                                    <input type="text" placeholder="Enter email address" id="email"
                                        value={email} name="email" onChange={handleChangeInput} />
                                </div>
                                <button className="forgot_password-btn" onClick={forgotPassword}>Verify your email</button>
                            </div>
                        </div>
                        <div className="sign_footer">
                            <img src="" alt />© 2021 <strong>medical.retail-blitz</strong>.
                            All Rights Reserved.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;
