import React, { useState } from "react"
import contact1 from "./contact1.jpg"
import "./Contact.css"


const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",})

  const InputEvent = (event) => {
    const { name, value } = event.target

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  }

  const formSubmit = (event) => {
    event.preventDefault()
    alert(
      `My name is ${data.fullname}. 
	My phone number is ${data.phone}. 
	My email address is ${data.email}. 
	My Subject on  ${data.subject}. 
	Here is my message I want to say : ${data.message}. 
	`
    )
  }
  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center '>
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
                <div className='img'>
                  <img src={contact1} style={{height:"200px"}}alt='' />
                </div>
                <div className='details'>
                  <h1>Paras Billore</h1>
                  <p><b>SOFTWARE DEVLOPER</b></p>
                  <p>I am available for freelance work. Connect with me Linked in.</p> <br />
                  <p>Phone: +91 9893844698</p>
                  <p>Email: parasbillorepb@gmail.com</p><br />
                  <span>FIND ME</span>

                  <div className='button f_flex'>

                    {/* LINKED-IN LINK */}
                  <a href="https://www.linkedin.com/in/paras-billore-128181194/" target="_blank" rel="noreferrer">
                    <button className='btn_shadow'>
                      <i className='fab fa-linkedin-in'></i>
                    </button></a>
                    
                    {/* Instagram LINK */}
                    <a href="https://www.instagram.com/philosopher_paras/" target="_blank" rel="noreferrer">
                    <button className='btn_shadow'>
                      <i className='fab fa-instagram'></i>
                    </button></a>
                    
                     {/* TWITTER LINK */}
                    <a href="https://twitter.com/ParasBillore2" target="_blank" rel="noreferrer">
                    <button className='btn_shadow'>
                      <i className='fab fa-twitter'></i>
                    </button></a>
                  </div>
                </div>
              </div>
            </div>

            <div className='right box_shodow'>
              <form onSubmit={formSubmit}>
                <div className='f_flex'>
                  <div className='input row'>
                    <span>YOUR NAME</span>
                    <input type='text' name='fullname' value={data.fullname} onChange={InputEvent} />
                  </div>
                  <div className='input row'>
                    <span>PHONE NUMBER </span>
                    <input type='number' name='phone' value={data.phone} onChange={InputEvent} />
                  </div>
                </div>
                <div className='input'>
                  <span>EMAIL </span>
                  <input type='email' name='email' value={data.email} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>SUBJECT </span>
                  <input type='text' name='subject' value={data.subject} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>YOUR MESSAGE </span>
                  <textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent}></textarea>
                </div>
                <button className='btn_shadow'>
                  SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
