import React from 'react'
import './Dashboard.css'
import logo from '../Assets/logo_bg.png'
import { BiMenuAltLeft } from 'react-icons/bi'
import nav_bar from '../Assets/nav-bar.PNG'
import persons from '../Assets/persons.PNG'
import frame from '../Assets/Frame 30.png'
import { BiLogOut } from 'react-icons/bi'
import { useSignupContext } from '../Context/SignupContext'
import { useHistory } from 'react-router-dom'
const Dashboard = () => {
  const history = useHistory()
  const { logOutHandler } = useSignupContext()
  return (
    <main className='dashboard flex'>
      <nav className='nav-dashboard flex-column'>
        <div className='logo-box flex-x-between'>
          <img src={logo} alt={'Logo'} />
          <i className='icon m-right-s'>
            <BiMenuAltLeft />
          </i>
        </div>
        <div className='nav-bar'>
          <img src={nav_bar} alt={'nav-bar'} />
        </div>
        <div className='nav-bar'>
          <img src={persons} alt={'persons'} />
        </div>
        <div
          style={{
            backgroundColor: 'var(--color-profile-2)',
            padding: '1.5rem',
          }}
          className='flex'
          onClick={() => {
            logOutHandler()
            history.push('/')
          }}
        >
          <i className='icon '>
            <BiLogOut />
          </i>
          <p className='sign-out m-left-s'>Sign Out</p>
        </div>
      </nav>
      <main className='dashboard-content'>
        <header className='header'>
          <div className='flex-column'>
            <h2 className='margin-t-s m-left-s'>Shenzhen Houde Academy </h2>
            <div className='flex tabs m-left-s'>
              <p>Discover</p>
              <p className='active-tab'>Impact Board</p>
              <p>Learning Pods</p>
            </div>
          </div>
        </header>
        <section style={{ display: 'inline-block' }}>
          <img src={frame} alt={'frame'} className='frame margin-t-s' />
        </section>
      </main>
    </main>
  )
}

export default Dashboard
