import React from 'react'
import './home.css'
import Services from './Services';
import Review from './Review/Review';
import Appointment from './Appointment';
import UsersImpress from './UsersImpress';
import Banner from './Banner';

function Home() {
    return (
        <div>
            <Banner />
            <section className="services" id="post">
                <Services />
            </section>
            <section className="review">
                <Review />
            </section>
            <section className="features_icons">
                <UsersImpress />
            </section>
            <section className="appointment">
                <Appointment />
            </section>
            <section className="post" id="post">
                <div className="container min-vh-100">
                    <h1 className="heading"> out posts </h1>
                    <div className="under_line"></div>
                    <div className="box-container">
                        <div className="box" >
                            <img src="https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" alt="" />
                            <div className="content">
                                <span>Aug 5, 2021</span>
                                <a href="#"><h3>post title goes here</h3></a>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ex porro libero at veniam molestias facere quo necessitatibus ipsum ad?</p>
                                <a href="#"><button className="button">learn more</button></a>
                            </div>
                        </div>
                        <div className="box">
                            <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_find_doctors.png" alt="" />
                            <div className="content">
                                <span>Aug 5, 2021</span>
                                <a href="#"><h3>post title goes here</h3></a>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ex porro libero at veniam molestias facere quo necessitatibus ipsum ad?</p>
                                <a href="#"><button className="button">learn more</button></a>
                            </div>
                        </div>
                        <div className="box">
                            <img src="https://media.istockphoto.com/photos/portrait-of-mature-male-doctor-wearing-white-coat-standing-in-picture-id1203995945?k=20&m=1203995945&s=612x612&w=0&h=g0_ioNezBqP0NXrR_36-A5NDHIR0nLabFFrAQVk4PhA=" alt="" />
                            <div className="content">
                                <span>Aug 5, 2021</span>
                                <a href="#"><h3>post title goes here</h3></a>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ex porro libero at veniam molestias facere quo necessitatibus ipsum ad?</p>
                                <a href="#"><button className="button">learn more</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
