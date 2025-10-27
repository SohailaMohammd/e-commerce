import React from "react";
import { NavLink } from "react-router-dom";
import { LuUserRound } from "react-icons/lu";
import { IoLockClosedOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const Register = () => {

    return (
        <div className="login d-flex justify-content-center align-items-center">
            <div className="container login-con px-4" style={{ maxWidth: "500px" }}>
                <h3 className="mt-5 mb-5" style={{ color: "white" }}>Register</h3>

                <div className="mb-4 position-relative">
                    <label htmlFor="email" className="form-label text-white fw-semibold">
                        Full Name
                    </label>
                    <input type="text" id="email" className="form-control input-text ps-5" placeholder="Enter Your name" />
                    <LuUserRound className="userIcon" />
                </div>


                <div className="mb-4 position-relative">
                    <label htmlFor="email" className="form-label text-white fw-semibold">
                        Email Address
                    </label>
                    <input type="text" id="email" className="form-control input-text ps-5" placeholder="name@gmail.com" />
                    <MdOutlineEmail className="userIcon" />
                </div>


                <div className="mb-4 position-relative">
                    <label htmlFor="password" className="form-label text-white fw-semibold">
                        Password
                    </label>
                    <input type="password" id="password" className="form-control input-text ps-5" placeholder="password" />
                    <IoLockClosedOutline className="userIcon" />
                </div>


                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="rememberMe"
                    />
                    <label className="form-check-label" style={{ color: "white" }} htmlFor="rememberMe">
                        Remember me
                    </label>
                </div>
                <button type="button" class="btn login-btn d-flex justify-content-center fs-5">Register</button>
                <p className="d-flex justify-content-center mt-4" style={{ color: "white" }}>Already have account?<NavLink className="signup ms-2"to={"/login"}>Sign in</NavLink></p>
            </div>

        </div >
    )
}
export default Register;