import "./contact.css"

// importamos la imagen y despues lo usamos
import PhoneIcon from "../../assets/images/loading.svg";

const contact = () => {
    return(

        <section className="contact" aria-label="home">

            <div className="container">

                <ul className="contact-list">

                    <li>
                        <div className="contact-card">
                            <div className="card-icon">
                                <img src={PhoneIcon} alt="phone" />
                            </div>

                            <div>
                                <h3 className="h6">Hot Line</h3>
                                <a href="#" className="card-subtitle">
                                    +(01) 1234-57-890
                                </a>
                            </div>

                        </div>
                    </li>

                    <li>
                        <div className="contact-card">
                            <div className="card-icon">
                                <img src={PhoneIcon} alt="phone" />
                            </div>

                            <div>
                                <h3 className="h6">Hot Line</h3>
                                <a href="#" className="card-subtitle">
                                    +(01) 1234-57-890
                                </a>
                            </div>

                        </div>
                    </li>

                    <li>
                        <div className="contact-card">
                            <div className="card-icon">
                                <img src={PhoneIcon} alt="phone" />
                            </div>

                            <div>
                                <h3 className="h6">Hot Line</h3>
                                <a href="#" className="card-subtitle">
                                    +(01) 1234-57-890
                                </a>
                            </div>

                        </div>
                    </li>

                </ul>

            </div>
        </section>
    )
}

export default contact;