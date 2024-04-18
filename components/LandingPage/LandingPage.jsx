import React from 'react'
import Link from 'next/link';

import './LandingPage.css';


const LandingPage = () => {
  return (
    <div>
      <h1 className={`LandingPageTitle type`}>Val-Pal</h1>
      <ul className={`LandingPage LandingPageLinks type`}>
        <li><Link href="/agents" className={`Link`}>Agents</Link></li>
        <li><Link href="/weapons" className={`Link`}>Weapons</Link></li>
        <li><Link href="/maps" className={`Link`}>Maps</Link></li>
      </ul>
    </div>

  )
}

export default LandingPage