import "./service.css"

// importamos la imagen y despues lo usamos
import img from "../../assets/images/stats-banner.jpg";

const Service = () => {


    return(
        <section className="section service" aria-labelledby="">
            
            <p className="section-subtitle has-before" id="service-label" data-reveal>
                What We Do!
            </p>

            <h2 className="h2 section-title" data-reveal>
                What Advantages will you get using an escooter?
            </h2>

            <div className="wrapper">
                <ul className="service-list" data-reveal="left">
                    <li className="service-item">
                        <div>
                            <h3 className="h5 card-title">Zero Contact Travel</h3>

                            <p className="card-text">
                                Charge Your electric vehicle at home using one of oir smart
                            </p>

                        </div>

                         <i>icon</i>

                    </li>
                </ul>


                {/* <figure className="service-banner img-holder" style="-">
                    <img src={img} width="805" height="510"
                         loading="lazy" alt="service banner" className="img-cover" />
                </figure> */}

                <ul className="service-list" data-reveal="right">
                    <li className="service-item">
                        <div className="card-icon">
                            <h3 className="h5 card-title">Recoverable Energy</h3>

                            <p className="card-text">
                                charge your electric vehicle at home using one of our smart
                            </p>

                        </div>
                    </li>
                </ul>

            </div>

        </section>
    )
}

export default Service;