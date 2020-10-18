import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "./img/logo.png"


export default Navbar = () => {
    const { logins } = useContext(Context);
    const [login, setLogin] = logins;

    const handleLogout = () => {
        setLogin(false);
        sessionStorage.clear()
    };
    return (
        <header>
            <img id="logo" alt="logo" src={logo} width="200px" />
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="about">About</Link>
                    </li>
                    {login ? (
                        <>
                            <li>
                                <Link to="movie">Movie List Editor</Link>
                            </li>
                            <li>
                                <Link to="/login" onClick={handleLogout}>
                                    Logout
                                </Link>
                            </li>
                        </>
                    ) : (
                            <li>
                                <Link to="login">Login</Link>
                            </li>
                    )}
                </ul>
            </nav>
        </header>
    );
};
