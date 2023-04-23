import React from 'react'
import GridView from '../forproduct/GridView'
import './style/products.css';
import GetProduct from '../forproduct/GetProduct';
import ListView from '../forproduct/ListView';
import Sort from '../forproduct/Sort';
import ProductComponent from '../forproduct/ProductComponent';

const Products = () => {
  return (
    <div className='container product-container'>
      <ProductComponent />
    </div>
  )
}

export default Products

















// =========================================================================================
// =========================================================================================
// =========================================================================================


// import React, { useEffect } from 'react';
// import './style/products.css';
// import { Link } from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchPost } from './slices/postSlice';

// const Products = () => {
//   // const { id, name, image, price, category } = curr;
//   const uid = uuidv4();



//   const usr = useSelector((state) => state.posts.products);
//   console.log(usr);

//   // const user = useSelector(state => console.log(state.posts.featureProducts));
//   // const usr = useSelector(state => state.posts.featureProducts);
//   // console.log(usr);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchPost());
//   }, [])



//   return (

//     <div className='container products-container'>
//       {
//         usr && usr.map((cur) => {
//           const {id, name, image, price, category} = cur;
//           return(
//             <Link to={id} key={id} state={{id, name, image, price, category}}>
//               <div className="product-card">
//                 <img src={image} alt={name} style={{width: "300px"}} />
//                 <h5>{name}</h5>
//                 <h5>{price}</h5>
//                 <h6>{category}</h6>
//               </div>
//             </Link>
//           )
//         })
//       }
//     </div>
//     // <Link to={id} state={{id, name, image, price, category}} className='container'>
//     //     {/* <div className="product-card">
//     //       <div className='img-cate'>
//     //         <img src={image} alt={name} />
//     //         <figcaption className="caption">{category}</figcaption>
//     //       </div>
//     //       <div className="card-data">
//     //         <h3>{name}</h3>
//     //         <p className="card-data-price">price={price}</p>
//     //       </div>
//     //     </div> */}
//     // </Link>
//   )
// }

// export default Products
// ====================================================