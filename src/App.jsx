import { useState } from 'react'
import AppHeader from './components/header'
import './App.css'
import AppSlider from './components/slider'
import AppAbout from './components/about-us'
import AppServices from './components/services'
import InsurancePlans from './components/insurance-plan'
import AppChoose from './components/why-choose-us'
import AppTest from './components/testimonials'
import AppFaqs from './components/faqs'

import AppContact from './components/contact-us'
import AppFooter from './components/footer'





function App() {
  return (
    <div>
      <header>
        <AppHeader />
      </header>

      <main>
        <AppSlider />
      </main>
    
    
    <main>
<AppAbout />
    </main>

    <div>
      <AppServices />
    </div>
    <div>
      <InsurancePlans />
    </div>

    <div><AppChoose /></div>

<div><AppTest /></div>

<div><AppFaqs /></div>

<div><AppContact /></div>

<div><AppFooter /></div>


    </div>
  )

}
export default App
