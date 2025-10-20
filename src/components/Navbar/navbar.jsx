import { useState } from "react";
import "./navbar.css"

const Navbar = () => {


    // Logica
    
    const [isOpen, setIsOpen] = useState(false);


    return(
        <section className="header" data-header>
            <div className="container">

                <a href="#" className="logo">
                     <img src="" width="160" height="50" alt="volti home" />
                 </a>

                  <nav className={`navbar ${isOpen ? "active" : ""}`} data-navbar>
                    <ul className="navbar-list"> 

                        <li className="navbar-item">
                            <a href="#" className="navbar-link">Home</a>
                        </li>

                        <li className="navbar-item">
                            <a href="#" className="navbar-link">Home</a>
                        </li>

                        <li className="navbar-item">
                            <a href="#" className="navbar-link">Home</a>
                        </li>

                        <li className="navbar-item">
                            <a href="#" className="contact-number">Home</a>
                        </li>

                    </ul>

                </nav>

                <div className="header-action">
                        <a href="tel: + 6789876" className="contact-number">
                        {/* icon */}

                        <span className="span">+569 7894756</span>
                    </a>

                </div>

                {/* Button */}
                <button className="nav-toggle-btn" aria-label="toggle menu" data-nav-toggler onClick={() => setIsOpen(!isOpen)}>

                            {isOpen ? (
                            // Icono CLOSE (X)
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="close"
                            aria-hidden="true"
                            >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        ) : (
                            // Icono MENU (hamburguesa)
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="open"
                            aria-hidden="true"
                            >
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="18" x2="21" y2="18" />
                            </svg>
                        )}
                </button>

               
            </div>
 
        </section>


    )
}

export default Navbar;