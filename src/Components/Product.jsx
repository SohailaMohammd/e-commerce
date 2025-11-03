import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import ShowProducts from "./ShowProducts";

const Product = () => {

    const params = useParams();
    const api = "https://fakestoreapi.com/products";
    const [product, setproduct] = useState({})
    useEffect(() => {
        fetch((`${api}/${params.productId}`))
            .then((res) => res.json())
            .then((data) => setproduct(data))
    }, [params.productId])

    return (
        <>
            <ProductDetails pro={product} oneProduct={true} />
            <ShowProducts />
        </>
    )

}
export default Product;