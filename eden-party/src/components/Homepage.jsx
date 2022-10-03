import React from 'react';
import Footer from "./Footer";
import Header from "./Header";
import Banner from "./Banner";
import Meet from "./Meet";
import Members from "./Members";
import Story from "./Story";

const Homepage = () => {
    return (
        <>
            <a href="#" className="scrollToTop"><i className="fa-solid fa-angle-up"></i></a>
            <Header />
            <Banner />
            <Story/>
            <Meet />
            <Members />
            <Footer />
        </>
    );
}

export default Homepage;