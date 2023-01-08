import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 8,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 7,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 7,
                        slidesToScroll: 3,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 3
                    }
                }
            ]
        };
        return (
            <div className="products_productSlider__pION3">
                <div className="products_sectionHeader__3LmFs">
                    <h3>SHOP BY HEALTH CONDITIONS</h3>
                </div>
                <div className="ShopByCategory_scContainer__1puZB">
                    <>
                        <Slider {...settings} className="ShopByCategory_customScrollSlider__PuTku">
                            <div className="ShopByCategory_card__3mDoV">
                                <a href="/shop-by-health-conditions/corona-virus-care">
                                    <div className="ShopByCategory_cardWrap__oehof">
                                        <div className="ShopByCategory_cardIcon__ZkOaL">
                                            <img
                                                src="https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png"
                                                alt="Buy COVID Care Products Online"
                                                data-src="https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png"
                                                style={{ minWidth: 20, minHeight: 20 }}
                                            />
                                        </div>
                                        <div className="ShopByCategory_cardTitle__1EXPT">COVID Care</div>
                                    </div>
                                </a>
                            </div>
                            <div className="ShopByCategory_card__3mDoV">
                                <a href="/shop-by-health-conditions/corona-virus-protection">
                                    <div className="ShopByCategory_cardWrap__oehof">
                                        <div className="ShopByCategory_cardIcon__ZkOaL">
                                            <img
                                                src="https://newassets.apollo247.com/pub/media/healtharea/247images/c/o/coronavirus_protection_1.png"
                                                alt="Buy COVID Protection Products Online"
                                                data-src="https://newassets.apollo247.com/pub/media/healtharea/247images/c/o/coronavirus_protection_1.png"
                                                style={{ minWidth: 20, minHeight: 20 }}
                                            />
                                        </div>
                                        <div className="ShopByCategory_cardTitle__1EXPT">
                                            COVID Protection
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="ShopByCategory_card__3mDoV">
                                <a href="/shop-by-health-conditions/diabetic">
                                    <div className="ShopByCategory_cardWrap__oehof">
                                        <div className="ShopByCategory_cardIcon__ZkOaL">
                                            <img
                                                src="https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_diabetes.png"
                                                alt="Buy Diabetes Care Products Online"
                                                data-src="https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_diabetes.png"
                                                style={{ minWidth: 20, minHeight: 20 }}
                                            />
                                        </div>
                                        <div className="ShopByCategory_cardTitle__1EXPT">Diabetes Care</div>
                                    </div>
                                </a>
                            </div>
                            <div className="ShopByCategory_card__3mDoV">
                                <a href="/shop-by-health-conditions/mind-care">
                                    <div className="ShopByCategory_cardWrap__oehof">
                                        <div className="ShopByCategory_cardIcon__ZkOaL">
                                            <img
                                                src="https://newassets.apollo247.com/pub/media/healtharea/247images/m/i/mind_care.jpg"
                                                alt="Buy Mind Care Products Online"
                                                data-src="https://newassets.apollo247.com/pub/media/healtharea/247images/m/i/mind_care.jpg"
                                                style={{ minWidth: 20, minHeight: 20 }}
                                            />
                                        </div>
                                        <div className="ShopByCategory_cardTitle__1EXPT">Mind Care</div>
                                    </div>
                                </a>
                            </div>
                            <div className="ShopByCategory_card__3mDoV">
                                <a href="/shop-by-health-conditions/liver-care">
                                    <div className="ShopByCategory_cardWrap__oehof">
                                        <div className="ShopByCategory_cardIcon__ZkOaL">
                                            <img
                                                src="https://newassets.apollo247.com/pub/media/healtharea/247images/l/i/liver_care.jpg"
                                                alt="Buy Liver Care Products Online"
                                                data-src="https://newassets.apollo247.com/pub/media/healtharea/247images/l/i/liver_care.jpg"
                                                style={{ minWidth: 20, minHeight: 20 }}
                                            />
                                        </div>
                                        <div className="ShopByCategory_cardTitle__1EXPT">Liver Care</div>
                                    </div>
                                </a>
                            </div>
                            <div className="ShopByCategory_card__3mDoV">
                                <a href="/shop-by-health-conditions/cardiac">
                                    <div className="ShopByCategory_cardWrap__oehof">
                                        <div className="ShopByCategory_cardIcon__ZkOaL">
                                            <img
                                                src="https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_heart.png"
                                                alt="Buy Cardiac Products Online"
                                                data-src="https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_heart.png"
                                                style={{ minWidth: 20, minHeight: 20 }}
                                            />
                                        </div>
                                        <div className="ShopByCategory_cardTitle__1EXPT">Cardiac</div>
                                    </div>
                                </a>
                            </div>
                            <div className="ShopByCategory_card__3mDoV">
                                <a href="/shop-by-health-conditions/pain-relief">
                                    <div className="ShopByCategory_cardWrap__oehof">
                                        <div className="ShopByCategory_cardIcon__ZkOaL">
                                            <img
                                                src="https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_arthritis.png"
                                                alt="Buy Pain Relief Products Online"
                                                data-src="https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_arthritis.png"
                                                style={{ minWidth: 20, minHeight: 20 }}
                                            />
                                        </div>
                                        <div className="ShopByCategory_cardTitle__1EXPT">Pain Relief</div>
                                    </div>
                                </a>
                            </div>
                            <div className="ShopByCategory_card__3mDoV">
                                <a href="/shop-by-health-conditions/oral-care">
                                    <div className="ShopByCategory_cardWrap__oehof">
                                        <div className="ShopByCategory_cardIcon__ZkOaL">
                                            <img
                                                src="https://newassets.apollo247.com/pub/media/healtharea/247images/o/r/oral_care_2.png"
                                                alt="Buy Oral Care Products Online"
                                                data-src="https://newassets.apollo247.com/pub/media/healtharea/247images/o/r/oral_care_2.png"
                                                style={{ minWidth: 20, minHeight: 20 }}
                                            />
                                        </div>
                                        <div className="ShopByCategory_cardTitle__1EXPT">Oral Care</div>
                                    </div>
                                </a>
                            </div>
                            <div className="ShopByCategory_card__3mDoV">
                                <a href="/shop-by-health-conditions/respiratory">
                                    <div className="ShopByCategory_cardWrap__oehof">
                                        <div className="ShopByCategory_cardIcon__ZkOaL">
                                            <img
                                                src="https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_lungs.png"
                                                alt="Buy Respiratory Products Online"
                                                data-src="https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_lungs.png"
                                                style={{ minWidth: 20, minHeight: 20 }}
                                            />
                                        </div>
                                        <div className="ShopByCategory_cardTitle__1EXPT">Respiratory</div>
                                    </div>
                                </a>
                            </div>
                            <div className="ShopByCategory_card__3mDoV">
                                <a href="/shop-by-health-conditions/cold-immunity">
                                    <div className="ShopByCategory_cardWrap__oehof">
                                        <div className="ShopByCategory_cardIcon__ZkOaL">
                                            <img
                                                src="https://newassets.apollo247.com/pub/media/healtharea/247images/c/o/cold_and_immunity_21oct.png"
                                                alt="Buy Cold & Immunity Products Online"
                                                data-src="https://newassets.apollo247.com/pub/media/healtharea/247images/c/o/cold_and_immunity_21oct.png"
                                                style={{ minWidth: 20, minHeight: 20 }}
                                            />
                                        </div>
                                        <div className="ShopByCategory_cardTitle__1EXPT">
                                            Cold &amp; Immunity
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="ShopByCategory_card__3mDoV">
                                <a href="/shop-by-health-conditions/stomach-care">
                                    <div className="ShopByCategory_cardWrap__oehof">
                                        <div className="ShopByCategory_cardIcon__ZkOaL">
                                            <img
                                                src="https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_stomach.png"
                                                alt="Buy Stomach Care Products Online"
                                                data-src="https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_stomach.png"
                                                style={{ minWidth: 20, minHeight: 20 }}
                                            />
                                        </div>
                                        <div className="ShopByCategory_cardTitle__1EXPT">Stomach Care</div>
                                    </div>
                                </a>
                            </div>
                            <div className="ShopByCategory_card__3mDoV">
                                <a href="/shop-by-health-conditions/sexual-health">
                                    <div className="ShopByCategory_cardWrap__oehof">
                                        <div className="ShopByCategory_cardIcon__ZkOaL">
                                            <img
                                                src="https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_condom.png"
                                                alt="Buy Sexual Health Products Online"
                                                data-src="https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_condom.png"
                                                style={{ minWidth: 20, minHeight: 20 }}
                                            />
                                        </div>
                                        <div className="ShopByCategory_cardTitle__1EXPT">Sexual Health</div>
                                    </div>
                                </a>
                            </div>
                            <div className="ShopByCategory_card__3mDoV">
                                <a href="/shop-by-health-conditions/eye-ear-care">
                                    <div className="ShopByCategory_cardWrap__oehof">
                                        <div className="ShopByCategory_cardIcon__ZkOaL">
                                            <img
                                                src="https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_eyeear.png"
                                                alt="Buy Eye and Ear Care Products Online"
                                                data-src="https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_eyeear.png"
                                                style={{ minWidth: 20, minHeight: 20 }}
                                            />
                                        </div>
                                        <div className="ShopByCategory_cardTitle__1EXPT">
                                            Eye and Ear Care
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="ShopByCategory_card__3mDoV">
                                <a href="/shop-by-health-conditions/adult-care">
                                    <div className="ShopByCategory_cardWrap__oehof">
                                        <div className="ShopByCategory_cardIcon__ZkOaL">
                                            <img
                                                src="https://newassets.apollo247.com/pub/media/healtharea/247images/a/d/adult.png"
                                                alt="Buy Elderly Care Products Online"
                                                data-src="https://newassets.apollo247.com/pub/media/healtharea/247images/a/d/adult.png"
                                                style={{ minWidth: 20, minHeight: 20 }}
                                            />
                                        </div>
                                        <div className="ShopByCategory_cardTitle__1EXPT">Elderly Care</div>
                                    </div>
                                </a>
                            </div>
                        </Slider>
                    </>
                </div>
            </div>
        );
    }
}