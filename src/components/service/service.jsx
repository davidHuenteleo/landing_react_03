import "./service.css"

// importamos la imagen y despues lo usamos
import img from "../../assets/images/service-banner.png";

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

                {/* content left */}
                <ul className="service-list" data-reveal="left">

                    {/* Li 01 */}
                    <li className="service-item">

                        <div>
                            <h3 className="h5 card-title">Zero Contact Travel</h3>

                            <p className="card-text">
                                Charge Your electric vehicle at home using one of oir smart
                            </p>
                        </div>

                        <div className="card-icon">
                            <i>🏍️</i>
                        </div>

                    </li>

                    {/* Li 01 */}
                    <li className="service-item">

                        <div>
                            <h3 className="h5 card-title">Zero Contact Travel</h3>

                            <p className="card-text">
                                Charge Your electric vehicle at home using one of oir smart
                            </p>
                        </div>

                        <div className="card-icon">
                            <i>🏍️</i>
                        </div>

                    </li>


                    {/* Li 01 */}
                    <li className="service-item">

                        <div>
                            <h3 className="h5 card-title">Zero Contact Travel</h3>

                            <p className="card-text">
                                Charge Your electric vehicle at home using one of oir smart
                            </p>
                        </div>

                        <div className="card-icon">
                            <i>🏍️</i>
                        </div>

                    </li>

                </ul>



                {/* image central */}
                <figure className="service-banner img-holder" data-reveal="right">
                    <img src={img} alt="service banner" width="1116" height="766" className="img-cover"/>
                </figure>



                {/* content right */}
                <ul className="service-list" data-reveal="right">

                    {/* Li 01 */}
                    <li className="service-item">

                        <div>
                            <h3 className="h5 card-title">Zero Contact Travel</h3>

                            <p className="card-text">
                                Charge Your electric vehicle at home using one of oir smart
                            </p>
                        </div>

                        <div className="card-icon">
                            <i>🏍️</i>
                        </div>

                    </li>

                    {/* Li 01 */}
                    <li className="service-item">

                        <div>
                            <h3 className="h5 card-title">Zero Contact Travel</h3>

                            <p className="card-text">
                                Charge Your electric vehicle at home using one of oir smart
                            </p>
                        </div>

                        <div className="card-icon">
                            <i>🏍️</i>
                        </div>

                    </li>


                    {/* Li 01 */}
                    <li className="service-item">

                        <div>
                            <h3 className="h5 card-title">Zero Contact Travel</h3>

                            <p className="card-text">
                                Charge Your electric vehicle at home using one of oir smart
                            </p>
                        </div>

                        <div className="card-icon">
                            <i>🏍️</i>
                        </div>

                    </li>

                </ul>
            </div>

            <div className="card-icon">
                <h3 className="h5 card-title">Recoverable Energy</h3>

                <p className="card-text">
                    ccambiar por el original despues
                </p>
            </div>

        </section>
    )
}

export default Service;