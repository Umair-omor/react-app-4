// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchPost } from '../pages/slices/postSlice';
// import GridView from './GridView';

// const GetProduct = () => {



//     const usr = useSelector((state) => state.posts.products);
//     // console.log(usr);
  
//     // const user = useSelector(state => console.log(state.posts.featureProducts));
//     // const usr = useSelector(state => state.posts.featureProducts);
//     // console.log(usr);
  
//     const dispatch = useDispatch();
  
//     useEffect(() => {
//       dispatch(fetchPost());
//     }, [])



//   return (
//     <div>
//         <GridView usr={usr} />
//         {/* {
//           usr.map((usr) => {
//             const {id, name, image, price, category} = usr;
//             return(
//                 <GridView key={id} {...usr} />
//             )
//           })
//         } */}
//     </div>
//   )
// }

// export default GetProduct
