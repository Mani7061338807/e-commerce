import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import Skeleton from "react-loading-skeleton"
import { Link } from 'react-router-dom'
import {addCart} from '../redux/action'



const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch()
    const addproduct = (product)=>{
        dispatch(addCart(product))
    }

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch(`https:/fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProducts();
    }, [id])
    const Loading = () => {
        return (
            <>
                <div id = " skeleton1"className="col-sm-6">
                    <Skeleton height={400} />
                </div>
                <div  id="skeleton" className="col-sm-6 " style={{ lineheight: 2 }}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100} />
                    <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
                </div>
            </>
        )
    }
    const ShowProducts = () => {
          
        //   return(
        //       <>
        //       </>
        //   )  
            //  product.map((prooduct) => {
                return (
                    <>
                    <div className='container'>
                    <div className='row'>
                    
                        <div className='col-sm-6'>
                            <img src={product.image} alt={product.title} height="80%" width="70%" />

                        </div>
                        < div className="col-sm-6">
                            <h4 className='text-uppercase text-black-50'>
                                {product.category}
                            </h4>
                            <h1 className='display-6'>{product.title}</h1>
                            <p className='lead fw-bolder'>
                                Rating {product.rating && product.rating.rate}
                                <i className='fa fa-star'></i>
                            </p>
                            <h3 className='display-5 fw-bold my-2'>
                                $ {product.price}
                            </h3>
                            <p className='lead'>{product.description}</p>
                            <button className='btn btn-outline-primary' onClick={()=>addproduct(product)}>
                                Add to Cart
                            </button>
                            <Link to='/cart' className='btn btn-primary ms-2 px-3'>
                                Go to Cart
                            </Link>
                        </div>
                        </div>
                        </div>
                    </>
                )
           //  })
        

    }
    return (
        <div>
            <div className="container py-5">
                <div className="row py-4">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    )
}

export default Product