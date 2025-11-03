import { NavLink } from "react-router-dom";

const ProductDetails = (props) => {

    const { pro, oneProduct } = props;

    return (
        <>
            {
                oneProduct ? (
                    <div className="container ">
                        <div className="card oneCard gap-5 m-2 mb-5" >
                            <img src={pro.image} className="card-img-top  image2 w-100" alt={pro.title} />
                            <div className="card-body w-70">
                                <h5 className="card-title my-4">{props.pro.title}</h5>
                                <hr class="border-3"/>

                                <p className="card-text my-4">{pro.description}</p>

                                <p className="card-text my-4 fs-2">{pro.price}$</p>

                                <div className="d-flex  gap-3 justify-content-*-start align-items-center">
                                    <NavLink to={`/product/${pro.id}`} className="btn button me-3 ">Add to Cart</NavLink>
                                    <NavLink to={``} className="btn button">Go to Cart</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="card cardHome m-2" >
                        <img src={pro.image} className="card-img-top image w-100" alt={pro.title} />
                        <div className="card-body">
                            <h5 className="card-title">{props.pro.title}</h5>
                            <p className="card-text">{pro.description}</p>
                                <hr class="border-1" />

                            <p className="card-text text-center">{pro.price}$</p>
                                <hr class="border-1" />

                            <div className="d-flex btn-group gap-3 flex-wrap py-3 align-items-center">
                                <NavLink to={`/product/${pro.id}`} type="button" className="btn btn-home ">Buy Now</NavLink>
                                <NavLink to={``} type="button" className="btn btn-home ">Add to Cart</NavLink>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )

}
export default ProductDetails;