import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import like from '../../assets/images/like.png';
import share from '../../assets/images/share.png';
import DoctorData from '../../DoctorData';
import Filter from '../../pages/DoctorsList';
import axios from 'axios';

const Doctor = () => {
    const [posts, setPosts] = useState([])

    const profile = (e) => {
        console.log("profile", e.target.parentNode.parentNode)

    }

    // const onLink = (e) => {
    //     e.preventdefault();
    //     console.log(e.target)

    // }

    useEffect(() => {
        async function onLink() {
            const results = await axios('retail/paymentInfo/create_order');
            setPosts(results.data)
        }
        onLink()
    }, [])
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('retail/paymentInfo/create_order');        
    };

    const cancleOrder = async (e) => {
        e.preventDefault();
        await axios.post('retail/paymentInfo/create_order'); 
    }

    return (
        <div style={{ width: '80%', display: 'block', margin: 'auto' }}>
            <Filter />
            {DoctorData?.map((items) => (
                <div className='Doctor'>
                    <div className="d-flex">
                        <div className="Doctor-img">
                            <div>
                                <img style={{ objectFit: 'cover' }} src={items.attributes.image} alt='avtar' />
                            </div>
                        </div>
                        <div className="Doctor-info d-flex justify-content-between w-100">
                            <div>
                                <h4 className="Doctor-title">Dr. {items.attributes.name}</h4>
                                <p className="Doctor-category">{items.attributes.category}</p>
                                <p className="Doctor-description">{items.attributes.description}</p>
                                <div className="Doctor-exp d-flex">
                                    <p>Rs: {items.attributes.fee}</p>
                                    <p>{items.attributes.exp} yrs of experience</p>
                                    <p>
                                        <img src={like} alt="likes" />
                                        <span>{items.attributes.likes}</span>
                                    </p>
                                </div>
                                {/* <Link
                                onClick={profile}
                                className="d-flex justify-content-center"
                            >
                                VIEW PROFILE
                            </Link> */}
                            </div>
                            <Link
                                onClick={profile}
                                className=""
                            >
                                VIEW PROFILE
                            </Link>
                            <div>
                                <img src={share} alt="share icon" />
                            </div>
                        </div>
                    </div>
                    <div className="Doctor-cta d-flex" style={{ marginTop: '40px' }}>

                        <a href="tel:+91338000777" className="btn btn-border flex-grow-1 flex-md-grow-0">
                            Call
                        </a>
                        <Link
                            onClick={handleSubmit}
                            //    to="/book"
                            className="btn btn-full flex-grow-1 flex-md-grow-0"
                        >
                            Book
                        </Link>

                    </div>
                </div>
            ))}
        </div>
    );
};
export default Doctor;
