import React from 'react';
import './ambulance.css';
import { RiContactsLine } from 'react-icons/ri';
import { FaBriefcaseMedical } from 'react-icons/fa';
import { BsPhone } from 'react-icons/bs';
import { IoIosArrowDropright } from 'react-icons/io';
import { GiReceiveMoney } from 'react-icons/gi';
import { FiPhoneCall } from 'react-icons/fi';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { FaHands } from 'react-icons/fa';
import Slider1 from '../../assets/slider-1.jpg'
import Slider2 from '../../assets/slider-2.jpg'
import Slider3 from '../../assets/Slider-3.jpeg'
import AmbulanceBooking from './AmbulanceBooking';
// import AmbulanceOptionsCard from './AmbulanceOptionsCard'

function Ambulance() {
    return (
        <>
            <div className="container-fluid">
                {/* <div className="text-center">
                    <h2 className="ambulance-heading">Retail Blitz Ambulance Service</h2>
                    <h3 className="healthy-society">Committed to Make a Healthy Society </h3>
                </div> */}
                <section id="something">
                    {/* <div className="row">
                        <section className="col-xs-12 col-xs-offset-0" id="middle-section">
                            <div className="col-xs-4 col-sm-6" style={{ paddingLeft: '64px' }}>
                                <h2 className="ambulance-heading">Retail Blitz Ambulance Service</h2>
                                <h3 className="healthy-society">Committed to Make a Healthy Society </h3>
                            </div>
                            <div style={{ marginTop: '7px' }}>
                                <div className="col-xs-4 col-sm-2 text-center">
                                    <a href="#">
                                        <FaUserAlt className="pic" />
                                        <p className='ambulance-title'>Administration</p>
                                    </a>
                                </div>
                                <div className="col-xs-4 col-xs-offset- col-sm-2 text-center">
                                    <a href="#">
                                        <FaBriefcaseMedical className="pic" />
                                        <p className='ambulance-title'>Services</p>
                                    </a>
                                </div>
                                <div className="col-xs-4 col-sm-2 text-center">
                                    <a href="#">
                                        <RiContactsLine className="pic" />
                                        <p className='ambulance-title'>Contact Us</p>
                                    </a>
                                </div>
                            </div>
                        </section>
                    </div> */}
                </section>
                <div className="fl-fl float-fb">
                    <i className="fa fa-phone float_fa " />
                    <a className='float_a' href="tel:+91338000777">+91-338-000-777</a>
                </div>
                <div className="well" id="grad">
                    <div className="row">
                        <section className="col-xs-12 " id="picture-section">
                            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li
                                        data-target="#myCarousel"
                                        data-slide-to={0}
                                        className="active"
                                    />
                                    <li data-target="#myCarousel" data-slide-to={1} />
                                    <li data-target="#myCarousel" data-slide-to={2} />
                                </ol>
                                {/* Wrapper for slides */}
                                <div className="carousel-inner">
                                    <div className="item active">
                                        <img
                                            src={Slider1}
                                            alt="VW Ambulance"
                                            className="img-responsive img-carousel"
                                        />
                                    </div>
                                    <div className="item">
                                        <img
                                            src={Slider2}
                                            alt="Another Ambulance"
                                            className="img-responsive img-carousel"
                                        />
                                    </div>
                                    <div className="item">
                                        <img
                                            src={Slider3}
                                            alt="Air Ambulance"
                                            className="img-responsive img-carousel"
                                        />
                                    </div>
                                </div>
                                <a
                                    className="left carousel-control"
                                    href="#myCarousel"
                                    data-slide="prev"
                                >
                                    <span className="glyphicon glyphicon-chevron-left" />
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a
                                    className="right carousel-control"
                                    href="#myCarousel"
                                    data-slide="next"
                                >
                                    <span className="glyphicon glyphicon-chevron-right" />
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </section>
                    </div>
                </div>
                <section className="row">
                    <AmbulanceBooking />
                </section>
                <div className="col-md-12 nopadding third_section" id="services">
                    <div className="col-md-12 third_section_heading">
                        <h1>Features</h1>
                        <div className="container">
                            <div className="col-md-10 col-md-offset-1 third_section_content">
                                <div className="col-md-4">
                                    <center className="phone">
                                        <BsPhone />
                                        {/* <img
                                            src="https://medulance.com/static/images/mobile.svg"
                                            alt="Medulance - 24*7 Ambulance Booking Service | Book Ambulance Online"
                                            title="Medulance - 24*7 Ambulance Booking Service | Book Ambulance Online"
                                        /> */}
                                    </center>
                                    <h4>On the go convenience</h4>
                                    <p>
                                        One touch access to
                                        <br />
                                        medical emergency services.
                                    </p>
                                </div>
                                <div className="col-md-4">
                                    <center className="arrow-drop">
                                        <IoIosArrowDropright />
                                        {/* <img
                                            src="https://medulance.com/static/images/arrow.svg"
                                            alt="Medulance - 24*7 Ambulance Booking Service | Book Ambulance Online"
                                            title="Medulance - 24*7 Ambulance Booking Service | Book Ambulance Online"
                                        /> */}
                                    </center>
                                    <h4>Advance Booking</h4>
                                    <p>
                                        Book ambulances in advance
                                        <br />
                                        for hassle-free hospital visits.
                                    </p>
                                </div>
                                <div className="col-md-4">
                                    <center className="money">
                                        <GiReceiveMoney />
                                        {/* <img
                                            src="https://medulance.com/static/images/money.webp"
                                            alt="Medulance - 24*7 Ambulance Booking Service | Book Ambulance Online"
                                            title="Medulance - 24*7 Ambulance Booking Service | Book Ambulance Online"
                                        /> */}
                                    </center>
                                    <h4>Transparent pricing</h4>
                                    <p>
                                        Convenient mechanism, with
                                        <br />
                                        online and cash payment mode.
                                    </p>
                                </div>
                                <div className="col-md-4">
                                    <center className="calling">
                                        <FiPhoneCall />
                                        {/* <img
                                            src="https://medulance.com/static/images/call.svg"
                                            alt="Medulance - 24*7 Ambulance Booking Service | Book Ambulance Online"
                                            title="Medulance - 24*7 Ambulance Booking Service | Book Ambulance Online"
                                        /> */}
                                    </center>
                                    <h4>Emergency contact</h4>
                                    <p>
                                        Keep your dear ones close
                                        <br />
                                        with emergency contact option.
                                    </p>
                                </div>
                                <div className="col-md-4">
                                    <center className="bulb">
                                        <HiOutlineLightBulb />
                                        {/* <img
                                            src="https://medulance.com/static/images/bulb.svg"
                                            alt="Medulance - 24*7 Ambulance Booking Service | Book Ambulance Online"
                                            title="Medulance - 24*7 Ambulance Booking Service | Book Ambulance Online"
                                        /> */}
                                    </center>
                                    <h4>Tips &amp; First aid information</h4>
                                    <p>
                                        Arm yourself with relevant
                                        <br /> information during any <br />
                                        emergency scenario.
                                    </p>
                                </div>
                                <div className="col-md-4">
                                    <center className="hand">
                                        <FaHands />
                                        {/* <img
                                            src="https://medulance.com/static/images/hand.svg"
                                            alt="Medulance - 24*7 Ambulance Booking Service | Book Ambulance Online"
                                            title="Medulance - 24*7 Ambulance Booking Service | Book Ambulance Online"
                                        /> */}
                                    </center>
                                    <h4>Easy communication</h4>
                                    <p>
                                        Seamless communication
                                        <br />
                                        with ambulance drivers
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="row main">
                    <aside className="col-xs-11 col-sm-4 col-md-3" id="news">
                        <h3>
                            <span id="underline">District News</span>
                        </h3>
                        <time>Jan. 1, 2010</time>
                        <p className="extra-space">
                            First item to note: some more details are also coming about this!
                        </p>
                        <time>Mar. 1, 2010</time>
                        <p className="extra-space">
                            First item to note: some more details are also coming about this!
                        </p>
                        <time>Apr. 1, 2010</time>
                        <p className="extra-space">
                            First item to note: some more details are also coming about this!
                        </p>
                        <time>May 1, 2010</time>
                        <p className="extra-space">
                            First item to note: some more details are also coming about this!
                        </p>
                        <time>June 1, 2010</time>
                        <p className="extra-space">
                            First item to note: some more details are also coming about this!
                        </p>
                        <br />
                        <h3>
                            <span className="events">Upcoming Events</span>
                        </h3>
                        <time>Jan. 1, 2010</time>
                        <p className="extra-space">
                            First item to note: some more details are also coming about this!
                        </p>
                        <time>Mar. 1, 2010</time>
                        <p className="extra-space">
                            First item to note: some more details are also coming about this!
                        </p>
                        <time>Apr. 1, 2010</time>
                        <p className="extra-space">
                            First item to note: some more details are also coming about this!
                        </p>
                        <time>May 1, 2010</time>
                        <p className="extra-space">
                            First item to note: some more details are also coming about this!
                        </p>
                        <time>June 1, 2010</time>
                        <p className="extra-space">
                            First item to note: some more details are also coming about this!
                        </p>
                    </aside>
                    <section className="col-xs-11 col-sm-7 col-md-8" id="section2">
                        <div className="well extra-space ambulance-extra_space">
                            <article>
                                <h2>Welcome to This Ambulance District</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Vestibulum varius feugiat lorem in semper. Sed vulputate, orci a
                                    elementum scelerisque, diam tortor dignissim quam, sed consequat
                                    nibh leo quis metus. Morbi finibus imperdiet mi, eget aliquam quam
                                    tincidunt ut. Nam.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                                    eleifend auctor orci, ac condimentum risus mattis sed. Morbi
                                    dictum convallis ullamcorper. Morbi molestie ex accumsan sagittis
                                    feugiat. Donec finibus lectus vel nulla commodo ultrices. Vivamus
                                    ut varius lacus. Nulla iaculis tristique dignissim. Integer sit
                                    amet diam fringilla, ullamcorper felis quis, mollis ex. Orci
                                    varius natoque penatibus et magnis dis parturient.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
                                    tellus ac.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                                    varius quis leo quis finibus. Ut et pharetra eros, auctor
                                    lobortis.
                                </p>
                            </article>
                        </div>
                        <hr className="style1" />
                        <br />
                        <section className="col-xs-12" className="ambilance-timeline">
                            <h2>Timeline history of EMS</h2>
                            <ul>
                                <li>Biblical times: The story of the good Samaritan</li>
                                <li>1732: Mouth to mouth ventilation</li>
                                <li>1861: EMS in America can be traced back to the Civil War</li>
                                <li>1865: First civilian ambulance in Cincinnati</li>
                                <li>
                                    1869: NYC advertises a 30 second response time and provides an
                                    ambulance surgeon and a quart of brandy for their patients
                                </li>
                                <li>
                                    1878: Treatment established on how to restore breathing and
                                    circulation
                                </li>
                                <li>
                                    1950: Modern EMS began in the 1950's. There were 5 different types
                                    of ambulance services: Towing operators, medical equipment
                                    companies, funeral homes, hospital and police/fire departments.
                                </li>
                                <li>
                                    1979: The Journal of Emergency Medical Services (JEMS) starts
                                    publication
                                </li>
                                <li>
                                    1985: The National Association of EMS Physicians is established
                                </li>
                                <li>
                                    1990: The Trauma Care System Planning and Development Act is
                                    passed by congress
                                </li>
                            </ul>
                        </section>
                    </section>
                </div> */}
                <section>
                    <div className="row">
                        <div className="col-xs-10 col-xs-offset-1">
                            <div className="google-maps_share d-flex justify-content-center" id="directions">
                                <a href="https://goo.gl/maps/FwXX9dus5NFczHxQ8" target="_Blank">
                                    Driving Directions
                                </a>
                            </div>
                            <div className="google-maps">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1096910.9378514038!2d85.18091219869574!3d25.435589399563117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f29937c52d4f05%3A0x831a0e05f607b270!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1643548609218!5m2!1sen!2sin"
                                    width={720}
                                    height={256}
                                    frameBorder={0}
                                    allowfullscreen="" l
                                    oading="lazy">
                                </iframe>
                            </div>
                        </div>
                    </div>{" "}
                    {/* end row */}
                </section>
            </div>{" "}
            {/* end row main */}
            <div className="row">
                <nav className="navbar navbar-default navbar-bottom" id="bottom-nav">
                    <address className="col-xs-6 col-xs-offset-3 col-sm-4 col-sm-offset-4 col-md-2 col-md-offset-5 text-center" style={{ margin: 'auto', fontSize: '20px' }}>
                        800001 Patna
                        <br />
                        Bihar, India
                        <br />
                        (123456789)
                    </address>
                    <h5 className="text-center col-xs-12">
                        © 2022 Retail Blitz - Your Health, Our Priority
                    </h5>
                </nav>
            </div>
        </>
    );
}

export default Ambulance;
