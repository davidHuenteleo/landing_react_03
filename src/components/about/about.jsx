import "./about.css"

// Import image and use it
import img from "../../assets/images/about-banner-1.jpg";

const About = () => {
    return(
        <section className="section about" aria-labelledby="about-label">
            <div className="container">

                <figure className="about-banner" data-reveal="left">
                    <img src={img} loading="lazy" alt="" className="w-100 img-1"/>
                    <img src={img} loading="lazy" alt="" className="w-100 img-2"/>
                </figure>

                <div className="about-content" data-reveal="right">

                    <p className="section-subtitle has-before" id="about-label">
                        What We Do!
                    </p>

                    <h2 className="section-text">
                        Our mission is to put an electric vehicle charge
                    </h2>

                    <p className="section-text">
                        Charge your electric vehicle at home using one of our..
                    </p>

                    <div className="about-wrapper">
                        
                        <div className="about-card">
                            <div className="title-wrapper">

                                <span role="img" aria-label="car">🚗</span>

                                <h3 className="card-title">Zero contact travel</h3>

                            </div>

                            <p className="card-text">
                                We love our customers and we love the way they come.
                            </p>
                        </div>


                        <div className="about-card">
                            <div className="title-wrapper">

                                <span role="img" aria-label="car">🚗</span>

                                <h3 className="card-title">No driving License</h3>

                            </div>

                            <p className="card-text">
                                We love our customers and we love the way they come.
                            </p>
                        </div>


                    </div>

                    <ul className="about-list">
                        <li className="about-item">
                            <span role="img" aria-label="car">🚗</span>
                            <span className="span">Detachable battery, take..</span>
                        </li>

                        <li className="about-item">
                            <span className="">Enjoy a hassle-free ride by charging just for 3 hours.</span>
                        </li>

                    </ul>

                    <a href="#" className="btn btn-primary">
                        <span className="span">Read More</span>

                        <span role="img" aria-label="car">🚗</span>
                    </a>


                </div>
            </div>
        </section>
    )
}

export default About;