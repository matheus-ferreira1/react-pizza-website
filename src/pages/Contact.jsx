import React from 'react'
import PizzaLeft from '../assets/pizzaLeft.jpg'
import '../styles/Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <div
         className='leftSide'
         style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className='rightSide'>
         <h1>Contact Us</h1>

         <form method='POST' id='contact-form'>
            <label htmlFor="name">Fullname</label>
            <input name='name' type="text" placeholder='Enter full name...' />
            
            <label htmlFor="name">E-mail</label>
            <input name='email' type="email" placeholder='Enter e-mail...' />
            
            <label htmlFor="message">Message</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>

            <button type='submit'>Send Message</button>            
         </form>
      </div>
    </div>
  )
}

export default Contact