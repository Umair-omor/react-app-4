import React from 'react';
import './style/single-product.css';
import { useLocation } from 'react-router-dom';

const SingleProduct = () => {
  // const { id } = useParams();
  const location = useLocation();
// console.log()


  return (
    <div className='container'>
      <div className="single-product">
        <h2>single Product</h2>
        <img src={location.state.image} alt={location.state.name} />
        <p className="caption">{location.state.category}</p>
        <h3>{location.state.name}</h3>
      </div>
    </div>
  )
}

export default SingleProduct
