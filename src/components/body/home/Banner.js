import React, { useState, useEffect } from 'react';
import { FaAmbulance, FaBriefcaseMedical, FaRegLightbulb, FaUserMd, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import HospitalsData from './HospitalsData';
import DoctorSelect from './DoctorSelect';
import axios from "axios";
import LocationSelect from './LocationSelect';
import SelectBox from './SelectBox';


const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

function Banner() {
    const [mName, setMname] = useState('');
    const [lName, setLname] = useState('');
    const [foundProduct, setFoundProduct] = useState(HospitalsData)
    const [filteredResults, setFilteredResults] = useState(HospitalsData);
    const [searchInput, setSearchInput] = useState('');
    const [locationInput, setLocationInput] = useState('');
    const [showSearch, setShowSearch] = useState(false);


    const filter = (e) => {
        const keyword = e.target.value;

        if (keyword !== '') {
            const results = HospitalsData.filter((product) => {
                return product.name.toLowerCase().startsWith(keyword.toLowerCase());
            });
            setFoundProduct(results);
        } else {
            setFoundProduct(HospitalsData);
        }
        setMname(keyword);
    };

    const locations = (e) => {
        const keyword = e.target.value;

        if (keyword !== '') {
            const results = HospitalsData.location((product) => {
                return product.location.toLowerCase().startsWith(keyword.toLowerCase());
            });
            setFilteredResults(results);
        } else {
            setFilteredResults(HospitalsData);
        }
        setLname(keyword);
    };


    console.log("filteredResults", mName)
    console.log("filteredLoaction", lName)

    const onSearch = (e) => {
        e.preventDefault();
        setShowSearch(true);
    }



    return (
        <section style={{ marginTop: "80px" }}>
            <section className="banner">
                <div className="page-content">
                    <div className="overflow-hidden">
                        <div className='contact'>
                            <div className="row justify-content-center rigth_doctor ">
                                <h1 className='text-center'>Find the Right Doctor and Hospital</h1>
                                <div className="col-md-10">
                                    <form>
                                        <div className="input_box">
                                            {/* <select className="form-select" aria-label="Default select example" required>
                                                <option value="1">Fitness</option>
                                                <option value="2">Doctors</option>
                                                <option value="3">Hospitals</option>
                                            </select> */}
                                            {/* <input type="text"
                                                onChange={filter}
                                                value={mName}
                                                placeholder="Search by Name of type" required /> */}
                                            {/* <Select 
                                            classNamePrefix="selectsds"
                                            options={options} /> */}
                                            <SelectBox />
                                            <DoctorSelect />
                                            <LocationSelect />
                                            {/* <input type="text"
                                                onChange={locations}
                                                placeholder="Location" required /> */}
                                            <button onClick={onSearch} className="search_btn">Search</button>
                                        </div>
                                    </form>
                                    <div style={{ marginTop: 20 }}>
                                        {/* {mName.length > 1 ? ( */}
                                        {mName.length > 1 && showSearch ? (
                                            foundProduct.map((item) => {
                                                return (
                                                    <div style={{ boxShadow: '0 0 20px rgba(0,0,0,.5)', padding: '20px', width: '100%', borderRadius: '5px' }}>
                                                        <div>
                                                            <h1>{item.name}</h1>
                                                            <p>
                                                                {item.location}
                                                            </p>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        ) : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="social-vertical w-clearfix">
                                <a href="#" className="social-icon lower-mobile w-inline-block">
                                    <FaFacebookF style={{ fontSize: "20px", color: "#fff" }} />
                                </a>
                                <a href="#" className="social-icon w-inline-block">
                                    <FaTwitter style={{ fontSize: "20px", color: "#fff" }} />
                                </a>
                                <a href="https://www.linkedin.com/company/ursag/" className="social-icon w-inline-block" target="_blank">
                                    <FaLinkedinIn style={{ fontSize: "20px", color: "#fff" }} />
                                </a>
                                <a href="#" className="social-icon no-bottom w-inline-block">
                                    <FaInstagram style={{ fontSize: "20px", color: "#fff" }} />
                                </a>
                            </div>
                            <div className="container in-banner w-container">
                                <div className="w-row">
                                    <div className="w-col w-col-7 w-col-stack">
                                        <div>
                                            <h1 style={{ color: "#fff" }} className="top-title on-banner">
                                                We Are Here For Your Care.<strong><br /></strong>
                                            </h1>
                                            <h2 style={{ color: "#fff" }}>
                                                We The Best Doctors..
                                            </h2>
                                            <p className="paragraph-white bigger normal">
                                                We are here for your care 24/7. Any help just call us.<br />
                                            </p>
                                            <div>
                                                <h3>Check out Our services</h3>
                                                <div className="header__ul">
                                                    <Link className="home__social-icon" to='/ambulances'>
                                                        <FaAmbulance />
                                                    </Link>
                                                    <Link className="home__social-icon" to='/medicine'>
                                                        <FaBriefcaseMedical />
                                                    </Link>
                                                    <Link className="home__social-icon" to='/service'>
                                                        <FaRegLightbulb />
                                                    </Link>
                                                    <Link className="home__social-icon" to='/doctorList'>
                                                        <FaUserMd />
                                                    </Link>
                                                    {/* <a className="home__social-icon" href="#" target="blank">
                                                        <FaAmbulance />
                                                    </a>
                                                    <a className="home__social-icon" href="#" target="blank">
                                                        <FaBriefcaseMedical />
                                                    </a>
                                                    <a className="home__social-icon" href="#" target="blank">
                                                        <FaRegLightbulb />
                                                    </a>
                                                    <a className="home__social-icon" href="#" target="blank">
                                                        <FaUserMd />
                                                    </a> */}
                                                </div>
                                                <div className="top-margin half flex">
                                                    <a href="#"><button className="button">learn more</button></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column w-col w-col-5 w-col-stack"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
export default Banner;