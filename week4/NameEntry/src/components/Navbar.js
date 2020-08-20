import React from "react";
function Navbar(props) {
    // console.log(props);
return (
    <nav id="mainNav" className={props.className}>
        <a className="navbar-brand" href="top">
        Start Bootstrap
        </a>
        <ul className="navbar-nav">
        <li className="nav-item">
            <a className="nav-link" href="top">
              Home
            </a>
        </li>
        <li className="nav-item">
            <a className="nave-link" href="top">
              About 
            </a>
        </li>
        <li className="nav-item">
            <a className="nave-link" href="top">
              Sample-post 
            </a> 
        </li>
        <li className="nav-item">
            <a className="nave-link" href="top">
              Contact
            </a>
        </li>
       </ul>
    </nav>
   );
}
export default NavBar;