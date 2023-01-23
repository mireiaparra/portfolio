import image from "../images/FotoCV.png"
import Typewriter from 'typewriter-effect';
import { Background } from "./Background";

function Cover() {
    return(
        <main className = "home">
        <Background />
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
        </main>
    );
};
export default Cover;