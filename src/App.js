import React from 'react'
import {About , Footer , Header , Testimonial , Work , Skills} from './container'
import { NavigationBar } from './temp'
import './App.scss'
const App = () => {
  return (
   <div className="app">
    <NavigationBar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Testimonial/> 
      <Footer/>
   </div>
  )
}

export default App;
