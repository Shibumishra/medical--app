import React from 'react';
import './Appointment.css';

function Review() {
    return (
        <div>
            <div className="title" >
                <h2>make  an  appointment </h2>
                <div className="under_line"></div>
            </div>
            <div className="form-3-container section-container section-container-image-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 offset-md-1 form-3-box text-center wow fadeInUp">

                            <form action="" method="post">

                                <fieldset className="form-group p-3">
                                    <legend className="w-auto px-2 legend-area">Easy and Fast</legend>
                                    <div className="form-group text-left" >
                                        <label for="job-title">Full Name:</label>
                                        <input className="form-control job-title" id="job-title" type="text" placeholder="Enter full " />
                                    </div>
                                    <div className="form-group text-left">
                                        <label for="job-title">Enter Phone Number:</label>
                                        <input className="form-control job-title" id="phone-number" type="number" placeholder="Enter phone number" />
                                    </div>
                                    <div className="form-group text-left">
                                        <label for="job-title">Enter your Email:</label>
                                        <input className="form-control job-title" id="email" type="email" placeholder="Enter your email" />
                                    </div>
                                    <div className="form-group text-left">
                                        <select name="" id="">
                                            <option value="" disabled selected>Appointment Timing</option>
                                            <option value="09-11 am">09-11 am</option>
                                            <option value="11-03 pm">11-03 pm</option>
                                            <option value="03-06 pm">03-06 pm</option>
                                            <option value="06-09 pm">06-09 pm</option>
                                        </select>
                                    </div>
                                    <div className="form-group text-left">
                                        <label for="job-description">message ( optional ):</label>
                                        <textarea className="form-control job-description" id="message" placeholder="message..." name="message"></textarea>
                                    </div>
                                </fieldset>
                                <div className="form-group row">
                                    <div className="col">
                                        <button type="submit" className="btn btn-primary btn-customized">Make Appointment</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review;
