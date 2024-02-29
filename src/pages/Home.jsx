import React from 'react'
import '../Styles/Home.css';
import Header from './components/Header';
import Hero from './components/Hero';

const Home = () => {
  return (
    <>
      <Header />
      <Hero/>
      <div className="login-buttons">
        <button className="login-button">Faculty Login</button>
        <button className="login-button">Student Login</button>
      </div>
      <div className="project-proposals">
        <h2>Project Proposals</h2>
        <p>Are you a student looking for a project? Or a faculty member seeking students for your project?</p>
      </div>
    </>
  )
}

export default Home