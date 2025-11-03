import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { NavLink } from "react-router-dom";
import '../App.css';



function ShowProducts() {

    const [pro, setpro] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => setpro(data))
    }, [])

    return (
        <>
            <div className=" container my-5">
                <h3 className="mb-3">You may also like</h3>

                <Marquee
                    pauseOnHover={true}
                    pauseOnClick={true}
                    speed={50}
                    gradient={false}
                >
                    <div className="d-flex">
                        {pro.map((product) => (
                            <div key={product.id} className="card  mx-1 px-4 py-3 mt-5">
                                <img src={product.image} className="card-img-top w-100 image" alt={product.title} />
                                <div className="card-body p-1 text-center">
                                    <h6 className="card-title2 my-4" style={{ fontSize: "14px" }}>
                                        {product.title.split(" ").slice(0, 3).join("") + "..."}
                                    </h6>
                                    <div className="d-flex justify-content-center gap-3 align-items-center">
                                        <NavLink to={`/product/${product.id}`} className="btn btn-move btn-sm mx-1">Buy Now</NavLink>
                                        <NavLink className="btn btn-move btn-sm mx-1 ">ِAdd to Cart</NavLink>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>
        </>
    )

}
export default ShowProducts;