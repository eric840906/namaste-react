import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import { Header } from './src/Components/Header'
import { Body } from './src/Components/Body'
import { Footer } from './src/Components/Footer'
/*
  Header
  Body
    -search bar
      -logo
      -nav items
      -cart
    -restaurant list
      -restaurant card
        -image
        -name
        -rating
        -cusines
    -footer
      -links
      -copyrights
  */

const AppLayout = () => (
  <>
    <Header />
    <Body />
    <Footer />
  </>
)

const root = createRoot(document.getElementById('root'))
root.render(<AppLayout />)
