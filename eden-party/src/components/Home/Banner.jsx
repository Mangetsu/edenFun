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
                                    <h2>Bienvenue sur le nouvel espace de cohésion</h2>
                                    <h2><span>ProwebCE-Edenred</span></h2>
                                    <p>Tu trouveras ici tout un tas d'événements professionnelles ou extra-professionnels.
                                        Crée des événements, abonnes-toi à ceux déjà existants et profite de ton moment !
                                        Loisirs, déjeuners, activités sportives, afterworks, et ateliers de team buldings sont possibles</p>
                                    <a href="register" className="default-btn style-2"><span>Inscrivez-vous !</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 wow fadeInUp" data-wow-duration="1.5s">
                            <div className="banner__thumb text-xl-end">
                                <img src="assets/images/banner/banner-img.png" alt="banner" />
                                <div className="banner__thumb--shape">
                                    <div className="shapeimg">
                                        <img src="assets/images/banner/shape/home3/01.png" alt="dating thumb" />
                                    </div>
                                </div>
                                <div className="banner__thumb--title">
                                    <h4>On est maintenant <span>2.000.000</span> :)</h4>
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