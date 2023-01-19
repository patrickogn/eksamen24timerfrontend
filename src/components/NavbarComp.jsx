import {NavLink} from "react-router-dom";

function NavbarComp() {

    const getClass = ({isActive}) => (isActive ? "nav-active" : null)

    return (
        <header className="container">
            <nav className="container">
                <NavLink to={"/"} className={getClass}>CA2-Startcode</NavLink>
                <NavLink to={"/about"} className={getClass}>About</NavLink>
                <NavLink to={"/login"} className={getClass}>Login</NavLink>
                <NavLink to={"/joke"} className={getClass}>Joke</NavLink>
                <NavLink to={"/coctails"} className={getClass}>Coctail</NavLink>
            </nav>
        </header>
    );
}

export default NavbarComp;