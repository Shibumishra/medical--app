import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import {
  showErrMsg,
  showSuccessMsg,
} from "../../utils/notification/Notification";
import { dispatchLogin } from "../../../redux/actions/authAction";
import { useDispatch } from "react-redux";
import FacebookLogin from "react-facebook-login";
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../../utils/refreshToken';
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
const clientId =
  '707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com';


const initialState = {
  email: "",
  password: "",
  err: "",
  success: "",
};

function Login(props) {
  const [user, setUser] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();
  const [passwordShown, setPasswordShown] = useState(false);

  // Password toggle handler
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const { email, password, err, success } = user;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, err: "", success: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://607c412c67e6530017573d5a.mockapi.io/login");
      setUser({ ...user, err: "", success: res.data.msg });

      localStorage.setItem("firstLogin", true);

      dispatch(dispatchLogin());
      history.push("/");
    } catch (err) {
      err.response.data.msg &&
        setUser({ ...user, err: err.response.data.msg, success: "" });
    }
  };

  const responseGoogle = async (response) => {
    console.log('Login Success: currentUser:', response.profileObj);
    try {
      const res = await axios.post("login", {
        tokenId: response.tokenId,
      });

      setUser({ ...user, error: "", success: res.data.msg });
      localStorage.setItem("firstLogin", true);

      dispatch(dispatchLogin());
      history.push("/");
    } catch (err) {
      console.log("err", err)
    }
  };

  const responseFacebook = async (response) => {
    try {
      const { accessToken, userID } = response;
      const res = await axios.post("login", { accessToken, userID });

      setUser({ ...user, error: "", success: res.data.msg });
      localStorage.setItem("firstLogin", true);

      dispatch(dispatchLogin());
      history.push("/");
    } catch (err) {
      err.response.data.msg &&
        setUser({ ...user, err: err.response.data.msg, success: "" });
    }
  };
  

  return (
    // <div>
    //     <img className="wave" src='https://terrence-aluda.com/wave.png' alt="img" />
    //     <div className="register_container">
    //         <div className="img">
    //             <img src='https://www.trusted-doctor.com/parts/assets/undraw_medicine_b1ol.svg' alt="img" />
    //         </div>
    //         <div >
    //             <Grid style={gridStyle}>
    //                 <Paper style={paperStyle}>
    //                     <div className="form_heading">
    //                     <h2>Welcome Back</h2>
    //                     <p>Log In to Your Edututs+ Account!</p>
    //                     </div>
    //                     <div className="login_page" style={{ marginTop: "10px" }}>
    //                         {err && showErrMsg(err)}
    //                         {success && showSuccessMsg(success)}

    //                         <form onSubmit={handleSubmit}>
    //                             <div>
    //                                 <label htmlFor="email">Email Address</label>
    //                                 <input type="text" placeholder="Enter email address" id="email"
    //                                     value={email} name="email" onChange={handleChangeInput} />
    //                             </div>

    //                             <div className="show_password">
    //                                 <label htmlFor="password">Password</label>
    //                                 <input type={passwordShown ? "text" : "password"} placeholder="Enter password" id="password"
    //                                     value={password} name="password" onChange={handleChangeInput} />
    //                                 <button className="show_password-icon" onClick={togglePassword} >{passwordShown ? <VisibilityIcon /> : <VisibilityOffIcon />}</button>
    //                             </div>

    //                             <div className="row">
    //                                 <button type="submit">Login</button>
    //                                 <Link to="/forgot_password" className="forgot_password">Forgot your password?</Link>
    //                             </div>
    //                         </form>

    //                         <div className="hr">Or Login With</div>

    //                         <div className="social">
    //                             <GoogleLogin
    //                                 clientId="Your google client id"
    //                                 buttonText="Login with google"
    //                                 onSuccess={responseGoogle}
    //                                 cookiePolicy={'single_host_origin'}
    //                             />

    //                             <FacebookLogin
    //                                 appId="Your facebook app id"
    //                                 autoLoad={false}
    //                                 fields="name,email,picture"
    //                                 callback={responseFacebook}
    //                             />

    //                         </div>

    //                         <p>New Customer? <Link to="/register">Register</Link></p>
    //                     </div>

    //                 </Paper>
    //             </Grid>
    //         </div>
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
              <h2>Welcome Back</h2>
              <p>Log In to Your Account!</p>
              <div className="login_page" style={{ marginTop: "10px" }}>
                {err && showErrMsg(err)}
                {success && showSuccessMsg(success)}

                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="text"
                      placeholder="Enter email address"
                      id="email"
                      value={email}
                      name="email"
                      onChange={handleChangeInput}
                    />
                  </div>

                  <div className="show_password">
                    <label htmlFor="password">Password</label>
                    <input
                      type={passwordShown ? "text" : "password"}
                      placeholder="Enter password"
                      id="password"
                      value={password}
                      name="password"
                      onChange={handleChangeInput}
                    />
                    <button
                      className="show_password-icon"
                      onClick={togglePassword}
                    >
                      {passwordShown ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </button>
                  </div>

                  <div className="row">
                    <button type="submit">Login</button>
                    <Link to="/forgot_password" className="forgot_password">
                      Forgot your password?
                    </Link>
                  </div>
                </form>

                <div className="hr">Or Login With</div>

                <div className="social">
                  <GoogleLogin
                    clientId={clientId}
                    buttonText="Login with google"
                    onSuccess={responseGoogle}
                    cookiePolicy={"single_host_origin"}
                    style={{ marginTop: "100px" }}
                    isSignedIn={true}
                  />

                  <FacebookLogin
                    appId="Your facebook app id"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={responseFacebook}
                  />
                </div>

                <p>
                  New Customer? <Link to="/register">Register</Link>
                </p>
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
  );
}

export default Login;
