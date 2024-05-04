import React from 'react';
import Header from '../src/Components/Header';
import Footer from '../src/Components/Footer';

const HomePage = () => {
  return (
    <div>  
      <div className="Top-Header">
        <Header/>
      </div>
      <div className="footer">   
        <Footer/>
      </div>
    </div>
  );
}

export default HomePage;
