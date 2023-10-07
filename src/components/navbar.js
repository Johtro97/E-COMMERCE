import { Link } from "react-router-dom"

export function Navbar(){

    return(
        <ul>
            <li>
                <Link to={"/Home"}>Home</Link>
            </li>
            <li>
                <Link to={"/products"}>Products</Link>
            </li>
            <li>
                <Link to={"/about"}>About</Link>
            </li>
            <li>
                <Link to={"/contact"}>Contact</Link>
            </li>
            <li>
                <Link to={"/signin"}>SignIn/SignUp</Link>
            </li>
        </ul>
    )
}