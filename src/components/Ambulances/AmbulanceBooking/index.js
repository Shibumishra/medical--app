import React, { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab'
import BLS1 from '../../../assets/BLS.png'
import BLS2 from '../../../assets/BLS-plus.png'
import ALS1 from '../../../assets/ALS.png'
import ALS2 from '../../../assets/ALS-plus.png'
import PTV from '../../../assets/PTV.png'
import TrainAmbulance from '../../../assets/Train-ambulance.png'
import AirAmbulance from '../../../assets/Air-Ambulance.png'
import WaterAmbulance from '../../../assets/Water-ambulance.png'
import BikeAmbulance from '../../../assets/Bike-ambulance.png'
import Motuary from '../../../assets/motuary.png'
import { Link } from "react-router-dom";

function AmbulanceBooking() {
    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };
    return (
        <div className='tabs-conatainer' style={{marginTop: '20px'}}>
            <div className='main-title text-center'>
                <h3>Types of Ambulances</h3>
                <p>Types of Ambulances you can book through the Retail Blitz</p>
            </div>
            <Tabs defaultActiveKey="1">
                <Tab eventKey="1" title="BLS">
                    <div className='main-tabs'>
                        <div className='col-md-6 col-sm-6 col-xs-12'>
                            <img src={BLS1} className='tabs-img-responsive' />
                            <h4 className='tabs-image-title'>BASIC LIFE SAVING AMBULANCE (BLS)</h4>
                        </div>
                        <div className='col-md-6 col-sm-6 col-xs-12 pt-4 pt-4'>
                            <h5 className='tabs-taitle1'>Vehicle equipped with IV supplies, patient bed, stretcher, BP monitor, oxygen delivery devices.</h5>
                            <p className='tabs-title2'>Suitable for patients not in moderate condition but require instant medical transportation</p>

                            <div className='fullwidth text-left mt-15  pt-3pt-3'>
                                <Link to="/booknow">
                                    <button className='bookbtn'>
                                        Book Now
                                    </button>
                                </Link>
                                {/* <button className='bookbtn' onClick={showModal}>Book Now</button> */}
                                <a href="tel:+91338000777" className='clbtn' target="_blank">
                                    <i className="fa fa-phone" />
                                    <span>Call Us</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="2" title="BLS+">
                    <div className='main-tabs'>
                        <div className='col-md-6 col-sm-6 col-xs-12'>
                            <img src={BLS2} className='tabs-img-responsive' />
                            <h4 className='tabs-image-title'>BASIC LIFE SAVING AMBULANCE (BLS+)</h4>
                        </div>
                        <div className='col-md-6 col-sm-6 col-xs-12 pt-4'>
                            <h5 className='tabs-taitle1'>Vehicle equipped with Paramedic, IV supplies, patient bed, stretcher, BP monitor, oxygen delivery devices.</h5>
                            <p className='tabs-title2'>Suitable for patients not in moderate condition but require instant medical transportation</p>

                            <div className='fullwidth text-left mt-15 pt-3'>
                                <Link to="/booknow">
                                    <button className='bookbtn'>
                                        Book Now
                                    </button>
                                </Link>
                                <a href="tel:+91338000777" className='clbtn'>
                                    <i className="fa fa-phone" />
                                    <span>Call Us</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="3" title="ALS">
                    <div className='main-tabs'>
                        <div className='col-md-6 col-sm-6 col-xs-12'>
                            <img src={ALS1} className='tabs-img-responsive' />
                            <h4 className='tabs-image-title'>ADVANCED LIFE SUPPORT AMBULANCE (ALS)</h4>
                        </div>
                        <div className='col-md-6 col-sm-6 col-xs-12 pt-4'>
                            <h5 className='tabs-taitle1'>Vehicle equipped with ECG, ventilator, incubator, defibrillators, nebulizer, IV supplies, oxygen delivery services, BP device, monitoring and various other advanced life supporting supplies. A paramedic or doctor is always available.</h5>
                            <p className='tabs-title2'>oxygen delivery services, BP device, monitoring and various other advanced life supporting supplies. A paramedic or doctor is always available.</p>

                            <div className='fullwidth text-left mt-15 pt-3'>
                                <Link to="/booknow">
                                    <button className='bookbtn'>
                                        Book Now
                                    </button>
                                </Link>
                                <a href="tel:+91338000777" className='clbtn'>
                                    <i className="fa fa-phone" />
                                    <span>Call Us</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="4" title="ALS+">
                    <div className='main-tabs'>
                        <div className='col-md-6 col-sm-6 col-xs-12'>
                            <img src={ALS2} className='tabs-img-responsive' />
                            <h4 className='tabs-image-title'>ADVANCED LIFE SUPPORT AMBULANCE (ALS+)</h4>
                        </div>
                        <div className='col-md-6 col-sm-6 col-xs-12 pt-4'>
                            <h5 className='tabs-taitle1'>Vehicle equipped with ACLS drugs, ECG, ventilator, incubator, defibrillators, nebulizer, IV supplies, oxygen delivery services, BP device, monitoring and various other advanced life supporting supplies. A paramedic or doctor is always available.</h5>
                            <p className='tabs-title2'>oxygen delivery services, BP device, monitoring and various other advanced life supporting supplies. A paramedic or doctor is always available.</p>

                            <div className='fullwidth text-left mt-15 pt-3'>
                                <Link to="/booknow">
                                    <button className='bookbtn'>
                                        Book Now
                                    </button>
                                </Link>
                                <a href="tel:+91338000777" className='clbtn'>
                                    <i className="fa fa-phone" />
                                    <span>Call Us</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="5" title="PTV">
                    <div className='main-tabs'>
                        <div className='col-md-6 col-sm-6 col-xs-12'>
                            <img src={PTV} className='tabs-img-responsive' />
                            <h4 className='tabs-image-title'>PATIENT TRANSPORT VEHICLE (PTV)</h4>
                        </div>
                        <div className='col-md-6 col-sm-6 col-xs-12 pt-4'>
                            <h5 className='tabs-taitle1'>Vehicle equipped with patient bed and other minor life-supporting devices.</h5>
                            <p className='tabs-title2'>Suitable for patients who are presumably not in critical condition, but simply require mobility assistance to a medical facility.</p>

                            <div className='fullwidth text-left mt-15 pt-3'>
                                <Link to="/booknow">
                                    <button className='bookbtn'>
                                        Book Now
                                    </button>
                                </Link>
                                <a href="tel:+91338000777" className='clbtn'>
                                    <i className="fa fa-phone" />
                                    <span>Call Us</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="6" title="Train Ambulance">
                    <div className='main-tabs'>
                        <div className='col-md-6 col-sm-6 col-xs-12'>
                            <img src={TrainAmbulance} className='tabs-img-responsive' />
                            <h4 className='tabs-image-title'>TRAIN AMBULANCE (TA)</h4>
                        </div>
                        <div className='col-md-6 col-sm-6 col-xs-12 pt-4'>
                            <h5 className='tabs-taitle1'>Suitable for patients who need transportation to medical centers not located locally.</h5>
                            <p className='tabs-title2'>Vehicle equipped with ventilator, IV supplies, oxygen, ACLS (Advanced Cardiac Life Support) drugs, and other critical tools to support and maintain patient's health for long duration. A nurse or a paramedic is available.</p>

                            <div className='fullwidth text-left mt-15 pt-3'>
                                <Link to="/booknow">
                                    <button className='bookbtn'>
                                        Book Now
                                    </button>
                                </Link>
                                <a href="tel:+91338000777" className='clbtn'>
                                    <i className="fa fa-phone" />
                                    <span>Call Us</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="7" title="Air Ambulance">
                    <div className='main-tabs'>
                        <div className='col-md-6 col-sm-6 col-xs-12'>
                            <img src={AirAmbulance} className='tabs-img-responsive' />
                            <h4 className='tabs-image-title'>AIR AMBULANCE (AA)</h4>
                        </div>
                        <div className='col-md-6 col-sm-6 col-xs-12 pt-4'>
                            <h5 className='tabs-taitle1'>Well-equipped planes and choppers with an expert nurse or doctor.</h5>
                            <p className='tabs-title2'>Suitable for those who need the fastest, zero-hindrance transportation to the designated medical facility or those who are located in areas that cannot be accessed by land-based ambulance services.</p>

                            <div className='fullwidth text-left mt-15 pt-3'>
                                <Link to="/booknow">
                                    <button className='bookbtn'>
                                        Book Now
                                    </button>
                                </Link>
                                <a href="tel:+91338000777" className='clbtn'>
                                    <i className="fa fa-phone" />
                                    <span>Call Us</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="8" title="Water Ambulance">
                    <div className='main-tabs'>
                        <div className='col-md-6 col-sm-6 col-xs-12'>
                            <img src={WaterAmbulance} className='tabs-img-responsive' />
                            <h4 className='tabs-image-title'>WATER AMBULANCE (WA)</h4>
                        </div>
                        <div className='col-md-6 col-sm-6 col-xs-12 pt-4'>
                            <h5 className='tabs-taitle1'>Well-equipped motor boats with an expert nurse or doctor</h5>
                            <p className='tabs-title2'>Suitable for those who reside in areas where water is either a faster route to the designated medical facility or a better option against land-based ambulance service, or the only available option.</p>

                            <div className='fullwidth text-left mt-15 pt-3'>
                                <Link to="/booknow">
                                    <button className='bookbtn'>
                                        Book Now
                                    </button>
                                </Link>
                                <a href="tel:+91338000777" className='clbtn'>
                                    <i className="fa fa-phone" />
                                    <span>Call Us</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="9" title="Bike Ambulance">
                    <div className='main-tabs'>
                        <div className='col-md-6 col-sm-6 col-xs-12'>
                            <img src={BikeAmbulance} className='tabs-img-responsive' />
                            <h4 className='tabs-image-title'>BIKE AMBULANCE (BA)</h4>
                        </div>
                        <div className='col-md-6 col-sm-6 col-xs-12 pt-4'>
                            <h5 className='tabs-taitle1'>Bike/Motorcycle with a driver</h5>
                            <p className='tabs-title2'>Suitable for those who reside in areas where bike is a better and more cost-effective ambulance option to reach the designated medical facility</p>

                            <div className='fullwidth text-left mt-15 pt-3'>
                                <Link to="/booknow">
                                    <button className='bookbtn'>
                                        Book Now
                                    </button>
                                </Link>
                                <a href="tel:+91338000777" className='clbtn'>
                                    <i className="fa fa-phone" />
                                    <span>Call Us</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="10" title="Mortuary Ambulance">
                    <div className='main-tabs'>
                        <div className='col-md-6 col-sm-6 col-xs-12'>
                            <img src={Motuary} className='tabs-img-responsive' />
                            <h4 className='tabs-image-title'>MORTUARY AMBULANCE (MA)</h4>
                        </div>
                        <div className='col-md-6 col-sm-6 col-xs-12 pt-4'>
                            <h5 className='tabs-taitle1'>Vehicle equipped with bed, scoop stretchers, and an attendant.</h5>
                            <p className='tabs-title2'>Mortuary ambulance services are mainly used to transport dead bodies.</p>

                            <div className='fullwidth text-left mt-15 pt-3'>
                                <Link to="/booknow">
                                    <button className='bookbtn'>
                                        Book Now
                                    </button>
                                </Link>
                                <a href="tel:+91338000777" className='clbtn'>
                                    <i className="fa fa-phone" />
                                    <span>Call Us</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
}

export default AmbulanceBooking;
