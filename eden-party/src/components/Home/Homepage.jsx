import React from 'react';
import Header from "../Header";
import Banner from "./Banner";
import Categories from "./Categories";
import EventsBlock from "./EventsBlock";

const Homepage = () => {
    return (
        <>
            <a href="eden-party/src/components/Home/Homepage#" className="scrollToTop"><i className="fa-solid fa-angle-up"></i></a>
            <Header />
            <Banner />
            <Categories/>
            <EventsBlock />
        </>
    );
}

export default Homepage;