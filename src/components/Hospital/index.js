import React from 'react';
import "./Hospital.css";

const Hospital = () => {
  return (
    <div
  data-qa-id="hospital_card"
  className="u-cushion u-white-fill u-normal-text o-card o-card--separated c-list-card"
  style={{marginTop: '100px'}}
>
  <span />
  <div className="c-card">
    <div className="pure-g c-card__body u-spacer--bottom-less">
      <div className="pure-u-18-24">
        <div className="o-media">
          <div className="o-media__object img-thumbnail">
            <div className="u-spacer--right c-card__left c-card__photo ">
              <div className="LazyLoad is-visible" style={{ height: 100 }}>
                <img
                  src="//www.practostatic.com/web-assets/images/default_clinic.60df7b39c2ae.png"
                  alt="Oshodhara Mother and Child Hospital Pvt Ltd"
                  data-qa-id="hospital_profile_photo"
                  srcSet="//www.practostatic.com/web-assets/images/default_clinic.60df7b39c2ae.png"
                />
              </div>
              <span className="u-d-inlineblock u-spacer--top-less" />
            </div>
          </div>
          <div className="o-media__body u-cushion--right">
            <div className="c-card-info">
              <a
                href="/patna/hospital/oshodhara-mother-and-child-hospital-pvt-ltd-kankarbagh"
                className="u-color--primary"
              >
                <h2
                  data-qa-id="hospital_name"
                  className="u-title-font u-c-pointer u-bold"
                >
                  Oshodhara Mother and Child Hospital Pvt Ltd
                </h2>
              </a>
              <div
                className="c-card-info__item u-t-capitalize"
                data-qa-id="hospital-specialization"
              >
                <span>Pediatrics/Paediatrics</span>
                <span className="u-spacer--left-thin">
                  <span>Hospital</span>
                </span>
              </div>
              <div className="c-card-info__item" data-qa-id="doctors_count">
                <span>
                  <span>
                    {" "}
                    {/* */}2{/* */}{" "}
                  </span>
                  <span>Doctors</span>
                </span>
              </div>
              <div className="c-card-info__item u-spacer--top-thin">
                <div>
                  <div>
                    <div
                      className="LazyLoad is-visible c-carousel__lazy"
                      style={{ height: 36, width: 36 }}
                    >
                      <img
                        className="c-carousel__item"
                        data-qa-id="doctor-clinics-photo"
                        src="https://images1-fabric.practo.com/oshodhara-mother-and-child-hospital-pvt-ltd-patna-1444303976-561654680b7de.jpg/36x36"
                      />
                    </div>
                    <div
                      className="LazyLoad is-visible c-carousel__lazy"
                      style={{ height: 36, width: 36 }}
                    >
                      <img
                        className="c-carousel__item"
                        data-qa-id="doctor-clinics-photo"
                        src="https://images1-fabric.practo.com/oshodhara-mother-and-child-hospital-pvt-ltd-patna-1444304009-5616548954a9b.jpg/36x36"
                      />
                    </div>
                    <div
                      className="LazyLoad is-visible c-carousel__lazy"
                      style={{ height: 36, width: 36 }}
                    >
                      <img
                        className="c-carousel__item"
                        data-qa-id="doctor-clinics-photo"
                        src="https://images1-fabric.practo.com/oshodhara-mother-and-child-hospital-pvt-ltd-patna-1444304031-5616549f0a12b.jpg/36x36"
                      />
                    </div>
                    <div
                      className="LazyLoad is-visible c-carousel__lazy"
                      style={{ height: 36, width: 36 }}
                    >
                      <img
                        className="c-carousel__item"
                        data-qa-id="doctor-clinics-photo"
                        src="https://images1-fabric.practo.com/oshodhara-mother-and-child-hospital-pvt-ltd-patna-1444304051-561654b3c654a.jpg/36x36"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pure-u-6-24">
        <div className="c-card-info">
          <div className="u-spacer--bottom-less">
            <div
              className="u-pos-rel u-d-inlineblock "
              data-qa-id="star_rating"
              title="4.5"
            >
              <div className="common__star-rating tooltip-hover">
                <span className="common__star-rating__value">4.5</span>
                <span className="">
                  <i className="icon-ic_star_solid" />
                  <i className="icon-ic_star_solid" />
                  <i className="icon-ic_star_solid" />
                  <i className="icon-ic_star_solid" />
                  <i className="icon-ic_star_half" />
                </span>
              </div>
            </div>
          </div>
          <div className="u-spacer--bottom-less">
            <i
              className="c-card__icon icon-ic_message"
              data-qa-id="feedback_icon"
            />
            <a
              href="/patna/hospital/oshodhara-mother-and-child-hospital-pvt-ltd-kankarbagh/reviews"
              data-qa-id="feedback"
            >
              543{/* */} <span>Stories</span>
            </a>
          </div>
          <div className="u-spacer--bottom-less">
            <i
              data-qa-id="time_icon"
              className="c-card__icon icon-ic_time u-valign--top"
            />
            <span className="u-d-inlineblock u-valign--top">
              <span className="u-d-inlineblock u-valign--top">
                <span>
                  <span className="">
                    <span
                      data-qa-id="doctor_visit_days"
                      className="u-d-block u-bold"
                    >
                      <span>
                        <span>
                          <span>MON</span>
                          <span>-</span>
                          <span>SAT</span>
                        </span>
                      </span>
                    </span>
                    <span
                      data-qa-id="doctor_visit_timings"
                      className="u-d-block"
                    >
                      <span className="u-smallest-font">
                        <span>10:00 AM</span>
                        <span>-</span>
                        <span>01:00 PM</span>
                      </span>
                      <span className="u-smallest-font">
                        , <span>06:00 PM</span>
                        <span>-</span>
                        <span>07:00 PM</span>
                      </span>
                    </span>
                  </span>
                </span>
                <span>
                  <span className=" u-hide">
                    <span
                      data-qa-id="doctor_visit_days"
                      className="u-d-block u-bold"
                    >
                      <span>
                        <span>SUN</span>
                      </span>
                    </span>
                    <span
                      data-qa-id="doctor_visit_timings"
                      className="u-d-block"
                    >
                      <span className="u-smallest-font">
                        <span>10:00 AM</span>
                        <span>-</span>
                        <span>12:00 PM</span>
                      </span>
                    </span>
                  </span>
                </span>
                <span
                  data-qa-id="show_more_timing"
                  className="u-c-pointer u-color--primary"
                >
                  <span>show more</span>
                </span>
              </span>
            </span>
          </div>
          <div className="u-spacer--bottom-less">
            <i
              data-qa-id="locality_icon"
              className="c-card__icon icon-ic_location_system"
            />
            <div className="u-d-inlineblock u-valign--top">
              <a
                title="Kankarbagh"
                href="/patna/hospitals/all-hospitals/kankarbagh"
              >
                <h3
                  className="u-d-inlineblock c-locality__name"
                  data-qa-id="practice_locality"
                >
                  Kankarbagh
                </h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="pure-g u-cushion--top-less">
      <div className="o-media">
        <div className="o-media--middle pure-u-6-24">
          <div className="o-media__body">
            <div
              data-qa-id="footer_left_section"
              className="c-card-info-section"
            />
          </div>
        </div>
        <div className="o-media__object o-media--middle pure-u-18-24">
          <div
            data-qa-id="footer_right_section"
            className="u-t-right c-card-info-section"
          >
            <div className="pure-g u-t-right">
              <div className="pure-u-1">
                <a
                  href="/patna/hospital/oshodhara-mother-and-child-hospital-pvt-ltd-kankarbagh"
                  className="u-color--primary u-c-pointer u-bold u-cushion--medium-right"
                  data-qa-id="view_profile"
                >
                  <span>View Profile</span>
                </a>
                <button
                  data-qa-id="call_button"
                  className="u-t-capitalize u-bold c-btn--dark-medium"
                >
                  <i className="u-title-font icon-ic_call_filled u-valign--middle" />
                  <span className="u-valign--middle">Call Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="pure-g">
      <div className="pure-u-1-1 c-list-card__cta-block" />
    </div>
  </div>
</div>
  )
}

export default Hospital;