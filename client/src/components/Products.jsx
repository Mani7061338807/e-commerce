import { useState, useEffect } from "react"
import React from 'react'
import Skeleton from "react-loading-skeleton"
import { Link } from 'react-router-dom'

const Product = () => {

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componenetMounted = true;

  useEffect(() => {

    const getProducts = async () => {
      setLoading(true);
      const response = await fetch('https://fakestoreapi.com/products');
      if (componenetMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter)
      }
    }
    getProducts();
    return () => {
      componenetMounted = false;
    }

    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'X-RapidAPI-Host': 'amazon24.p.rapidapi.com',
    //     'X-RapidAPI-Key': '73163c7963mshec63672fdda67e6p1a36fcjsn309f2e40b7bd'
    //   }
    // };

    // fetch('https://amazon24.p.rapidapi.com/api/category?country=US', options)
    //   .then(response =>{
    //     return response.json()
    //   } 
    //     )
    //   .then(response => console.log(response))
    //   .catch(err => console.error(err));
  }, []);
  const Loading = () => {
    return (
      <>
        <div className="col-md-4">
          <Skeleton height={350} />
        </div>
        <div  className="col-md-4">
          <Skeleton height={350} />
        </div>
        <div className="col-md-4">
          <Skeleton height={350} />
        </div>
        {/* <div className="col-mid-3">
          <Skeleton height={350} />
        </div> */}

      </>
    );
  }
  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  }
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center">
          <div className="btn btn-outline-primary mx-2" onClick={() => setFilter(data)}>All</div>
          <div className="btn btn-outline-primary mx-2" onClick={() => filterProduct("men's clothing")}>Men's Clothes</div>
          <div className="btn btn-outline-primary mx-2" onClick={() => filterProduct("women's clothing")}>Womens</div>
          <div className="btn btn-outline-primary mx-2" onClick={() => filterProduct("shoes")}>Shoes</div>
          <div className="btn btn-outline-primary mx-2" onClick={() => filterProduct("jewelery")}>Jewelery</div>
          <div className="btn btn-outline-primary mx-2" onClick={() => filterProduct("electronics")}>Electronics</div>
        </div>
        <div class="container">
                <div class="row">
        {filter.map((product) => {
          return (
            <>
           
              <div class="col-sm-4 mt-4">
                  <div className="card h-100 w-100 text-center p-4 mx-2 mt-4 ">
                    <img src={product.image} className = "card-img-top mb-4" alt={product.title} height="350px" />
                    <div className="card-body mt-4">
                    <h5 className="card-title mb-0">{product.title.substring(0,12)}</h5>
                    <p className="card-text">${product.price}</p>
                    <Link to={`/Products/${product.id}`} className="btn btn-primary">buy now</Link>
                    </div>
                  </div>
                
              </div>
         
            </>
          )
        })}
         </div>
       </div>
      </>
    )
  }
  return (
    <>
      <div className="container my-4 py-4">
        <div className="row mb-4">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bold text-center"> Latest Products</h1>
          </div>
          <hr />
        </div>
        <div className=" col-mid-4 row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}

        </div>
      </div>

    </>
  )
}

export default Product