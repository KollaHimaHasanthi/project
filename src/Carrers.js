import React from "react";

import Courses from './courses';



import 'bootstrap/dist/css/bootstrap.min.css';
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
// import { FaFacebookSquare } from "react-icons/fa";
// import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';


import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


import { IoCallOutline } from "react-icons/io5";

import home_img from "./images/home_img.png";
import bulb from "./images/bulb.png";

import {useTypewriter,cursor} from "react-simple-typewriter";

import logo from "./images/image.png";

import { MdOutlineTimer } from "react-icons/md";

import course_img1 from "./images/course_img1.png";
import course_types1 from "./images/course_types1.png";
import course_ins1 from "./images/coures_ins1.png";

import course_img2 from "./images/course_img2.png";
import course_types2 from "./images/course_types2.png";
import course_ins2 from "./images/coures_ins2.png";

// import course_img3 from "./course_img3.png";
import course_types3 from "./images/course_types3.png";
import course_ins3 from "./images/coures_ins3.png";

import course_types4 from "./images/course_types4.png";
import course_ins4 from "./images/coures_ins4.png";




import { FaArrowDown } from "react-icons/fa6";


import { FcOnlineSupport } from "react-icons/fc";
import { FaInternetExplorer } from "react-icons/fa";


// import { IoCallSharp } from "react-icons/io5";
// import { MdEmail } from "react-icons/md";
// import { FaLocationDot } from "react-icons/fa6";

// import logo from "./image.png";

import { Link } from "react-router-dom";

import car_icon1 from "./images/car_icon11.png";
import car_icon2 from "./images/car_icon22.png";
import car_icon3 from "./images/car_icon33.png";
import car_icon4 from "./images/car_icon44.png";

import website_logo2 from "./images/website_logo2.png";
import website_logo1 from "./images/website_logo1.png";


