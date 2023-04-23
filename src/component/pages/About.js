import React from 'react'
import Hero from '../similar.js/Hero';

const About = () => {
  const data = {
    name: "Umair Ecommerce",
    disc:  "Amet consectetur adipisicing elit. Laboriosam ullam facere sapiente magni at possimus, iusto fuga reiciendis placeat ex magnam. Minima accusantium doloremque at? Laborum error dolore, autem reprehenderit quisquam animi. Incidunt ad  a!",
    img: "img/new2.png"
  };
  
  return (
    <div>
      <Hero myData={data} />
    </div>
  )
}

export default About
