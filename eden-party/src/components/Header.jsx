import React from "react";

const Header = () => {
 return (
     <>
         <header className="header header--style2" id="navbar">
             <div className="header__top d-none d-lg-block">
                 <div className="container">
                     <div className="header__top--area">
                         <div className="header__top--left">
                             <ul>
                                 <li>
                                     <i className="fa-solid fa-phone"></i> <span>+800-123-4567 6587</span>
                                 </li>
                                 <li>
                                     <i className="fa-solid fa-location-dot"></i> Beverley, New York 224 USA
                                 </li>
                             </ul>
                         </div>
                         <div className="header__top--right">
                             <ul>
                                 <li><a href="#"><i className="fa-brands fa-facebook-messenger"></i></a></li>
                                 <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                 <li><a href="#"><i className="fa-brands fa-vimeo-v"></i></a></li>
                                 <li><a href="#"><i className="fa-brands fa-skype"></i></a></li>
                                 <li><a href="#"><i className="fa-solid fa-rss"></i></a></li>
                             </ul>
                         </div>
                     </div>
                 </div>
             </div>
             <div className="header__bottom">
                 <div className="container">
                     <nav className="navbar navbar-expand-lg">
                         <a className="navbar-brand" href="index.html"><img src="assets/images/logo/logo.png" alt="logo" /></a>
                         <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                                 data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                                 aria-label="Toggle navigation">
                             <span className="navbar-toggler--icon"></span>
                         </button>
                         <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                             <div className="navbar-nav mainmenu">
                                 <ul>
                                     <li className="active">
                                         <a href="#0">Home</a>
                                         <ul>
                                             <li><a href="index.html">Home Page One</a></li>
                                             <li><a href="index-2.html">Home Page Two</a></li>
                                             <li><a href="index-3.html" className="active">Home Page Three</a></li>
                                         </ul>
                                     </li>
                                     <li>
                                         <a href="#0">Pages</a>
                                         <ul>
                                             <li><a href="about.html">About Us</a></li>
                                             <li><a href="membership.html">Membership</a></li>
                                             <li><a href="login.html">Log In</a></li>
                                             <li><a href="register.html">Sign Up</a></li>
                                             <li><a href="comingsoon.html">comingsoon</a></li>
                                             <li><a href="404.html">404</a></li>
                                         </ul>
                                     </li>
                                     <li>
                                         <a href="#0">Community</a>
                                         <ul>
                                             <li><a href="community.html">Community</a></li>
                                             <li><a href="group.html">All Group</a></li>
                                             <li><a href="members.html">All Members</a></li>
                                             <li><a href="activity.html">Activity</a></li>

                                         </ul>
                                     </li>
                                     <li>
                                         <a href="#0">Shops</a>
                                         <ul>
                                             <li><a href="shop.html">Product</a></li>
                                             <li><a href="shop-single.html">Product Details</a></li>
                                             <li><a href="shop-cart.html">Product Cart</a></li>
                                         </ul>
                                     </li>
                                     <li>
                                         <a href="#0">Blogs</a>
                                         <ul>
                                             <li><a href="blog.html">Blog</a></li>
                                             <li><a href="blog-2.html">Blog Style Two</a></li>
                                             <li><a href="blog-single.html">Blog Details</a></li>
                                         </ul>
                                     </li>
                                     <li><a href="contact.html">contact</a></li>
                                 </ul>
                             </div>
                             <ul className="button-group">
                                 <li><a href="login.html" className="default-btn login"><i className="fa-solid fa-user"></i> <span>LOG IN</span> </a></li>
                                 <li><a href="register.html" className="default-btn signup"><i className="fa-solid fa-users"></i> <span>SIGN UP</span> </a></li>
                             </ul>
                         </div>
                     </nav>
                 </div>
             </div>
         </header>
     </>
 );
};

export default Header;