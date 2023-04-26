import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Categories from '../../components/Categories/Categories'
import Imageslider from '../../components/Imageslider/Imageslider'
import Dealoftheday from '../../components/Dealoftheday/Dealoftheday'
import Topcomponent from '../../components/Topcomponents/Topcomponents'
import Announcement from '../../components/Announcement/Announcement'
//import Footer from '../../components/Footer/Footer'

function Home ()  {
    return (
        <div>
            
            <Announcement/>
            <NavBar/>
            <Categories/>
            <Imageslider/>
            <Dealoftheday/>
            <Topcomponent/>
            
            
        </div>
        
    );
}

export default Home
