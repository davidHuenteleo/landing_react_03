import "./section.css"

// importamos la imagen y despues lo usamos
import imgCover from "../../assets/images/cta-banner.jpg";

const cta = () => {

    return(
        <section className="cta" data-preloader>
            <div className="container">

                <div className="cta-card" data-reveal="left">

                    <div className="h1 card-title">
                        <h2>Designed for the our roads.</h2>

                        <p className="card-text">
                            Consectetur adiping elit sed jd loli la kira
                        </p>
                    </div>

                    <a href="#" className="btn btm-primary">
                        <span className="span">Book Now</span>
                        <i>icon</i>
                    </a>

                </div>

                <figure className="cta-banner">
                    <img src={imgCover}
                        alt="cta-banner" loading=""
                        width="330" height="206"
                        className="img-cover"/>
                </figure>

            </div>
        </section>

    )
}

export default cta;