function Careers(){
    return(

        <div className="home_container">
        <div className="home_sub_con">
            
            {/* nav second */}
            <div className="nav_con">
            <Navbar expand="lg" className="bg-body-tertiary nav_sub_con nav_sub_con2 ">
<Container fluid>
<Navbar.Brand href="#" ><img src={website_logo2} /></Navbar.Brand>
<Navbar.Toggle aria-controls="navbarScroll" />
<Navbar.Collapse id="navbarScroll" className="section">
  <Nav
    className="me-auto my-2 my-lg-0 "
    style={{ maxHeight: '100px' }}
    navbarScroll
  >
    {/* <Nav.Link href="#action1">Home</Nav.Link>
    <Nav.Link href="#action2">Link</Nav.Link>
    <Nav.Link href="#action2">Link</Nav.Link>
    <Nav.Link href="#action2">Link</Nav.Link>
    <Nav.Link href="#action2">Link</Nav.Link> */}
    {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
      <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
      <NavDropdown.Item href="#action4">
        Another action
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action5">
        Something else here
      </NavDropdown.Item>
    </NavDropdown> */}
    {/* <Nav.Link href="#" disabled>
      Link
    </Nav.Link> */}
  </Nav>
  {/* <Form className="d-flex">
    <Form.Control
      type="search"
      placeholder="Search"
      className="me-2"
      aria-label="Search"
    />
    <Button variant="outline-success">Search</Button>
  </Form> */}
   <Nav.Link href="#action1" className="nav_a"> <a ><Link to="/">Home</Link></a></Nav.Link>
            <Nav.Link href="#action2" className="nav_a"> <a ><Link to="/about">About</Link></a></Nav.Link>
            <Nav.Link href="#action2" className="nav_a"><a ><Link to="/services">Services</Link></a></Nav.Link>
            <Nav.Link href="#action2" className="nav_a"><a ><Link to="/courses">Courses</Link></a></Nav.Link>
            <Nav.Link href="#action2" className="nav_a nav_aa"><a ><Link to="/careers">Carrers</Link></a></Nav.Link>
            <a><Link to="/contact"><button className="nav_button" >CONTACT US</button></Link></a>
</Navbar.Collapse>
</Container>
</Navbar>
                </div>

        </div>
        {/* course con */}
        <div className="course_con">
          <div className="course_sub_con">
            <div className=" course_top">
            <h6>Ready to create something amazing?</h6>
            <h1>Join with us</h1>
            <h6>You're going to need a big smile, a small ego, and a bucketload of curiosity and drive. It all starts here.
Join our team with your passion </h6>
                <button>View Current Openings <FaArrowDown />
</button>
            
            </div>

            <div className="careers_img_con">
              <div className="careers_box">
              {/* <MdOutlineTimer />  */}
              <  img src={car_icon1}  />
              <h5>Digital Marketing Intern</h5>
              <h6>0 to 1 Yr</h6>
              <button>Apply Now</button>
                
              </div>

              <div className="careers_box">
              {/* <MdOutlineTimer />  */}
              <img src={car_icon2} />
              <h5>UI/UX Designer Intern</h5>
              <h6>0 to 1 Yr</h6>
              <button>Apply Now</button>
                
              </div>

              <div className="careers_box">
              {/* <MdOutlineTimer />  */}
              <img src={car_icon3} />
              <h5>Full Stack Developer</h5>
              <h6>3 to 5 Yr</h6>
              <button>Apply Now</button>
                
              </div>

              <div className="careers_box">
              {/* <MdOutlineTimer />  */}
              <img src={car_icon4} />
              <h5>Graphics Designer </h5>
              <h6>3 to 4 Yr</h6>
              <button>Apply Now</button>
                
              </div>

              
            </div>
            
            {/* <Footer /> */}
          </div>




        </div>

        <div className="footer_con">
    <div className="footer_sub_con">
        <div className="contact_con">
            <div className="contact_box">
            <IoCallSharp  className="contact_icon"/>
            <div className=" contact_name">
                <h6>PHONE</h6>
                <h6>+91 9841483195</h6>
            </div>
            </div>

            <div className="contact_box">
            <MdEmail className="contact_icon"/>

            <div className=" contact_name">
                <h6 className="email_h6">EMAIL</h6>
                <h6 className="email_h6">duhzineitsolutions@gmail.com</h6>
            </div>
            </div>

            <div className="contact_box">
            <FaLocationDot className="contact_icon" />

            <div className=" contact_name">
                <h6>LOCATION</h6>
                <h6>Navalur</h6>
            </div>
            </div>

            <div className="contact_button">
                <button>CONTACT US</button>

            </div>

            

        </div>
        <div className="footer_hole_con">
            <div className="footer_hole_sub_con">
                <div className="footer_box">
                    <h3>Company</h3>
                    {/* <img src={website_logo1} /> */}
                    <p>Home</p>
                    <p>Works & News</p>
                    <p>Careers </p>
                    <p>Courses</p>
                    <p>Reviews</p>

                </div>

                <div className="footer_box">
                    <h3>Services</h3>
                    <p>Web Development</p>
                    <p>Mobile Development</p>
                    <p>On Demand Apps</p>
                    <p>IT Services</p>
                    <p>Logos & Branding</p>

                </div>

                <div className="footer_box">
                    <h3>Websites</h3>
                    <p>E Commerce Applications</p>
                    <p>Business Management Apps</p>
                    <p>Booking Applications</p>
                    <p>Healthcare Services</p>
                    <p>Social Media Platform</p>

                </div>

                <div className="footer_box">
                    <h3>Courses</h3>
                    <p>UXUI Design</p>
                    <p>Full Stack Development</p>
                    <p>Digital Marketing</p>
                    <p>Graphics Design</p>
                    <p>Content Creator</p>

                </div>
                

            </div>
            <div className="footer_p">
            <p>Copyright © 2023 Duhzine IT Solutions Pvt Ltd. All Rights Reserved</p>
            

            </div>
            

        </div>

        
        

   


    </div>

    


</div>



    </div>

    


    

    )
}
export default Careers;