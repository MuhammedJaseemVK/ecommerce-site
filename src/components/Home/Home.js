import React, { useEffect, useState } from 'react'
import './Home.css'
import { getAllProducts } from '../../ApiService/api'

function Home() {

    const [products, setproducts] = useState([])
    
    useEffect(() => {

        const fetchProducts = async () =>{
            const data = await getAllProducts();
            console.log(data,'data')
        }
        fetchProducts();
    }, [])
    

  return (
    <div className='product-grid'>
        <div className='product'>
            <img src='' alt='alternative'/>
            <h2>Sample</h2>
            <p>

                <span className='price'>10</span>
            </p>
            <button className='product-btn'>Product details</button>
        </div>
    </div>
  )
}

export default Home