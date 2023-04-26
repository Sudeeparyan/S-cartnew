import React from 'react';
import NavBar from '../../components/NavBar/NavBar'
import Categories from '../../components/Categories/Categories'
import Announcement from '../../components/Announcement/Announcement'
import './login.css'




function login() {
  return <div>
       <Announcement/>
        <NavBar/>
        <Categories/>
  </div>;
  
  }

export default login;
