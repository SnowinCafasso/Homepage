import React from 'react'
import headerCSS from './header.module.css'

const Header = () => {
  return (
    <header>
      {/* Title Section  */}
      <div className={headerCSS.title}>
        <img src="./src/assets/sjce-logo.png" alt="Logo" className={headerCSS.logo} style={{ width: '70px', borderRadius: '50%' }} />
        <div>
          <h2>St. Joseph's College of Engineering</h2>
          <p>( An Autonomous Institution )</p>
        </div>
      </div>

      {/* Nav Bar Section */}
      <nav>
        <ul className={headerCSS.list}>
          <li>Home</li>
          <li>Placements</li>
          <li>Past Records</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
