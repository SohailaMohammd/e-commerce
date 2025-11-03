import React, { useEffect, useState } from "react";
import '../App.css';
import ProductDetails from "./ProductDetails";

const Products = () => {
    const api_url = "https://fakestoreapi.com/products";

    const [product, setproduct] = useState([]);

    useEffect(() => {
        fetch(api_url)
            .then((res) => res.json())
            .then((data) => setproduct(data))
    }, [])
    return (
        <>
            <h2 className="text-center p-4">Our Products</h2>
            <div className="container">

                <div className="row">
                    {
                        product.map((product) => {
                            return (
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={product.id}>
                                    <ProductDetails pro={product} oneProduct={false} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}


export default Products;