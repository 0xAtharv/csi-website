import React from 'react'
import logo from '../assets/logo.png'


export default function Navbarr() {
  // const [toggle, setToggle] = useState(false);

  // const handleClick = () => setToggle((prevToggle) => !prevToggle);

  // const closeMenu = () => setToggle(false);



  return (
    <div className='text-white'>
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <a href="/">Home</a>
        <a href="/">Team</a>
        <a href="/">Events</a>
        <a href="/">Magazine</a>
        <a href="/">Sponsors</a>
      </div>
    </div>
  )
}
