import React from "react"
import "./Home.css"
import { Typewriter } from "react-simple-typewriter"
import hero from "../pic/hero.png"
import skill1 from "../pic/skill1.png"
// import skill2 from "../pic/skill2.png"
// import skill3 from "../pic/skill3.png"
import social1 from "../pic/social1.png"
import social2 from "../pic/social2.png"
import social3 from "../pic/social3.png"


const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I'm <span>Paras Billore</span>
            </h1>
            <h2>
              a
              <span>
              <Typewriter words={[" Software Developer.", " Web Designer."]}loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={100} />
              </span>
            </h2>
            <p>Developer Intern & Pursuing B-tech from Computer science & Engineering C & Java Language, Canva Designing , Learning Web development.</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  <button className='btn_shadow '>
                    <a href ="https://www.linkedin.com/in/paras-billore-128181194/" target="_blank" rel="noreferrer"><img src={social1} alt='' /></a>
                  </button>
                  <button className='btn_shadow'>
                    <a href ="https://www.instagram.com/philosopher_paras/?hl=en" rel="noreferrer" target="_blank"><img src={social2} alt='' /></a>
                  </button>
                  <button className='btn_shadow'>
                   <a href ="https://www.facebook.com/philosopher.paras/" target="_blank" rel="noreferrer"><img src={social3} alt='' /></a>
                  </button>
                </div>
              </div>
              <div className='col_1'>
                <h4>SKILL'S</h4>
                <button className='btn_shadow skill'>
                <a href ="https://www.canva.com/" target="_blank" rel="noreferrer"><img src={skill1} alt='' /></a>
                </button>
                {/* <button className='btn_shadow'>
                <a href ="https://www.canva.com/" target="_blank"><img src={skill2} alt='' /></a>
                </button> */}
                {/* <button className='btn_shadow'>
                <a href ="https://www.canva.com/" target="_blank"><img src={skill3} alt='' /></a>
                </button> */}
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
       
      </section>
    </>
  )
}

export default Home
