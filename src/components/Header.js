import { BurgerMenu } from "./BurgerMenu";

export function Header({handleClick, isNavOpen}){
    return(
        <header className = "header">
           <i className="fa-solid fa-bars header__burger" onClick={handleClick} ></i>
          <BurgerMenu handleClick={handleClick} isNavOpen={isNavOpen}/>
        <nav>
        <ul className="header__list">
        <li>
            <a href='/'>Inicio</a>
          </li>
          <li>
            <a href='/#/sobre-mi'>Sobre mí</a>
          </li>
          <li>
            <a href='/#/proyectos'>Proyectos</a>
          </li>
        </ul>
      </nav>
      </header>
    );
};