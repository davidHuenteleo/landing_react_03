import "./footer.css"

// importamos la imagen y despues lo usamos
import img from "../../assets/images/footer-logo.svg";

const Footer = () => {
    return(

        <section className="footer">

            <div className="container">

                <div className="footer-top section">

                    <div className="newsletter-card">
                        <div className="card-icon">
                            <i>icon</i>
                        </div>

                        <div>
                            <h3 className="h3 card-title">
                                ff
                            </h3>

                            <form action="#" className="newsletter-form">
                                <label htmlFor="email" className="label">
                                    Email address
                                </label>
                                 <input type="email"
                                        id="email"
                                        name="email"
                                        className="email-field"
                                        placeholder="Enter your email" />

                                 <button type="submit">Subscribe</button>
                            </form>

                        </div>
                    </div>

                     <div className="footer-list">
                                <p className="h6 has-after">
                                    Volti WP Theme
                                </p>

                                <p className="footer-text">
                                    A leading developer of A-grade commercial,
                                    electric car and bike projects company has
                                    doubled its turnover year on year, with its
                                    staff numbers.
                                </p>

                                <a href="#" className="btn-outline">
                                    <span className="span">
                                        Get a quote
                                    </span>

                                    <i>icon</i>
                                </a>
                    </div>


                     <div className="footer-list">
                                <p className="h6 has-after">
                                    Volti WP Theme
                                </p>

                                <p className="footer-text">
                                    A leading developer of A-grade commercial,
                                    electric car and bike projects company has
                                    doubled its turnover year on year, with its
                                    staff numbers.
                                </p>

                                <a href="#" className="btn-outline">
                                    <span className="span">
                                        Get a quote
                                    </span>

                                    <i>icon</i>
                                </a>
                    </div>

                    <ul className="footer-list">
                        <li><a href="#" className="footer-link">About Us</a></li>
                        <li><a href="#" className="footer-link">About Us</a></li>
                        <li><a href="#" className="footer-link">About Us</a></li>
                        <li><a href="#" className="footer-link">About Us</a></li>
                        <li><a href="#" className="footer-link">About Us</a></li>
                        <li><a href="#" className="footer-link">About Us</a></li>

                        <li>
                            <p className="h6 has-after">Quick Contact</p>
                        </li>

                        <li>
                            <address className="footer-text">
                                2307 Beverley Rd Brooklyn..
                            </address>
                        </li>

                        <li>
                           <p className="footer-text">
                                If you have any questions or need help, feel free to contact witch our
                            </p>
                        </li>

                        <li>
                            <a href="tel: 9943049" className="contact-link">(002) 010304957893</a>
                        </li>

                    </ul>

                </div>

                <div className="footer-bottom">
                    <div>
                        <ul className="footer-bottom-list">

                            <li>
                                <a href="#" className="footer-bottom-link">soy un bloque</a>
                            </li>

                            <li>
                                <a href="#" className="footer-bottom-link">Terms of Payment</a>
                            </li>

                            <li>
                                <a href="#" className="footer-bottom-link">Terms of Payment</a>
                            </li>

                            <li>
                                <a href="#" className="footer-bottom-link">Terms of Payment</a>
                            </li>

                        </ul>

                        <p className="copyright">Made with love</p>

                    </div>

                    <img src={img} alt="volti home" />

                    <ul className="social-list">

                        <li>
                            <a href="#" className="social-link">
                                <i>icon</i>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="social-link">
                                <i>icon</i>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="social-link">
                                <i>icon</i>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="social-link">
                                <i>icon</i>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="social-link">
                                <i>icon</i>
                            </a>
                        </li>

                    </ul>

                </div>

            </div>
        </section>

    )
}

export default Footer;