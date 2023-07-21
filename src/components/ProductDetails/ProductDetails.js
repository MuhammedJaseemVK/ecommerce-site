import React, { useEffect, useState } from 'react'
import './ProductDetails.css'
import { getProductId } from '../../ApiService/api'
import { Link, useParams } from 'react-router-dom'

function ProductDetails() {
  const {id} =useParams();
  const [productDetails, setProductDetails] = useState({});

  const handleBuy = () =>{
    window.confirm("Out of stock!");
  }

  useEffect(() => {

    const fetchProductDetails = async()=>{

      const data = await getProductId(id);
      setProductDetails(data);
      console.log(productDetails);
    }

    fetchProductDetails();

  }, [id])

  return (
    <div className='product-details-container'>
        <img src={productDetails.image} alt='product image' className='product-image'/>
        <div className='product-info'>
            <h2 className='product-title'>
            {productDetails.title}
            </h2>
            <p className='product-description'>
                {productDetails.description}
            </p>
            <p className='product-price'>
                ${productDetails.price}
            </p>
            <button className='buy-now-btn' onClick={handleBuy}>Buy now</button>
            <Link to='/' style={{textDecoration:'none',color:'#fff'}}>
              <button className='go-back-btn'>Go back Home</button>
            </Link>
        </div>
    </div>
  )
}

export default ProductDetails