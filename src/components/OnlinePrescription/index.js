import React from 'react';
import './style.css';
import axios from 'axios';

const OnlinePrescription = () => {

    const handleOnlinePrescription = async (e) => {
        e.preventDefault();
        await axios.post('retail/onlinePrescription');
    };

    return (
        <div>
            <div className='vc_custom_1605747556974'>
                <div className='online-prescription'>
                    <div className='wpb_single_image'>
                        <img src='https://tiahealth.com/wp-content/uploads/2020/12/pills-384846_1920-e1606783354504-483x483.jpg' width="483" height="483" />
                    </div>
                    <div className='vc_empty_space'>
                        <h1>Online prescriptions, fast.</h1>
                        <p>Skip the waiting room and connect with a doctor for an online prescription, at a time that suits you at Retail Blitz - Your Health, Our Priority.</p>
                        <p>Access new prescriptions or prescription renewals from a Canadian doctor today.</p>
                        <button className='white-solid-button' onClick={handleOnlinePrescription}>Book now</button>
                    </div>
                </div>
            </div>

            <div className='medication-need'>
                <div className='medication-need-title'>
                    <h2>Your medication when you need it.</h2>
                </div>
                <div className='medication-need-subtitle'>
                    <p>When you’re sick, waiting hours for a doctor’s appointment or in the pharmacy for your much-needed prescription is not what you want or need.</p>
                    <p>We’re here to help you get the health support you deserve so you can focus on recovery.</p>
                    <p>Save time and energy by easily booking a virtual doctor’s appointment within minutes. After your appointment, we will have your online prescription delivered to your pharmacy of choice or directly to your home or office for free anywhere in Canada.</p>
                </div>
            </div>

            <div className='vc_bg_standard'>
                <div className='medication-private'>
                    <div className='wpb_single_image'>
                        <img
                            width={483}
                            height={483}
                            src="https://tiahealth.com/wp-content/uploads/2020/09/article_img.jpg"
                            alt="Patient talking to an online doctor on video chat."
                            loading="lazy"
                            title="article_img"
                            srcSet="https://tiahealth.com/wp-content/uploads/2020/09/article_img.jpg 483w, https://tiahealth.com/wp-content/uploads/2020/09/article_img-300x300.jpg 300w, https://tiahealth.com/wp-content/uploads/2020/09/article_img-150x150.jpg 150w"
                            sizes="(max-width: 483px) 100vw, 483px"
                        />
                    </div>

                    <div className='medication-private-titles'>
                        <div className='black-header'>
                            <h3>Private</h3>
                            <p>Your appointments are always 100% confidential and secure.</p>
                        </div>
                        <div className='black-header'>
                            <h3>Convenient</h3>
                            <p>Join your online prescription appointment from the comfort of your home and avoid long wait-times at clinics.</p></div>
                        <div className='black-header'>
                            <h3>Efficient</h3>
                            <p>Retail Blitz - Your Health, Our Priority allows you to quickly book an appointment to see an online doctor. Your prescription will be delivered to your chosen Canadian pharmacy.</p></div>
                        <div className='black-header'>
                            <h3>Free</h3>
                            <p>Appointments are covered with a valid healthcare number for British Columbians, Albertans and Ontarians and medication can be delivered to your door at no cost.</p></div>
                        <div className='blue-solid-button'>
                            <button onClick={handleOnlinePrescription}>Book Now</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="elise_sep_container">
                <span className="elise_sep_holder">
                    <span style={{ borderColor: "#d8d8d8" }} className="elise_sep_line" />
                </span>
            </div>

            <div className='medication-online-doctor'>
                <div className='online-doctor'>
                    <div>
                        <h3>Can an online doctor give me a script for a prescription?</h3>
                    </div>
                    <div className="ttitle1">
                        <h3>Will my pharmacy accept an online prescription?</h3>
                    </div>
                    <div className="ttitle2">
                        <h3>What prescriptions can an online doctor fill?</h3>
                    </div>
                    <div className="ttitle3">
                        <h3>What will my online prescription appointment be like?</h3>
                    </div>
                </div>

                <div className='online-doctor-title'>
                    <div>
                        <p>Yes, you can quickly and easily get an online script for a new prescription or prescription renewal by booking a telehealth virtual appointment with a Canadian licensed physician.</p>
                    </div>
                    <div style={{ paddingTop: '25px' }} className="subtitle1">
                        <p>Retail Blitz - Your Health, Our Priority doctors’ prescriptions are legitimate and are accepted by Canadian pharmacies. You can have your prescription delivered for free or sent to a pharmacy of your choice for pick-up.</p>
                    </div>
                    <div style={{ paddingTop: '25px' }} className="subtitle2">
                        <p>An online prescription can cover most common types of medications, at the doctor’s discretion. Some examples include:</p>
                        <ul>
                            <li>Allergy medication</li>
                            <li>Birth control</li>
                            <li>Diabetes medication</li>
                            <li>Refills of existing prescriptions</li>
                        </ul>
                        <p className="subtitle3">They are unable to prescribe controlled substances and narcotics.</p>
                    </div>
                    <div className="subtitle4">
                        <p>Appointments usually take between five to thirty minutes depending on the individual need. The doctor will ask for a description of your symptoms and reason for the appointment. This will allow them to determine the best course of treatment and write a prescription, if they deem it necessary, that can be dispensed at a Canadian pharmacy.</p>
                    </div>
                </div>
            </div>


            <div className='vc_custom_1605747556974'>
                <div className='booking-works'>
                    <div>
                        <h1>How booking works.</h1>
                        <h2>“How do I book an online prescription appointment?”</h2>
                        <p>Our virtual clinic is designed to provide you with secure, trusted and easy access to the advice and care you need when you need it.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default OnlinePrescription;