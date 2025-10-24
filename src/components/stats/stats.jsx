import "./stats.css"

// importamos la imagen y despues lo usamos
import img from "../../assets/images/stats-banner.jpg";

const Stats = () => {


    return(
        <section className="section stats" aria-label="statistics">
            <div className="container">

                <ul className="stats-list" data-reveal>

                    <li className="stats-card">
                        <h3 className="h3 card-title">650m</h3>

                        <p className="card-text">
                            Check charge status temotely through Ether app
                        </p>
                    </li>

                    <li className="stats-card">
                        <h3 className="h3 card-title">564+</h3>

                        <p className="card-text">
                            Check charge status temotely through Ether app
                        </p>
                    </li>

                    <li className="stats-card">
                        <h3 className="h3 card-title">564+</h3>

                        <p className="card-text">
                            Check charge status temotely through Ether app
                        </p>
                    </li>

                </ul>

                <div className="stats-banner" data-reveal>

                        <img src={img} width="1398" height="565"
                            loading="lazy" alt="video banner" className="img-cover"/>

                        <button className="play-btn" aria-label="play video">
                            <span role="img" aria-label="car">p</span>
                        </button>
                </div>

            </div>

        </section>
    )
}

export default Stats;