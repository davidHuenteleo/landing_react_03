import "./preloading.css"

import { HERO_CONTENT } from "../../../utils/index"


const Preloading = () => {



    //Logica js aqui
    const loadElement = document.querySelector("[data-preloader]");

    window.addEventListener("load", function() {
        loadElement.classList.add("loaded");
    });


    return(


        <section className="preload-box loaded" data-preloader>

            <img src={HERO_CONTENT.image} width="45" height="75" alt="loading" />

            <img className="preload-circle" src={HERO_CONTENT.image} width="45" height="75" alt="loading" />

        </section>


    )
}

export default Preloading;