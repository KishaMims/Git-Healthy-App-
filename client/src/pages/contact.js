import React from 'react';
import image from './emailpic.png';




export default function Contact() {
  return (
      <div className='contact_me'>
          <h1 className='contact_me'>
              Having issues with the site or want to recommend a feature?
          </h1>
          <br></br>
          <div className="email_pic">
          <img  alt="emailpic" src={image} height={400} width={600} /><br></br>
          <br></br>
          </div><br/>
          <h3 className='contact_me_h3'> Contact me at: githealthycustomerservice@gmail.com</h3>
          <p className='contact_me_p'>We look forward to hearing from you! </p>
          <button clasName="contact_button" onClick={() => window.location = 'mailto:githealthycustomerservice@gmail.com'}>Contact Me</button>
      </div>
  )
}
