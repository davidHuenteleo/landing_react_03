import "./header.css"

// importamos la imagen y despues lo usamos
import heroBanner from "../../assets/images/hero-banner.png";


const Header = () => {
    return(


        <section className="section hero" aria-label="home">

            <div className="container">

                {/* hero-content */}
                <div className="hero-content" data-reveal="left">

                    <h1 className="h1 hero-title">
                        Book Your <span className="span">New Eco-Friendly</span>
                    </h1>

                    <ul className="hero-list">
                        <li>
                            <div className="hero-card">
                                <i>icon</i>
                                <p className="card-subtitle">Top speed</p>
                                <p className="card-subtitle">80 km /h</p>
                            </div>
                        </li>
                        <li>
                            <div className="hero-card">
                                <i>icon</i>
                                <p className="card-subtitle">Top speed</p>
                                <p className="card-subtitle">80 km /h</p>
                            </div>
                        </li>
                        <li>
                            <div className="hero-card">
                                <i>icon</i>
                                <p className="card-subtitle">Top speed</p>
                                <p className="card-subtitle">80 km /h</p>
                            </div>
                        </li>
                    </ul>

                    {/* Button */}
                    <a href="#" className="btn btn-secondary">
                        <span className="span">
                            Button
                        </span>
                    </a>

                </div>

                {/* image motocicleta */}
                <figure className="hero-banner" data-reveal="right">
                    <img src={heroBanner}
                    alt="moto"
                    className="w-100"/>
                </figure>

            </div>

        </section>
    )
}

export default Header;