import { Background } from "../home/Background";
import React, { useState, useEffect } from "react";
import allData from "../../data/dataProjects";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
export function Projects() {
const [dataProjects, setDataProjects] = useState([]);
useEffect(() => {
        setDataProjects(allData);
    });

const eachProject = dataProjects.map((project) => {
    return (
        <li className="projects__li" style={{backgroundImage: `url(${project.img})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: 'center'}}>
            <h2>{project.title}</h2>
        </li>
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
            <AnimationOnScroll animateIn="showProjects">
            <ul className="projects__list">{eachProject}</ul>
            </AnimationOnScroll>
            </section>
        </main>
    )
}