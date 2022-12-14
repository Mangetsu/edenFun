import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
 return (
     <>
         <header className="header header--style2" id="navbar">
             <div className="header__bottom">
                 <div className="container">
                     <nav className="navbar navbar-expand-lg">
                         <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                             <div className="navbar-nav mainmenu">
                                 <ul>
                                     <li className="active">
                                         <Link to="/">Accueil</Link>
                                     </li>
                                     <li>
                                         <Link to="/events">Evenements</Link>
                                     </li>
                                     <li>
                                         <a to="#0">Communaut√©</a>
                                     </li>
                                     <li>
                                         <a to="#0">Contact</a>
                                     </li>
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