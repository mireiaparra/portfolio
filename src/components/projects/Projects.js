import { Background } from "../home/Background";
import React, { useState, useEffect } from "react";
import allData from "../../data/dataProjects";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export function Projects() {
const showBelow = 400;
const [show, setShow] = useState(false);
const [dataProjects, setDataProjects] = useState([]);
useEffect(() => {
        setDataProjects(allData);
    });
const scrollToTop = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

   const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  useEffect(() => {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
  });

const eachProject = dataProjects.map((project) => {
    return (
        <AnimationOnScroll animateIn="showProjects" key={project.id} >
        <li className="projects__li" style={{backgroundImage: `url(${project.img})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: 'center'}}>
            <div className="projects__name">
            <h2>{project.title}</h2>
            <a href={project.github} alt={project.title}>  
             <i className="fa-brands fa-github-alt projects__name--iconGit"></i>
             </a>
             <a href={project.link} alt={project.title}>  
             <i className="fa-solid fa-link projects__name--iconLink"></i>
             </a>
            </div>
        </li>
        </AnimationOnScroll>
    );
  });

    return(
        <main className="projects">
            <Background />
            <section className="projects__introduction">
            <div className="projects__text--container">
            <h2 className="projects__title">Mis proyectos</h2>
            <p className="projects__text">Aquí encontrarás mis principales proyectos. Casi todos están relacionados con el desarrollo Front-End, usando tecnologías como HTML5, CSS3, Javascript y React. También verás alguno orientado a desarrollo Full-Stack desarollado con Node JS y SQLite. ¡Disfruta!</p>
            </div>
            </section>

            <section className="projects__allProjects">
         
            <ul className="projects__list" >{eachProject}</ul>
        
            </section>
              {show && <button className="footer__button footer__button--projects"><i className=" fa-solid fa-up-long" onClick={scrollToTop}></i></button> }
        </main>
    )
}