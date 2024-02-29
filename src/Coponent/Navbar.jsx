import React from "react";

function Navbar() {
  return (
   
      <nav className="navbar navbar-expand-lg navbar-dark  bg-dark fixed-top fw-bold ">
        <div className="container-fluid">
          <a className="navbar-brand fs-1" href="#">
            CodeChakara
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto fs-4">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
             
               
            </ul>
          </div>
        </div>
      </nav>
  
  );
}

export default Navbar;
