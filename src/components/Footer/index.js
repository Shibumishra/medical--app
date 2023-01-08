import React from 'react';
import './footer.css';
import { FiPhoneCall } from 'react-icons/fi';
// import { FiPhoneCall } from 'react-icons/fi';

const Footer = () => {
    return (
        <div id="Content">
            <div className="content_wrapper clearfix">
                {/* .sections_group */}
                <div className="sections_group">
                    <div className="entry-content" itemProp="mainContentOfPage">
                        <div
                            className="section mcb-section   "
                            // style={{
                            //     paddingTop: 0,
                            //     paddingBottom: 40,
                            //     backgroundColor: "",
                            //     backgroundImage:
                            //         "url(https://3dincredible.com/wp-content/uploads/2018/10/Automatic-Lattice-Gneration.jpg)",
                            //     backgroundRepeat: "no-repeat",
                            //     backgroundPosition: "center top",
                            //     backgroundAttachment: "",
                            //     backgroundSize: "",
                            //     WebkitBackgroundSize: ""
                            // }}
                        >
                            <div className="section_wrapper mcb-section-inner">
                                <div
                                    className="wrap mcb-wrap one-fourth  clearfix"
                                    style={{ padding: "0px 10px 0px 10px", backgroundColor: "" }}
                                >
                                    <div className="column mcb-column one column_column  column-margin-">
                                        <div className="column_attr align_left" style={{}}>
                                            <h2
                                                style={{
                                                    color: "#ffffff",
                                                    textAlign: "left",
                                                    marginTop: 40
                                                }}
                                            >
                                                Quick Link
                                            </h2>
                                            <p style={{ textAlign: "left", marginLeft: 30 }}>
                                                <a
                                                    href="https://3dincredible.com/medica/"
                                                    style={{ fontSize: 15, color: "#ffffff" }}
                                                >
                                                    Home
                                                </a>
                                            </p>
                                            <p style={{ textAlign: "left", marginLeft: 30 }}>
                                                <a
                                                    href="https://3dincredible.com/medical/incredible/"
                                                    style={{ fontSize: 15, color: "#ffffff" }}
                                                >
                                                    About Us
                                                </a>
                                            </p>
                                            <p style={{ textAlign: "left", marginLeft: 30 }}>
                                                <a
                                                    href="https://3dincredible.com/medical/standard-implants/"
                                                    style={{ fontSize: 15, color: "#ffffff" }}
                                                >
                                                    Standard Implant
                                                </a>
                                            </p>
                                            <p style={{ textAlign: "left", marginLeft: 30 }}>
                                                <a
                                                    href="https://3dincredible.com/medical/case-study/"
                                                    style={{ fontSize: 15, color: "#ffffff" }}
                                                >
                                                    Cases
                                                </a>
                                            </p>
                                            <p style={{ textAlign: "left", marginLeft: 30 }}>
                                                <a
                                                    href="https://3dincredible.com/medical-our-process/"
                                                    style={{ fontSize: 15, color: "#ffffff" }}
                                                >
                                                    Our Design Process
                                                </a>
                                            </p>
                                            <p style={{ textAlign: "left", marginLeft: 30 }}>
                                                <a
                                                    href="https://3dincredible.com/blogs-medical/"
                                                    style={{ fontSize: 15, color: "#ffffff" }}
                                                >
                                                    Blogs
                                                </a>
                                            </p>
                                            <p style={{ textAlign: "left", marginLeft: 30 }}>
                                                <a
                                                    href="https://3dincredible.com/medical/contact-us/"
                                                    style={{ fontSize: 15, color: "#ffffff" }}
                                                >
                                                    Contact Us
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="wrap mcb-wrap one-fourth  clearfix"
                                    style={{ padding: "0px 10px 0px 10px", backgroundColor: "" }}
                                >
                                    <div className="column mcb-column one column_column  column-margin-">
                                        <div className="column_attr align_left" style={{}}>
                                            <h2
                                                style={{
                                                    color: "#ffffff",
                                                    textAlign: "left",
                                                    marginTop: 40
                                                }}
                                            >
                                                Contact Us
                                            </h2>
                                            <h2 style={{ color: "#fff", fontSize: 20 }}>Plant Address</h2>
                                            <i className="fa-solid fa-location-pin icon-location"></i>
                                            <p style={{ color: "#fff", marginTop: "-25px" }}>
                                                <span style={{ marginLeft: 20, fontSize: 14 }}>
                                                    Gat No. 699/1, Koregaon Bhima,
                                                </span>
                                                <br />
                                                <span style={{ marginLeft: 20, fontSize: 14 }}>
                                                    Behind Kalyani Forge, Tal- Shirur,
                                                </span>
                                                <br />
                                                <span style={{ marginLeft: 20, fontSize: 14 }}>
                                                    {" "}
                                                    Dist- Patna 412 216,
                                                </span>
                                                <br />
                                                <span style={{ marginLeft: 20, fontSize: 14 }}>
                                                    {" "}
                                                    Bihar, India.
                                                </span>
                                            </p>
                                            {/* <MdOutlineCall className="icon-call" /> */}
                                            <FiPhoneCall className="icon-call icons-footer" />
                                            <span style={{ marginLeft: 10, fontSize: 14 }}>
                                                <a href="tel to:+912137667933" style={{ color: "#fff" }}>
                                                    +912137667933
                                                </a>
                                                <a
                                                    style={{ marginLeft: 20, color: "#fff" }}
                                                    href="tel to:+912137667935"
                                                >
                                                    +912137667935
                                                </a>
                                            </span>
                                            <br />
                                            <br />
                                            <h2 style={{ color: "#fff", fontSize: 20 }}>
                                                Patna Office Address
                                            </h2>
                                            <i className="fa-solid fa-location-pin icon-location"></i>
                                            <p style={{ color: "#fff", marginTop: "-25px" }}>
                                                <span style={{ marginLeft: 20, fontSize: 14 }}>
                                                    G-11/S11, Paresh Industrial Complex,
                                                </span>
                                                <span style={{ marginLeft: 20, fontSize: 14 }}>
                                                    {" "}
                                                    Shankar sheth Road, Patna 411037,
                                                </span>
                                                <span style={{ marginLeft: 20, fontSize: 14 }}>
                                                    {" "}
                                                    Patna, India.
                                                </span>
                                            </p>
                                            <i className="icon-mobile icons-footer" />
                                            <FiPhoneCall className="icon-mobile icons-footer" />
                                            <span style={{ marginLeft: 10, fontSize: 14, color: "#fff" }}>
                                                <a href="tel to:+91 2026430080" style={{ color: "#fff" }}>
                                                    +91 7030940790
                                                </a>{" "}
                                                (Engineering) <br />
                                                <a
                                                    style={{ marginLeft: 20, color: "#fff" }}
                                                    href="tel to:+91 2026452423"
                                                >
                                                    +91 7030952719
                                                </a>{" "}
                                                (Medical)
                                            </span>
                                            <br />
                                            <i className="icon-mail" />
                                            <span style={{ marginLeft: 10, fontSize: 14 }}>
                                                <a
                                                    href="mailto:info@3dincredible.com, mangesh@3dincredible.com;"
                                                    style={{ color: "#fff" }}
                                                >
                                                    http://medical.retail-blitz.com
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="wrap mcb-wrap one-fourth  clearfix"
                                    style={{ padding: "0px 10px 0px 10px", backgroundColor: "" }}
                                >
                                    <div className="column mcb-column one column_column  column-margin-">
                                        <div className="column_attr align_left" style={{}}>
                                            <h2
                                                style={{
                                                    color: "#ffffff",
                                                    textAlign: "left",
                                                    marginTop: 40
                                                }}
                                            >
                                                Our Location
                                            </h2>
                                            <iframe
                                                style={{ border: 0 }}
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1096910.9378514038!2d85.18091219869574!3d25.435589399563117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f29937c52d4f05%3A0x831a0e05f607b270!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1643548609218!5m2!1sen!2sin"
                                                width={400}
                                                height={200}
                                                frameBorder={0}
                                                allowFullScreen=""
                                            />
                                            <iframe
                                                style={{ border: 0 }}
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1096910.9378514038!2d85.18091219869574!3d25.435589399563117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f29937c52d4f05%3A0x831a0e05f607b270!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1643548609218!5m2!1sen!2sin"
                                                width={400}
                                                height={200}
                                                frameBorder={0}
                                                allowFullScreen=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="wrap mcb-wrap one-fourth  clearfix"
                                    style={{ padding: "0px 10px 0px 10px", backgroundColor: "" }}
                                >
                                    <div className="column mcb-column one column_column  column-margin-">
                                        <div className="column_attr align_left" style={{}}>
                                            <h2
                                                style={{
                                                    color: "#ffffff",
                                                    textAlign: "left",
                                                    marginTop: 40
                                                }}
                                            >
                                                Quick Enquiry
                                            </h2>
                                            <div className="foot">
                                                <div
                                                    role="form"
                                                    className="wpcf7"
                                                    id="wpcf7-f618-p2072-o1"
                                                    lang="en-US"
                                                    dir="ltr"
                                                >
                                                    <div
                                                        className="screen-reader-response"
                                                        aria-live="polite"
                                                    />
                                                    <form
                                                        action="/medical-footer-page/#wpcf7-f618-p2072-o1"
                                                        method="post"
                                                        className="wpcf7-form"
                                                        noValidate="novalidate"
                                                    >
                                                        <div style={{ display: "none" }}>
                                                            <input
                                                                type="hidden"
                                                                name="_wpcf7"
                                                                defaultValue={618}
                                                            />
                                                            <input
                                                                type="hidden"
                                                                name="_wpcf7_version"
                                                                defaultValue="5.1.9"
                                                            />
                                                            <input
                                                                type="hidden"
                                                                name="_wpcf7_locale"
                                                                defaultValue="en_US"
                                                            />
                                                            <input
                                                                type="hidden"
                                                                name="_wpcf7_unit_tag"
                                                                defaultValue="wpcf7-f618-p2072-o1"
                                                            />
                                                            <input
                                                                type="hidden"
                                                                name="_wpcf7_container_post"
                                                                defaultValue={2072}
                                                            />
                                                        </div>
                                                        <p>
                                                            <label>
                                                                {" "}
                                                                <span className="wpcf7-form-control-wrap your-name">
                                                                    <input
                                                                        type="text"
                                                                        name="your-name"
                                                                        defaultValue=""
                                                                        size={40}
                                                                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                        aria-required="true"
                                                                        aria-invalid="false"
                                                                        placeholder="Name"
                                                                    />
                                                                </span>{" "}
                                                            </label>
                                                        </p>
                                                        <p>
                                                            <label>
                                                                <span className="wpcf7-form-control-wrap your-email">
                                                                    <input
                                                                        type="email"
                                                                        name="your-email"
                                                                        defaultValue=""
                                                                        size={40}
                                                                        className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                                                        aria-required="true"
                                                                        aria-invalid="false"
                                                                        placeholder="Email"
                                                                    />
                                                                </span>{" "}
                                                            </label>
                                                        </p>
                                                        <p>
                                                            <label>
                                                                <span className="wpcf7-form-control-wrap tel-131">
                                                                    <input
                                                                        type="tel"
                                                                        name="tel-131"
                                                                        defaultValue=""
                                                                        size={40}
                                                                        className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel"
                                                                        aria-required="true"
                                                                        aria-invalid="false"
                                                                        placeholder="Mobile No."
                                                                    />
                                                                </span>{" "}
                                                            </label>
                                                        </p>
                                                        <p>
                                                            <label>
                                                                <span className="wpcf7-form-control-wrap your-message">
                                                                    <textarea
                                                                        name="your-message"
                                                                        cols={40}
                                                                        rows={10}
                                                                        className="wpcf7-form-control wpcf7-textarea"
                                                                        aria-invalid="false"
                                                                        placeholder="Message"
                                                                        defaultValue={""}
                                                                    />
                                                                </span>{" "}
                                                            </label>
                                                        </p>
                                                        {/* <p>
                                                            <span className="wpcf7-form-control-wrap quiz-815">
                                                                <label>
                                                                    <span className="wpcf7-quiz-label">3+5</span>{" "}
                                                                    <input
                                                                        type="text"
                                                                        name="quiz-815"
                                                                        size={40}
                                                                        className="wpcf7-form-control wpcf7-quiz"
                                                                        autoComplete="off"
                                                                        aria-required="true"
                                                                        aria-invalid="false"
                                                                    />
                                                                </label>
                                                                <input
                                                                    type="hidden"
                                                                    name="_wpcf7_quiz_answer_quiz-815"
                                                                    defaultValue="ba776104a81b5d7902ca3d54d42ecc21"
                                                                />
                                                            </span>
                                                        </p> */}
                                                        <p>
                                                            <input
                                                                type="submit"
                                                                defaultValue="Send"
                                                                className="wpcf7-form-control wpcf7-submit"
                                                            />
                                                            <span className="ajax-loader" />
                                                        </p>
                                                        <div
                                                            className="wpcf7-response-output wpcf7-display-none"
                                                            aria-hidden="true"
                                                        />
                                                    </form>
                                                </div>
                                            </div>
                                            <p style={{ color: "#fff", fontSize: 12 }}>
                                                Videos and Photos Courtesy- Renishaw
                                            </p>
                                            <h2 style={{ color: "#fff", fontSize: 24 }}>Follow Us</h2>
                                            <a
                                                href="https://www.facebook.com/3D-Incredible-304998473330958/"
                                                target="_blank"
                                                rel="noopener"
                                            >
                                                <img src="https://3dincredible.com/wp-content/uploads/2019/01/Facebook01.png" />
                                            </a>
                                            &nbsp;&nbsp;&nbsp;
                                            <a
                                                href="https://twitter.com/3d_incredible"
                                                target="_blank"
                                                rel="noopener"
                                            >
                                                <img src="https://3dincredible.com/wp-content/uploads/2019/01/twitter01.png" />
                                            </a>
                                            &nbsp;&nbsp;&nbsp;
                                            <a
                                                href="https://www.linkedin.com/company/11403108/admin/updates/"
                                                target="_blank"
                                                rel="noopener"
                                            >
                                                <img src="https://3dincredible.com/wp-content/uploads/2019/01/Linkedin01.png" />
                                            </a>
                                            &nbsp;&nbsp;&nbsp;
                                            <a
                                                href="https://www.instagram.com/3dincredible/"
                                                target="_blank"
                                                rel="noopener"
                                            >
                                                <img src="https://3dincredible.com/wp-content/uploads/2019/01/Insta01.png" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section the_content no_content">
                            <div className="section_wrapper">
                                <div className="the_content_wrapper" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer;
