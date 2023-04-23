import React from 'react'
import './productComponent.css';
import Sort from './Sort';
import GridView from './GridView';
import ListView from './ListView';
import postSlice from '../pages/slices/postSlice';
import { useSelector } from 'react-redux';

const ProductComponent = () => {
  // const viewState = postSlice.grid_view === false;
  // console.log(state.grid_view);
  const count = useSelector((state) => state.posts.grid_view);
  // console.log(count)



  return (
    <div className='product-component'>
      <div className="filters">
       
      </div>
      <section className="products">
        <Sort />
        {
          count ? (<GridView />) : (<ListView  />)
        }
       
      </section>
    </div>
  )
}

export default ProductComponent
