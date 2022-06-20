import React, { useRef } from 'react'
import emailjs from 'emailjs-com';
import { MdOutlineMailOutline } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { TbBrandTelegram } from 'react-icons/tb'

import './Contact.css'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hl30qm9', 'template_6x10ezn', form.current, 'CEwy2T7n4rLlvjtmv')
      // .then((result) => {
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
      // });
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
          <MdOutlineMailOutline className='contact__option-icon' />
            <h4>Email</h4>
            <h5>snakeproterinaec14@gmail.com</h5>
            <a href="mailto:snakeproterianec14@gmail.com">Send a message</a>
          </article>

          <article className='contact__option'>
          <RiMessengerLine className='contact__option-icon' />
            <h4>Instagram</h4>
            <h5>luciussnake</h5>
            <a href="https://www.instagram.com/luciussnake">Send a message</a>
          </article>

          <article className='contact__option'>
          <TbBrandTelegram className='contact__option-icon' />
            <h4>Telegram</h4>
            <h5>+375291112233</h5>
            <a href="https://t.me/LuciusSnake">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default React.memo(Contact)