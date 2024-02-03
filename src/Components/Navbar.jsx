import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import { links } from "../data";
import "./navbar.css";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose} from "react-icons/md";
const Navbar = () => {
    const [isShow, setIsShow] = useState(false);
    return (
        <nav>
            <div className="container nav_container">
                <Link to="/" className="logo">
                    <img src={logo} alt="logo" />
                </Link>
                <ul className={`nav_links ${isShow ? "show_nav" : "hide_nav"}`}>
                    {links.map(({ name, path }, index ) => {
                        return (
                            <li key={index}>
                                <NavLink
                                    to={path}
                                    className={({ isActive }) =>
                                        isActive ? "active-nav" : ""
                                    }>
                                    {name}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
                <button className="nav_toggle_btn" onClick={()=>setIsShow(!isShow)}>
                    {isShow ? <MdOutlineClose /> : <FaBars />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
