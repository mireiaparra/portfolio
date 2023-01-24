

export function BurgerMenu({handleClick, isNavOpen}){
   
    return(
        <nav className = {isNavOpen ? 'header__nav' : "hidden"} onClick={handleClick}>
            <a href='/'>Inicio</a>
            <a href='/#/sobre-mi'>Sobre mí</a>
            <a href='/#/proyectos'>Proyectos</a>
    </nav>
    )
}