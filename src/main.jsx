import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import About from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-violet-950 py-16 overflow-x-hidden'>
      <About />
    </div>
  </React.StrictMode>,
)
