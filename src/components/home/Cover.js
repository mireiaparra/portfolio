import image from "../../images/FotoCV.png";
import Typewriter from 'typewriter-effect';
import { Background } from "./Background";

function Cover() {
    return(
        <main className = "home">
        <article className="cover">
        <div className="cover__text">
        <h2 className="cover__pretitle">Hola <i className="em em-hand cover__emoji" aria-label="RAISED HAND"></i> soy</h2>
        <h1 className="cover__title">Mireia Maldonado Parra</h1>
        <Typewriter className="cover__subtitle"
  options={{
    strings: ['Jr. Front-End Developer'],
    autoStart: true,
    loop: true,
    pauseFor: 2000,
    wrapperClassName: 'cover__subtitle'
  }}

/>
        </div>
        <div className="cover__img--container">
        <img className="cover__img" src={image} alt="profile-pic"></img>
        </div>
        </article>
        <div className="cover__icons--container">
        <a target="_blank" rel="noreferrer" href="https://github.com/mireiaparra"><i className="fa-brands fa-github"></i> Github</a>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mireia-maldonado-parra/"><i className="fa-brands fa-linkedin"></i> Linkedin </a>
        <a target="_blank" rel="noreferrer" href={`mailto:mirmalparra@gmail.com`}><i className="fa-solid fa-envelope"></i> Email</a>
        <a target="_blank" rel="noreferrer" href={`tel:676838590`}><i className="fa-solid fa-phone"></i> Teléfono</a>
        </div>
        </main>
    );
};
export default Cover;