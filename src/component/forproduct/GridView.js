import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from '../pages/slices/postSlice';
import ProductComponent from './ProductComponent';
import './gridView.css';
import { Link } from 'react-router-dom';
import FormatPrice from './FormatPrice';


const GridView = () => {
    const usr = useSelector((state) => state.posts.products);
    // console.log(usr);
  
    // const user = useSelector(state => console.log(state.posts.featureProducts));
    // const usr = useSelector(state => state.posts.featureProducts);
    // console.log(usr);
  
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchPost());
    }, [])


  return (
    <div className='grid-view'>
        {
          usr.map((usr) => {
            const {id, name, image, price, category} = usr;
            return(
                // <Link to={id} state={{id, name, image, price, category}} className='link' key={id}>
                    <div key={id} className="product-card">
                        <img src={image} alt={name} />
                        <div className="product-text">
                          <div className="name-price">
                            <h5>{name}</h5>
                            <h5>{<FormatPrice price={price} />}</h5>
                          </div>
                          <h6 className='caption'>{category}</h6>
                          <div className='buttons'>
                              <Link to={id} state={{id, name, image, price, category}} className='link'>
                                <button className='simlr-btn read-btn'>Read more</button>
                              </Link>
                              <Link className='link'>
                                <button className='simlr-btn read-btn'>Add to cart</button>
                              </Link>
                            </div>
                        </div>
                    </div>
                // </Link> 
            )
          })
        }
    </div>
  )
}

export default GridView
