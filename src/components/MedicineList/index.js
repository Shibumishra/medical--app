import React from 'react';
import './style/medicalList.css';
import Card from './Card';

function Medicines() {
    return (
        <div style={{marginTop: '80px'}}>
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
                        <div className="carousel-inner">
                            <div className="item active">
                                <img
                                    src="https://seniorcarevictoria.ca/seniorcarevictoria.ca/uploads/2015/12/slider-medications.jpg"
                                    alt="VW Ambulance"
                                    className="img-responsive img-carousel-medicines"
                                />
                            </div>
                            <div className="item">
                                <img
                                    src="https://www.alhaya-medical.com/wp-content/uploads/2017/11/Pharma-Cosmetics-Slider.png"
                                    alt="Another Ambulance"
                                    className="img-responsive img-carousel-medicines"
                                />
                            </div>
                            <div className="item">
                                <img
                                    src="http://www.palliativemedicalsystems.com/images/mini-slider-1.jpg"
                                    alt="Air Ambulance"
                                    className="img-responsive img-carousel-medicines"
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
            
            <Card />
            
        </div>
    );
}

export default Medicines;
