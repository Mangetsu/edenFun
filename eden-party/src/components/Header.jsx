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
                                         <a to="#0">Communauté</a>
                                     </li>
                                     <li>
                                         <a to="#0">Contact</a>
                                     </li>
                                 </ul>
                             </div>
                             <ul className="button-group">
                                 <li><a href="login" className="default-btn login"><i className="fa-solid fa-user"></i> <span>Se connecter</span> </a></li>
                                 <li><a href="register" className="default-btn signup"><i className="fa-solid fa-users"></i> <span>S'inscrire</span> </a></li>
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