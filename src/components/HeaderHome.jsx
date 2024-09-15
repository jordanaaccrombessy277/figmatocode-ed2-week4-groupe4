import React from 'react'
import logo from '../assets/logo.svg'

function HeaderHome() {
  return (
    <header className={``}>
       <div className="">
          <img src={logo} alt="logo" />
          <ul>
            <li><a href="/" className="text-base text-">Lien</a></li>
            <li><a href="/" className="text-base text-">Lien</a></li>
            <li><a href="/" className="text-base text-">Lien</a></li>
            <li><a href="/" className="text-base text-">Lien</a></li>
          </ul>
       </div>
       <div className="">

       </div>
    </header>
  )
}

export default HeaderHome
