import React from "react";

const Banner = () => {
    return (
        <>
            <div className="banner banner--style3 padding-top bg_img" >
                <div className="container">
                    <div className="row g-0 justify-content-center justify-content-xl-between">
                        <div className="col-lg-5 col-12 wow fadeInLeft" data-wow-duration="1.5s">
                            <div className="banner__content">
                                <div className="banner__title">
                                    <h2>We Have More Than <span>2.000.000</span> Join Members</h2>
                                    <p>Still looking for your significant other? Ollya is the place for you! Join now to meet single men and women worldwide.</p>
                                    <a href="register.html" className="default-btn style-2"><span>Registration Now</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 wow fadeInUp" data-wow-duration="1.5s">
                            <div className="banner__thumb text-xl-end">
                                <img src="assets/images/banner/03.png" alt="banner" />
                                <div className="banner__thumb--shape">
                                    <div className="shapeimg">
                                        <img src="assets/images/banner/shape/home3/01.png" alt="dating thumb" />
                                    </div>
                                </div>
                                <div className="banner__thumb--title">
                                    <h4>Are You Waiting For Dating?</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;