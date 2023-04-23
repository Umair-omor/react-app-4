import React, { useEffect } from 'react';
import './listView.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from '../pages/slices/postSlice';
import { Link } from 'react-router-dom';
import FormatPrice from './FormatPrice';

const ListView = () => {
    const usr = useSelector((state) => state.posts.products);
    // console.log(usr);

  
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchPost());
    }, [])

    // ----------------
    const truncateString = (str, num) => {
      if(str.length> num){
        return str.slice(0, num) + "....."
      }else{
        return str;
      }
    }


  return (
    <div className='list-view'>
        {
          usr.map((usr) => {
            const {id, name, image, price, category, description} = usr;
            return(
                // <Link to={id} state={{id, name, image, price, category}} className='link' key={id}>
                    <div key={id} className="product-list-card">
                        <img src={image} alt={name} />
                        <div className="product-list-text">
                            {/* <div className='name-price-list'>
                                <h5>{name}</h5>
                                <h5>{<FormatPrice price={price} />}</h5>
                            </div> */}
                            <h5 className='name'>{name}</h5>
                            <h5 className='price'>{<FormatPrice price={price} />}</h5>
                            {/* <p>{description}</p> */}
                            {/* <p>{description.slice(0, 90)}....</p> */}
                            <p>{truncateString(description, 90)}</p>
                            <h6 className='list-caption'>{category}</h6>
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

export default ListView
