import techImg from "../../data/techImg";

export function About(){
    const eachTech = techImg.map((tech) => {
        return (
            <li key={tech.id}>
                <img src={tech.img} alt={tech.title}/>
                <h3>{tech.title}</h3>
            </li>
            
        );
      });
    return(
        <section className="about">
        <div className="projects__text--container">
        <h2 className="projects__title">Quién soy</h2>
        <p className="projects__text">Sevillana y graduada en Comunicación Audiovisual. He probado suerte como guionista, doctoranda y bibliotecaria. Ahora he decidido reinventarme y alejarme de páginas de papel para plasmar mi creatividad en un nuevo formato: el de las páginas web.</p>
        </div>
        <div className="about__link--container">
        <a className="about__link" href="./CV_Mireia_MaldonadoES.pdf" target="_blank">Ver CV</a>
        <a className="about__link" href="./CV_Mireia_MaldonadoES.pdf" download target="_blank">Descargar CV</a>
        </div>
        <ul className="about__tech">{eachTech}
        </ul>
        </section>


    )
};