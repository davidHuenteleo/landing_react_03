import "./blog.css"

// importamos la imagen y despues lo usamos
import img from "../../assets/images/blog-1.jpg";

const blog = () => {

    return(
        <section className="section blog" aria-labelledby="blogLabel">

            <div className="container">

                <div className="title-wrapper">

                    <div className="">
                        <p className="section-subtitle has-before" id="blogLabel">
                            soy la kira
                        </p>

                        <h2 className="h2 section-title">
                            Our recent article for the electric vehicle systems
                        </h2>
                    </div>

                    <a href="#" className="btn btn-secondary">
                        <span className="span">
                            View More Blog
                        </span>
                    </a>


                </div>

                {/* BlogList 01 */}
                <div className="blog-list" >
                    <li>
                        <div className="blog-card">
                            <figure className="card-banner img-holder" data-reveal="left">
                                <img src={img} width="770" height="550"
                                    loading="lazy" alt="" className="img-cover"/>
                             </figure>

                             <div className="card-content">
                                <time className="publish-date" dateTime="2022-06-04">
                                    03 Jun 2022
                                </time>

                                <ul className="card-meta-list">
                                    <li className="card-meta-item">
                                        <i>icon</i>
                                        <span className="span">Admin</span>
                                    </li>

                                    <li className="card-meta-item">
                                        <i>icon</i>
                                        <span className="span">Admin</span>
                                    </li>

                                </ul>

                                <h3 className="h5">
                                    <a href="#" className="card-title">
                                        en el visual studio code ser ññama blog el jsx de reasct
                                    </a>
                                </h3>

                             </div>
                        </div>
                    </li>
                </div>

                {/* BlogList 02 */}
                <div className="blogList" >
                    <li>
                        <div className="blog-card">
                             <figure className="card-banner img-holder" data-reveal="left">
                                <img src={img} width="770" height="550"
                                    loading="lazy" alt="" className="img-cover"/>
                             </figure>

                             <div className="card-content">
                                <time className="publishDate" dateTime="2022-06-04"></time>

                                <ul className="card-meta-list">
                                    <li className="card-meta-item">
                                        <span role="img" aria-label="car">🚗</span>
                                        <span className="span">Admin</span>
                                    </li>

                                    <li className="card-meta-item">
                                        <span role="img" aria-label="car">🚗</span>
                                        <span className="span">Admin</span>
                                    </li>

                                </ul>

                                <h3 className="h5">
                                    <a href="#" className="card-title">
                                        Energy Star certified Electric Vehicle Chargers
                                    </a>
                                </h3>

                             </div>
                        </div>
                    </li>
                </div>


            </div>
        </section>

    )
}

export default blog;