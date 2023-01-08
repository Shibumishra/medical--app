import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { FaBars } from 'react-icons/fa';
import './header.css';

const Header = () => {
    const auth = useSelector(state => state.auth)
    const { user, isLogged } = auth
    const [isScrolled, setIsScrolled] = useState(false);
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };


    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if (showLinks) {
            linksContainerRef.current.style.height = `${linksHeight}px`;
        } else {
            linksContainerRef.current.style.height = '0px';
        }
    }, [showLinks]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])


    const handleLogout = async () => {
        try {
            await axios.get('retail/login')
            localStorage.removeItem('firstLogin')
            window.location.href = "/";
        } catch (err) {
            window.location.href = "/";
        }
    }

    const userLink = () => {
        return <li className="drop-nav">
            <Link to="#" className="avatar">
                <img src={user.avatar} alt="" /> {user.name} <i className="fas fa-angle-down"></i>
            </Link>
            <ul className="dropdown">
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
            </ul>
        </li>
    }

    const transForm = {
        transform: isLogged ? "translateY(-5px)" : 0
    }

    return (
        <nav className={`${isScrolled ? 'navbar-fixed' : 'navbar-top'}`}>
            <div className='nav-center'>
                <div className='nav-header'>
                    <Link to="/">
                        <img style={{ width: "130px", height: "50px", borderRadius: "2px" }} src='logo2.png' />
                    </Link>
                    <button className='nav-toggle' onClick={toggleLinks}>
                        <FaBars />
                    </button>
                </div>
                <div className='links-container' ref={linksContainerRef}>
                    <ul className='links' ref={linksRef}>
                        <li>
                            <Link style={{ fontSize: "22px" }} to="/doctorList"> Doctors </Link>
                        </li>
                        <li>
                            <Link style={{ fontSize: "22px" }} to="/hospital">Hospitals </Link>
                        </li>
                        <li>
                            <Link style={{ fontSize: "22px" }} to="/ambulances">Ambulance</Link>
                        </li>
                        <li>
                            <Link style={{ fontSize: "22px" }} to="/medicine">Medicines</Link>
                        </li>
                        <li>
                            <Link style={{ fontSize: "22px" }} to="/service"> Services</Link>
                        </li>
                        {/* <ul style={transForm}>
                            {
                                isLogged
                                    ? userLink()
                                    : <li className="signin" style={{ fontSize: "20px" }}><Link to="/login"><i className="fas fa-user"></i> Sign in</Link></li>
                            }

                        </ul> */}
                    </ul>
                </div>

                <ul className='social-icons'>
                    <Link to="/appointments">
                        <button className="appointment_btn">
                            Book Apportionment
                        </button>
                    </Link>
                    <Link to="/getslot">
                        <button className="appointment_btn">
                            Get Slot
                        </button>
                    </Link>
                    <ul style={transForm}>
                        {
                            isLogged
                                ? userLink()
                                : <li style={{ fontSize: "20px" }}><Link to="/login"><i className="fas fa-user"></i> Sign in</Link></li>
                        }

                    </ul>
                </ul>
            </div>
        </nav>
    );
};

export default Header;