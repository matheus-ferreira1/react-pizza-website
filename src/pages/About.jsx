import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg'
import '../styles/About.css'

const About = () => {
  return (
    <div className='about'>
      <div
         className='aboutTop'
         style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className='aboutBottom'>
         <h1>ABOUT US</h1>
         <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eligendi dicta consectetur distinctio cum dolores. At ea, molestias animi, voluptatibus ipsa optio possimus vitae quasi incidunt odit asperiores ipsam maiores!
            Veritatis sint, ipsum, libero architecto natus optio alias quia cum molestias error unde! Nostrum corporis, reprehenderit neque perferendis veritatis quod, sunt impedit ut hic aut ipsa officiis nulla eveniet nam.
            Repudiandae saepe at omnis accusantium dolorem quo suscipit doloremque odio architecto, consequatur a ducimus, quam dolore amet quasi possimus, culpa facere nemo unde. Dignissimos architecto corrupti unde fuga! Voluptate, aperiam.
         </p>
      </div>
    </div>
  )
}

export default About