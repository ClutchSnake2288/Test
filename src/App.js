import React from 'react'
import './App.css';
import Header from './components/header/Header.js'
import Navbar from './components/navbar/Navbar.js'
import Profile from './components/profile/Profile.js'

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Navbar />
      <Profile name = {"fdsghjksdfhguyies"} />
    </div>
  );
}

export default App;
//найти фото для profile


