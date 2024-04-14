import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import homeImg from '../images/homeImg.png'; // Import the image

function Home() {
  
  return (
    <div>
      <Header />
      <main className="py-2 homeContainer">
        <div className="v1_5 homeContent">
          <div className="v1_168">
            <div className="v1_169"></div>
            <span className="v1_170"><Link to="/templates" className="nav-link">Browse a template</Link></span>
            <span className="v1_171">We make beautiful looking professional templates for you</span>
            <span className="v1_172">Temply.</span>
            <span className="v1_173">Hi ! we’re</span>
          </div>
        </div>
        <div class="homeImage">
         <img src={homeImg} alt=""/>
        </div>
      </main>
      <Footer /> {/* Add Footer */}
    </div>
  );
}

export default Home;
