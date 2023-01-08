import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className="slider-container">
                <div className="text-charcoal-grey-two text-delta u-m-t--30">
                    Categories
                </div>
                <Slider {...settings} >
                    <div style={{ outline: "none" }}>
                        <div>
                            <div
                                className=""
                                style={{ padding: '6px'}}
                            >
                                <a href="" target="_blank">
                                    <div className="slider-image">
                                        <img
                                            src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-2.640dcfd5.png"
                                        
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ outline: "none" }}
                    >
                        <div>
                            <div
                                className=""
                                style={{ padding: '6px' }}
                            >
                                <a href="" target="_blank">
                                    <div className="slider-image">
                                        <img
                                            src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-6.aa7d1cba.png"
                                        
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ outline: "none" }}
                    >
                        <div>
                            <div
                                className=""
                                style={{ padding: '6px' }}
                            >
                                <a
                                    href=""
                                    target="_blank"
                                >
                                    <div className="slider-image">
                                        <img
                                            src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-9.5029c27e.png"
                                        
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div

                        style={{ outline: "none" }}
                    >
                        <div>
                            <div
                                className=""
                                style={{ padding: '6px' }}
                            >
                                <a href="" target="_blank">
                                    <div className="slider-image">
                                        <img
                                            src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-8.c4cbe33a.png"
                                        
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div

                        style={{ outline: "none" }}
                    >
                        <div>
                            <div
                                className=""
                                style={{ padding: '6px' }}
                            >
                                <a href="" target="_blank">
                                    <div className="slider-image">
                                        <img
                                            src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-7.c81b7b95.png"
                                        
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div

                        style={{ outline: "none" }}
                    >
                        <div>
                            <div
                                className=""
                                style={{ padding: '6px' }}
                            >
                                <a href="" target="_blank">
                                    <div className="slider-image">
                                        <img
                                            src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-1.f17a3332.png"
                                        
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div

                        style={{ outline: "none" }}
                    >
                        <div>
                            <div
                                className=""
                                style={{ padding: '6px' }}
                            >
                                <a href="" target="_blank">
                                    <div className="slider-image">
                                        <img
                                            src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-3.faf3a8b9.png"
                                        
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div

                        style={{ outline: "none" }}
                    >
                        <div>
                            <div
                                className=""
                                style={{ padding: '6px' }}
                            >
                                <a href="" target="_blank">
                                    <div className="slider-image">
                                        <img
                                            src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-4.c31332e5.png"
                                        
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div

                        style={{ outline: "none" }}
                    >
                        <div>
                            <div
                                className=""
                                style={{ padding: '6px' }}
                            >
                                <a href="" target="_blank">
                                    <div className="slider-image">
                                        <img
                                            src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-5.7a1ab607.png"
                                        
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}