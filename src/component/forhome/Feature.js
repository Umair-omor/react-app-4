// import React, { useEffect } from 'react';
// import './feature.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchPost } from '../pages/slices/postSlice';
// import { Link } from 'react-router-dom';
// import Products from '../pages/Products';
// // import Products from '../pages/Products';
// // import postSlice from '../pages/slices/postSlice';
// // import { featureProducts } from '../pages/slices/postSlice';

// const Feature = () => {


//     // console.log({featureProducts});
//     const {isLoading, error, posts} = useSelector((state) => state.posts);

//     // const user = useSelector(state => console.log(state.posts.featureProducts));
//     const usr = useSelector(state => state.posts.featureProducts);
//     // console.log(usr);

//     const dispatch = useDispatch();

//     useEffect(() => {
//       dispatch(fetchPost());
//     }, [])

//   return (
//     <div className='container feature-container'>
//       <h1 className='feature-title'>featured Product</h1>
//       <div className="feature-products">
//         {
//           usr && usr.map((curr) => {
//             // console.log(curr)
//             return (
//               <Products key={curr.id} {...curr} />
//             )
//           })
//         }
//       </div>
//     </div>
//   )
// }

// export default Feature
