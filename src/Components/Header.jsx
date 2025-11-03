import React from "react";
import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosLogIn } from "react-icons/io";
import { CgLogIn } from "react-icons/cg";


const Header = () => {

    return (
        <div>
            <nav class="navbar navbar-expand-lg p-3 navbar-light bg-light">
                <div class="container">
                    <a class="navbar-brand" href="#">E-Commerce</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto  mb-2 mb-lg-0">
                            <li class="nav-item d-flex mx-4 ">
                                <NavLink to="/" className="nav-link">Home</NavLink>
                            </li>
                            <li class="nav-item d-flex mx-4">
                                <NavLink to={"/product"} className="nav-link">Product</NavLink>
                            </li>
                            <li class="nav-item d-flex mx-4">
                                <NavLink to={"/about"} className="nav-link">About</NavLink>
                            </li>
                            <li class="nav-item d-flex mx-4">
                                <NavLink to={"/contact"} className="nav-link">Contact</NavLink>
                            </li>
                        </ul>
                        <form class="d-flex justify-content-center">
                            <NavLink to={"/login"}><button class="btn btn-header mx-2 btn-outline"  ><IoIosLogIn className="me-2" />Login</button></NavLink>
                            <NavLink to={"/register"}><button class="btn btn-header mx-2 btn-outline"  ><CgLogIn className="me-2" />Register</button></NavLink>
                            <button class="btn btn-header mx-2 btn-outline" ><FaCartShopping className="me-2" />Cart(0)</button>

                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}


export default Header;