import React from "react";
import heroImage from '../Assets/photo_2025-10-27_17-44-42.jpg';
import '../App.css';
import Header from "./Header";

const Home = () => {

    return (

        <div className="">
            <Header />

            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={heroImage} class="d-block w-100" height={660} style={{ objectFit: "cover" }} alt="heroImage" />
                        <div class="carousel-caption d-flex text-start justify-content-start d-none d-md-block" style={{ position: "absolute", backdropFilter: "blur(3px)", padding: "12px", top: "50%", left: "10%", transform: "translateY(-50%)" }}>
                            <h5 className="card-title fst-italic fw-bold text fw-lighter headerHome">Welcome to a <span className="navbar-brand">World</span> Made for You</h5>
                            <p className="card-text fw-bold fs-5 fw-lighter d-none d-sm-block">Welcome to a world where shopping feels effortless— a place made to inspire your style, and help you find what truly fits your vibe. Enter, explore freely, and make every moment unique to you.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Home;