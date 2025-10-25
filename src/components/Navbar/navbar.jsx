import { useState } from "react";
import "./navbar.css"
import MobileNav from "./mobileNav/mobileNav"

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
            setOpenMenu(!openMenu)
    }

    return(
        <>
        <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>

        <nav className="nav-wrapper">
            <div className="nav-content">

                <img className="logo" src="" alt="" />

                <ul>
                    <li><a className="menu-item" href="">Hoffme</a></li>
                    <li><a className="menu-item" href="">Home</a></li>
                    <li><a className="menu-item" href="">Home</a></li>
                    <li><a className="menu-item" href="">Home</a></li>

                    <button className="#ContactMe">
                        botonsitoh
                    </button>
                </ul>

                <button className="menu-btn" onClick={toggleMenu}>
                    <span className={"material-symbols-outlined"} style={{fontSize: "1.8rem"}}>
                        {openMenu ? "close" : "menu"}
                    </span>
                </button>

            </div>
        </nav>

        </>
    )

}

export default Navbar;