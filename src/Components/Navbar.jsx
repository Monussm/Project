import React from "react";
import { NavLink } from "react-router-dom";
const Navbar=()=>
{
   return<>
    
   <nav className="navbar navbar-expand-lg navbar">
  <div className="container">
    <NavLink to="/" className="navbar-brand"><img src="../Image/logo.png.webp" alt="Logo"/></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item ">
          <a className="nav-link mx-3 text-light item" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-3 text-light" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-3 text-light" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-3 text-light" href="#">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-3 text-light" href="#">Pages</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-3 text-light" href="#">Contact</a>
        </li>
      </ul>
      <button className="contact"><span className="user"><i class="fa-sharp fa-solid fa-user"></i></span>+880.762.009</button>
    </div>
  </div>
</nav>

   
   
   
   </>


}
export default Navbar;