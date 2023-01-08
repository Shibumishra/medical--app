import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { showErrMsg, showSuccessMsg } from '../../utils/notification/Notification'
import { isLength, isMatch } from '../../utils/validation/Validation'


const initialState = {
    password: '',
    cf_password: '',
    err: '',
    success: ''
}

function ResetPassword() {
    const [data, setData] = useState(initialState)
    const { token } = useParams()

    const { password, cf_password, err, success } = data

    const handleChangeInput = e => {
        const { name, value } = e.target
        setData({ ...data, [name]: value, err: '', success: '' })
    }


    const handleResetPass = async () => {
        if (isLength(password))
            return setData({ ...data, err: "Password must be at least 6 characters.", success: '' })

        if (!isMatch(password, cf_password))
            return setData({ ...data, err: "Password did not match.", success: '' })

        try {
            const res = await axios.post('retail/admin/vendorChange_password', { password }, {
                headers: { Authorization: token }
            })

            return setData({ ...data, err: "", success: res.data.msg })

        } catch (err) {
            err.response.data.msg && setData({ ...data, err: err.response.data.msg, success: '' })
        }

    }


    return (
        // <div className="fg_pass">
        //     <h2>Reset Your Password</h2>

        //     <div className="row">
        //         {err && showErrMsg(err)}
        //         {success && showSuccessMsg(success)}

        //         <label htmlFor="password">Password</label>
        //         <input type="password" name="password" id="password" value={password}
        //         onChange={handleChangeInput} />

        //         <label htmlFor="cf_password">Confirm Password</label>
        //         <input type="password" name="cf_password" id="cf_password" value={cf_password}
        //         onChange={handleChangeInput} />         

        //         <button onClick={handleResetPass}>Reset Password</button>
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
                            <h2>Reset Your Password</h2>
                            <div className="login_page">
                                {/* {err && showErrMsg(err)}
                            {success && showSuccessMsg(success)}
                            <div>
                                <label htmlFor="email">Enter your email address</label>
                                <input type="text" placeholder="Enter email address" id="email"
                                    value={email} name="email" onChange={handleChangeInput} />
                            </div>
                            <button className="forgot_password-btn" onClick={forgotPassword}>Verify your email</button> */}
                                {err && showErrMsg(err)}
                                {success && showSuccessMsg(success)}

                                <div>
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" id="password" value={password} placeholder="New Password" 
                                        onChange={handleChangeInput} />
                                </div>

                                <div>
                                    <label htmlFor="cf_password">Confirm Password</label>
                                    <input type="password" name="cf_password" id="cf_password" value={cf_password} placeholder="Confirm Password"
                                        onChange={handleChangeInput} />
                                </div>

                                <button className="forgot_password-btn" onClick={handleResetPass}>Reset Password</button>
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

export default ResetPassword
