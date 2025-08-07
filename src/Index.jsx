import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'

export default function Index() {
  return (
    <div>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
    </div>
  )
}
