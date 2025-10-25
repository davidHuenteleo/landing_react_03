import "./mobileNav.css"

const MobileNav = ({ isOpen, toggleMenu }) => {
    return(
        <>
            <div
                className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>

                <div className="mobile-menu-container">
                    <img className="logo" src="" alt="Logo"/>

                    <ul>
                        <li>
                            <a className="menu-item">Home</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MobileNav