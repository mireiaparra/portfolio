export function Header(){
    return(
        <header className = "header">
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