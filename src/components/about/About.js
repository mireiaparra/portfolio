import { Link } from "react-router-dom";

export function About(){
    return(
        <section className="about">
        <div className="projects__text--container">
        <h2 className="projects__title">Quién soy</h2>
        <p className="projects__text">Sevillana y graduada en Comunicación Audiovisual. He probado suerte como guionista, doctoranda y bibliotecaria. Ahora he decidido reinventarme y alejarme de páginas de papel para plasmar mi creatividad en un nuevo formato: el de las páginas web.</p>
        </div>
        <div className="about__link--container">
        <Link className="about__link" to="/portfolio/src/files/CV_Mireia_MaldonadoES.pdf" target="_blank">Ver CV</Link>
        <Link className="about__link"to="/portfolio/src/files/CV_Mireia_MaldonadoES.pdf" target="_blank" download="CV_Mireia_Maldonado">Descargar CV</Link>
        </div>
        </section>


    )
};