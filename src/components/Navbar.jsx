import React, { useEffect, useState } from 'react'
import './Navbar.css'

function Navbar() {

    // state for changing the value 
    const [navbarBlack,setNavbarBlack]=useState(false)

    // we need to check always weathre the netflix navbar is beyond 6000px or above the components other than banner............so use USEFFECT()
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>600){
                setNavbarBlack(true)
            }else{
                setNavbarBlack(false)
            }
        })
    })
    console.log(navbarBlack)
  return (
    <div className={`nav-bar ${navbarBlack && 'black_bg'}`}>
      <img style={{width:"200px"}} src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png" alt="NETFLIX-LOGO" />
    </div>
  )
}

export default Navbar
