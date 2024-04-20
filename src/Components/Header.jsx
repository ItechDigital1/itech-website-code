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
    const [images,setImages]=useState([]);
    useEffect(()=>{
      fetch('../src/images.json')
      .then(response=>response.json())
      .then(data=>setImages(data))
      .catch(error=>console.log(error))
    }, []);
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

      {/* ===========Components ============ */}
      <div id='view-image' className="image-carousel">
      {images.map(image=>(
        <img
        key={image.id}
        src={image.src}
        alt={image.alt}
        className='img-fluid'/>
      ))}
      </div>
      {/* =============carousel================== */}
      {/* <section
        class="regular bg-white"
        style="
          position: sticky;
          top: 90px;
          z-index: 2;
          padding-top: 0px;
          height: 294px;
        "
      >
        <div class="container mt-4 mb-4">
          <div class="owl-carousel owl-theme">
            <div class="item">
              <div class="card">
                <img
                  src="<%=request.getContextPath()%>/img/Clonester.jpg"
                  class="img-fluid card-img-top"
                  alt="Clonster"
                  id="btnslide1"
                  onmouseout="resetimg();"
                />
                <div class="card-body">
                  <h4 class="card-title text-center">Clonester</h4>
                  <div class="card-text text-justify">
                    <p style="font-size: 14px; margin-top: 5px; color: #3b3b3b">
                      Ruggedised Hand Held Device for Extremely Fast Parallel
                      Imaging.
                    </p>
                  </div>
                  <a
                    class="btn btn-outline-primary btn-sm"
                    id="readbtn"
                    href="<%=request.getContextPath()%>/products/hardware/clonester.jsp"
                    >Read More</a
                  >
                </div>
              </div>
            </div>
            <div class="item">
              <div class="card">
                <img
                  src="<%=request.getContextPath()%>/img/Lapster.jpg"
                  class="img-fluid card-img-top"
                  alt="Lapster"
                  id="btnslide2"
                  onmouseout="resetimg();"
                />
                <div class="card-body">
                  <h4 class="card-title text-center">Lapster</h4>
                  <div class="card-text text-justify">
                    <p style="font-size: 14px; margin-top: 5px; color: #3b3b3b">
                      Tough On-Field Laptops in XEON or i7 / i9 CPU, Large Ram
                      &amp; Drive Bays.
                    </p>
                  </div>
                  <a
                    class="btn btn-outline-primary btn-sm"
                    id="readbtn"
                    href="<%=request.getContextPath()%>/products/hardware/lapster.jsp"
                    >Read More</a
                  >
                </div>
              </div>
            </div>
            <div class="item">
              <div class="card">
                <img
                  src="<%=request.getContextPath()%>/img/Cubester.jpg"
                  class="img-fluid card-img-top"
                  alt="Cubester"
                  id="btnslide3"
                  onmouseout="resetimg();"
                />
                <div class="card-body">
                  <h4 class="card-title text-center">Cubester</h4>
                  <div class="card-text text-justify">
                    <p style="font-size: 14px; margin-top: 5px; color: #3b3b3b">
                      On - Field Or In-Lab, Raid Storage for Parallel Imaging
                      &amp; Data Processing.
                    </p>
                  </div>
                  <a
                    class="btn btn-outline-primary btn-sm"
                    id="readbtn"
                    href="<%=request.getContextPath()%>/products/hardware/cubesterParent.jsp"
                    >Read More</a
                  >
                </div>
              </div>
            </div>
            <div class="item">
              <div class="card">
                <img
                  src="<%=request.getContextPath()%>/img/Roadster.jpg"
                  class="img-fluid card-img-top"
                  alt="Roadster"
                  id="btnslide4"
                  onmouseout="resetimg();"
                />
                <div class="card-body">
                  <h4 class="card-title text-center">Roadster</h4>
                  <div class="card-text text-justify">
                    <p style="font-size: 14px; margin-top: 5px; color: #3b3b3b">
                      Rugged XEON Mobile Workstations. All Terrain Use &amp;
                      Data Processing.
                    </p>
                  </div>
                  <a
                    class="btn btn-outline-primary btn-sm"
                    id="readbtn"
                    href="<%=request.getContextPath()%>/products/hardware/roadsterParent.jsp"
                    >Read More</a
                  >
                </div>
              </div>
            </div>
            <div class="item">
              <div class="card">
                <img
                  src="<%=request.getContextPath()%>/img/Deskster-X.jpg"
                  class="img-fluid card-img-top"
                  alt="Deskster"
                  id="btnslide5"
                  onmouseout="resetimg();"
                />
                <div class="card-body">
                  <h4 class="card-title text-center">Deskster</h4>
                  <div class="card-text text-justify">
                    <p style="font-size: 14px; margin-top: 5px; color: #3b3b3b">
                      Unique Desktop Workstations Series Designed By Forensic
                      Professionals.
                    </p>
                  </div>
                  <a
                    class="btn btn-outline-primary btn-sm"
                    id="readbtn"
                    href="<%=request.getContextPath()%>/products/hardware/desksterParent.jsp"
                    >Read More</a
                  >
                </div>
              </div>
            </div>
            <div class="item">
              <div class="card">
                <img
                  src="<%=request.getContextPath()%>/img/Graphster-T.jpg"
                  class="img-fluid card-img-top"
                  alt="Graphster"
                  id="btnslide6"
                  onmouseout="resetimg();"
                />
                <div class="card-body">
                  <h4 class="card-title text-center">Graphster</h4>
                  <div class="card-text text-justify">
                    <p style="font-size: 14px; margin-top: 5px; color: #3b3b3b">
                      Multiple GPU Workstations designed for High Speed Password
                      Cracking.
                    </p>
                  </div>
                  <a
                    class="btn btn-outline-primary btn-sm"
                    id="readbtn"
                    href="<%=request.getContextPath()%>/products/hardware/graphsterParent.jsp"
                    >Read More</a
                  >
                </div>
              </div>
            </div>
            <div class="item">
              <div class="card">
                <img
                  src="<%=request.getContextPath()%>/img/Telster.jpg"
                  class="img-fluid card-img-top"
                  alt="Telster"
                  id="btnslide10"
                  onmouseout="resetimg();"
                />
                <div class="card-body">
                  <h4 class="card-title text-center">Telster</h4>
                  <div class="card-text text-justify">
                    <p style="font-size: 14px; margin-top: 5px; color: #3b3b3b">
                      GPU Server with 16x Tesla V100 NVLink and InfiniBand for
                      AI, ML and DL.
                    </p>
                  </div>
                  <a
                    class="btn btn-outline-primary btn-sm"
                    id="readbtn"
                    href="<%=request.getContextPath()%>/products/hardware/telster.jsp"
                    >Read More</a
                  >
                </div>
              </div>
            </div>
            <div class="item">
              <div class="card">
                <img
                  src="<%=request.getContextPath()%>/img/Labster.jpg"
                  class="img-fluid card-img-top"
                  alt="Labster"
                  id="btnslide7"
                  onmouseout="resetimg();"
                />
                <div class="card-body">
                  <h4 class="card-title text-center">Labster</h4>
                  <div class="card-text text-justify">
                    <p style="font-size: 14px; margin-top: 5px; color: #3b3b3b">
                      Ergonomically Designed Lab Station for Ultimate Audio
                      Video Forensics.
                    </p>
                  </div>
                  <a
                    class="btn btn-outline-primary btn-sm"
                    id="readbtn"
                    href="<%=request.getContextPath()%>/products/hardware/labster.jsp"
                    >Read More</a
                  >
                </div>
              </div>
            </div>
            <div class="item">
              <div class="card">
                <img
                  src="<%=request.getContextPath()%>/img/Rackster-DC.jpg"
                  class="img-fluid card-img-top"
                  alt="Rackster"
                  id="btnslide8"
                  onmouseout="resetimg();"
                />
                <div class="card-body">
                  <h4 class="card-title text-center">Rackster</h4>
                  <div class="card-text text-justify">
                    <p style="font-size: 14px; margin-top: 5px; color: #3b3b3b">
                      Multiuser Servers for Operations Under MPLS or Discreet
                      Networks.
                    </p>
                  </div>
                  <a
                    class="btn btn-outline-primary btn-sm"
                    id="readbtn"
                    // href="<%=request.getContextPath()%>/products/hardware/racksterParent.jsp"
                    >Read More</a
                  >
                </div>
              </div>
            </div>

            <div class="item">
              <div class="card">
                <img
                  src="<%=request.getContextPath()%>/img/Trackster.jpg"
                  class="img-fluid card-img-top"
                  alt="Rackster"
                  id="btnslide9"
                  onmouseout="resetimg();"
                />
                <div class="card-body">
                  <h4 class="card-title text-center">Trackster</h4>
                  <div class="card-text text-justify">
                    <p style="font-size: 14px; margin-top: 5px; color: #3b3b3b">
                      Fully Customizable Digital Forensics Vehicle with Power
                      &amp; Signal Jammer.
                    </p>
                  </div>
                  <a
                    class="btn btn-outline-primary btn-sm"
                    id="readbtn"
                    href="<%=request.getContextPath()%>/products/hardware/trackster.jsp"
                    >Read More</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
    )
}

export default Header;