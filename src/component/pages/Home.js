import React from 'react'
import Services from '../forhome/Services';
import Trusted from '../forhome/Trusted';
import Hero from '../similar.js/Hero'
import Feature from '../forhome/Feature';
// import SingleProduct from './SingleProduct';

const Home = () => {
  const data = {
    name: "Umair store",
    disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, vitae! Neque, doloremque delectus! Numquam impedit mollitia aliquid et cumque quibusdam veritatis labore nostrum officia reprehenderit, dicta, laborum ad vero ab maiores tempore quidem nobis voluptate.",
    img: "img/new1.png"
  };

  return (
    <>
      <Hero myData={data} />
      {/* <Feature /> */}
      <Services />
      {/* <SingleProduct /> */}
      <Trusted />
    </>
  )
}

export default Home
