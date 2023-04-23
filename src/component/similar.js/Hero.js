import React from 'react';
import { NavLink } from 'react-router-dom';
import './hero.css';

const Hero = ({ myData }) => {
    const { name, disc, img } = myData;
  return (
    <div className='container'>
      <div className="hero-container">
        <div className="hero-text">
            <p className='hero-intro'>Welcome <span className='colo'>to</span> </p>
            <h1 className='hero-title'>{name}</h1>
            <p className='hero-disc'>{disc}</p>
            <NavLink to="/products" className="simlr-btn">Show now</NavLink>
        </div>
        <div className="hero-img">
            <div className="img-background">
                <img src={img} alt="photo" className='hero-img' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
