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
                        slidesToShow: 3,
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
            <div>
                <div className="text-charcoal-grey-two text-delta u-m-t--30">
                    Health condition
                </div>
                <Slider {...settings} className="h-w-c u-m-t--15 slick-initialized" dir="ltr">
                    <div style={{ outline: "none", width: 295 }}>
                        <div>
                            <div
                                className="h-w-c__slider u-outline--none u-p-r--10"
                                tabIndex={-1}
                                style={{ width: "100%", padding: '6px' }}
                            >
                                <a href="/health-products/skin-care/l" target="_blank">
                                    <div className="slider-image">
                                        <img
                                            src="//www.practostatic.com/ecommerce-assets/static/media/home/desktop/h-c-5.a8ae14dd.png"
                                            className="u-shape-wid--100"
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ outline: "none", width: 295 }}
                    >
                        <div>
                            <div
                                className="h-w-c__slider u-outline--none u-p-r--10"
                                tabIndex={-1}
                                style={{ width: "100%", padding: '6px' }}
                            >
                                <a href="/health-products/sexual-wellness/l" target="_blank">
                                    <div className="slider-image">
                                        <img
                                            src="//www.practostatic.com/ecommerce-assets/static/media/home/desktop/h-c-6.51626a1a.png"
                                            className="u-shape-wid--100"
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ outline: "none", width: 295 }}
                    >
                        <div>
                            <div
                                className="h-w-c__slider u-outline--none u-p-r--10"
                                tabIndex={-1}
                                style={{ width: "100%", padding: '6px' }}
                            >
                                <a
                                    href="/health-products/weight-management/l"
                                    target="_blank"
                                >
                                    <div className="slider-image">
                                        <img
                                            src="//www.practostatic.com/ecommerce-assets/static/media/home/desktop/h-c-7.476668e1.png"
                                            className="u-shape-wid--100"
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div

                        style={{ outline: "none", width: 295 }}
                    >
                        <div>
                            <div
                                className="h-w-c__slider u-outline--none u-p-r--10"
                                tabIndex={-1}
                                style={{ width: "100%", padding: '6px' }}
                            >
                                <a href="/health-products/pain-relief/l" target="_blank">
                                    <div className="slider-image">
                                        <img
                                            src="//www.practostatic.com/ecommerce-assets/static/media/home/desktop/h-c-4.5e130b77.png"
                                            className="u-shape-wid--100"
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div

                        style={{ outline: "none", width: 295 }}
                    >
                        <div>
                            <div
                                className="h-w-c__slider u-outline--none u-p-r--10"
                                tabIndex={-1}
                                style={{ width: "100%", padding: '6px' }}
                            >
                                <a href="/health-products/heart-health/l" target="_blank">
                                    <div className="slider-image">
                                        <img
                                            src="//www.practostatic.com/ecommerce-assets/static/media/home/desktop/h-c-2.bcd2bdc9.png"
                                            className="u-shape-wid--100"
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div

                        style={{ outline: "none", width: 295 }}
                    >
                        <div>
                            <div
                                className="h-w-c__slider u-outline--none u-p-r--10"
                                tabIndex={-1}
                                style={{ width: "100%", padding: '6px' }}
                            >
                                <a href="/health-products/cough-reliever/l" target="_blank">
                                    <div className="slider-image">
                                        <img
                                            src="//www.practostatic.com/ecommerce-assets/static/media/home/desktop/h-c-3.eeed1ea0.png"
                                            className="u-shape-wid--100"
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div

                        style={{ outline: "none", width: 295 }}
                    >
                        <div>
                            <div
                                className="h-w-c__slider u-outline--none u-p-r--10"
                                style={{ width: "100%", padding: '6px' }}
                            >
                                <a href="/health-products/diabetes-care/l" target="_blank">
                                    <div className="slider-image">
                                        <img
                                            src="//www.practostatic.com/ecommerce-assets/static/media/home/desktop/h-c-1.6befede3.png"
                                            className="u-shape-wid--100"
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