import React from "react"
import logo1 from "./pic/f_logo.png"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='conatiner text-center top'>
          <div>
            <img style={{height:"150px"}} src={logo1} alt='' />
          </div>
          <p>© 2022. All rights reserved "Portfolio" Paras Billore.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
