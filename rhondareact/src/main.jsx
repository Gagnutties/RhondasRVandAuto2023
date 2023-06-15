import React from 'react'
import ReactDOM from 'react-dom/client'

import Header from './header.jsx'
import Nav from './nav.jsx'
import Featured from './featured.jsx'
import Vehicles from './vehicles.jsx'
import Information from './information.jsx'
import Footer from './footer.jsx'
import Trailers from './trailers.jsx'

import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Nav />
    <Featured />
    <Vehicles />
    <Trailers />
    <Information />
    <Footer />
  </React.StrictMode>,
)
