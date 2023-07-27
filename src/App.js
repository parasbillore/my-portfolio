import React from "react"
import Header from "./component/Head/Header"
import Features from "./component/Features/Features"
import Home from "./component/Hero/Home"
import Resume from "./component/Resume/Resume"
import Contact from "./component/Contact/Contact"
import Footer from "./component/Footer"
import "./App.css"
// import Portfolio from "./component/Portfolio/Portfolio"
// import Testimonial from "./component/Testimonial/Testimonial"
// import Blog from "./component/Blog/Blog"

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Features />
      <Resume />
      <Contact />
      <Footer />
    
         {/* unused */}

      {/* <Portfolio /> */}
      {/* <Testimonial /> */}
      {/* <Blog /> */}
      
    </>
  )
}

export default App
