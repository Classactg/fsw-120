import React from "react";
import Navbar from "./NavBar";
function Header(props) {
    //console.log(props);
    return (
        <header className={props.className}>
        <h1 className="site-heading">Clean Blog</h1>
        <span id="subheading">A Blog Theme By Start Bootstrap</span>
        <Navbar className="navbar" />
        </header>

    );
}
export default Header;
