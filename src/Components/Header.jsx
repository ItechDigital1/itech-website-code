import react,{useState,useEffect} from "react";
import "../Css/Header.css"
import itechLogo from "../assets/icon/itech_logo_header.png";
import { Link } from "react-router-dom";
// import {itech_main_video} from "../video/itech_main_video.mp4"
// import jsonfile from "../images.json"
const Header=()=>{

    const [dropdownOpen, setDropdownOpen] = useState(null);
    const toggleDropdown = (index) => {
        setDropdownOpen(dropdownOpen === index ? null : index);
  };
    
    const [images, setImages] = useState([]);
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
      const fetchImages = async () => {
        try {
          const response = await fetch('../src/images.json');
          const data = await response.json();
          setImages(data);
        } catch (error) {
          console.error('Error fetching images:', error);
        }
      };
      fetchImages();
    }, []);
    
    const handleSlideChange = (index) => {
      setCurrentImage(index);
    };

    return(
        <div className="App">
            <link 
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      {/*================= Top Bar================ */}
      <div className="Navigation-bar">
      <header className="info-header">
        <section id="top-bar" className="">
            <div className="container clearfix">
                <div className="contact-info">
                <i class="fa fa-envelope-o"></i>
                <a href="mailto:itech.co.in">helpdesk@itech.co.in</a>
                <i class="fa fa-phone"></i>
                <span class="phone"> +91-70217 48803</span>
                </div>
              <div class="text-justify text-iso">
                An ISO 9001:2015 Certified Company
              </div>
              <div className="social-icons">
              <a href="" target="_blank">
                  <i class="fa fa-sign-in" aria-hidden="true">
                    &nbsp;
                  </i>
                  Login
                </a>
                <a
                  href="https://www.facebook.com/ITECHDIGITALFORENSICSINDIA/"
                  // target="_blank"
                  class="facebook"
                >
                  <i class="fa fa-facebook"></i>
                </a>
                <a
                  href="https://twitter.com/ItechForensics"
                  // target="_blank"
                  class="twitter"
                >
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/itech-digital-forensics-pvt-ltd/?viewAsMember=true"
                  // target="_blank"
                  class="linkedin"
                >
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a
                  href="https://www.instagram.com/itechforensics/"
                  // target="_blank"
                  class="instagram"
                >
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCj5-XB9Q3J6qcMp4nx-7_1w?view_as=subscriber"
                  // target="_blank"
                  class="youtube"
                >
                  <i class="fa fa-youtube" aria-hidden="true"></i>
                </a>
                </div>  
            </div>
            </section>
      </header>
      {/*================= Main Header================ */}
      <div className="Navigation-bar2">
      <header className="main-header">  
      <section id='main-bar' className="">
        <div className="container clearfix">
           <div className="site-logo">
            <img src={itechLogo} alt="Itech-Logo" srcset="" />
           </div>
           <nav className="navbar">
            <ul className="navbar-nav">
            <a href="#" className="brand-nav">Home</a>
            <li className="nav-item dropdown">
            <a 
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            onClick={() => toggleDropdown(1)}
            >Hardware</a>
            <ul className={`dropdown-menu ${dropdownOpen === 1 ? "show" : ""}`}
            aria-labelledby="navbarDropdown">
                <li>
                <a className="dropdown-item" href="#">
                Clonester
                </a>
            </li>
            <li>
                <a className="dropdown-item" href="#">
                Cubester
                </a>
            </li>
            <li>
                <a className="dropdown-item" href="#">
                Deskster
                </a>
            </li>
            <li>
                <a className="dropdown-item" href="#">
                Graphster
                </a>
            </li>
            <li>
                <a className="dropdown-item" href="#">
                Labster
                </a>
            </li>
            <li>
                <a className="dropdown-item" href="#">
                Labster Pro
                </a>
            </li>
            <li>
                <a className="dropdown-item" href="#">
                Lapster
                </a>
            </li>
            <li>
                <a className="dropdown-item" href="#">
                Lapster-M Pro
                </a>
            </li>
            <li>
                <a className="dropdown-item" href="#">
                Roadster
                </a>
            </li>
            <li>
                <a className="dropdown-item" href="#">
                Rackster
                </a>
            </li>
            <li>
                <a className="dropdown-item" href="#">
                Telster
                </a>
            </li>
            <li>
                <a className="dropdown-item" href="#">
                Trackster
                </a>
            </li>
            <li>
                <a className="dropdown-item" href="#">
                Vaultster
                </a>
            </li>
            </ul>
            </li>
            <a href="#" className="software-nav">Software</a>
            <li className="nav-item dropdown">
            <a 
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            onClick={() => toggleDropdown(2)}
            >Projects</a>
            <ul className={`dropdown-menu ${dropdownOpen === 2 ? "show" : ""}`}
            aria-labelledby="navbarDropdown">
                <li>
                <a className="dropdown-item" href="#">
                Government CSR Projects
                </a>
            </li>
            </ul>
            </li>
            <li className="nav-item dropdown">
            <a 
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            onClick={() => toggleDropdown(3)}
            >Company</a>
            <ul className={`dropdown-menu ${dropdownOpen === 3 ? "show" : ""}`}
            aria-labelledby="navbarDropdown">
                <li>
                <a className="dropdown-item" href="#">
                About Us
                </a>
            </li>
            <li>
                <a className="dropdown-item" href="#">
                History
                </a>
            </li>
            <li>
                <a className="dropdown-item" href="#">
                Team
                </a>
            </li>
            <li>
                <a className="dropdown-item" href="#">
                News
                </a>
            </li>
            <li>
                <a className="dropdown-item" href="#">
                Career
                </a>
            </li>
            <li>
                <a className="dropdown-item" href="#">
                Contacts
                </a>
            </li>
            </ul>
            </li>
            <li className="nav-item dropdown">
            <a 
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            onClick={() => toggleDropdown(4)}
            >Support</a>
            <ul className={`dropdown-menu ${dropdownOpen === 4 ? "show" : ""}`}
            aria-labelledby="navbarDropdown">
                <li>
                <a className="dropdown-item" href="#">
                Product Brochure
                </a>
            </li>
            <li>
                <a className="dropdown-item" href="#">
                Gallery
                </a>
            </li>
            <li>
                <a className="dropdown-item" href="#">
                Sitemap
                </a>
            </li>
            <li>
                <a className="dropdown-item" href="#">
                Support
                </a>
            </li>
            <li>
                <a className="dropdown-item" href="#">
                FAQ
                </a>
            </li>
            </ul>
            </li>
            </ul>
           </nav>
        </div>
      </section>
      </header>
      </div>
      </div>

      {/* =============Auto-carousel================== */}
      
      <div className="carousel-container">
    <div className="carousel-content">
    {images.map((image, index) => (
      <div key={image.id || index} className={`carousel-image-wrapper ${currentImage === index ? 'active' : ''}`}>
          <img
          className="carousel-image"
          src={image.src}
          alt={image.alt || 'Image'}
          onClick={() => handleSlideChange(index)}
          />
          <div className="carousel-image-info">
            <h3 className="carousel-image-name">{image.name}</h3>
            <p className="carousel-image-alt">{image.alt || 'Image'}</p>
            <div className="read-more-button-wrapper">
          <button className="read-more-button" onClick={() => handleReadMore(image.id)}>Read More</button>
        </div>
      </div>
    </div>   
      ))}
  </div>
  </div>

  {/*============Highlights======================== */}
      <div className="highlights-container">
        <h3>HIGHLIGHTS</h3>

      </div>
    </div>
    )
}

export default Header;