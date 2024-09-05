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

import ser1_icon1 from "./images/ser_icon11.png";
import ser1_icon2 from "./images/ser_icon22.png";
import ser1_icon3 from "./images/ser_icon33.png";
import ser1_icon4 from "./images/ser_icon44.png";
import ser1_icon5 from "./images/ser_icon55.png";
import ser1_icon6 from "./images/ser_icon66.png";
import ser1_icon7 from "./images/sentiment_satisfied.png";
// import ser1_icon8 from "./ser1_icon8.png";
import ser1_icon88 from "./images/person_edit.png";
import ser1_icon9 from "./images/Vector.png";
import ser1_icon10 from "./images/ser1_icon10.png";
import ser1_icon11 from "./images/schedule.png";
import ser1_icon12 from "./images/ser1_icon12.png";
import ser1_icon13 from "./images/adaptive_audio_mic.png";
import ser1_icon14 from "./images/support_agent.png";

import website_logo2 from "./images/website_logo2.png";
import website_logo1 from "./images/website_logo1.png";



import icon from "./images/ser_icon11.png";
import ser_icon2 from "./images/ser_icon22.png";
import ser_icon3 from "./images/ser_icon33.png";
import ser_icon4 from "./images/ser_icon44.png";
import ser_icon5 from "./images/ser_icon55.png";
import ser_icon6 from "./images/ser_icon66.png";
import ser_icon7 from "./images/ser_icon7.png";
import ser_icon8 from "./images/ser_icon8.png";
import ser_icon9 from "./images/ser_icon9.png";
import ser_icon10 from "./images/ser_icon10.png";

import ser_icon_black1 from "./images/ser_icon_black11.png";
import ser_icon_black2 from "./images/ser_icon_black22.png";
import ser_icon_black3 from "./images/ser_icon_black33.png";
import ser_icon_black4 from "./images/ser_icon_black44.png";
import ser_icon_black5 from "./images/ser_icon_black55.png";
import ser_icon_black6 from "./images/ser_icon_black66.png";





function services_two(){
    return(
        // <div className="services_two_con">
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
            <Nav.Link href="#action2" className="nav_a nav_aa"><a ><Link to="/services">Services</Link></a></Nav.Link>
            <Nav.Link href="#action2" className="nav_a"><a ><Link to="/courses">Courses</Link></a></Nav.Link>
            <Nav.Link href="#action2" className="nav_a"><a ><Link to="/careers">Carrers</Link></a></Nav.Link>
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
                    <h5>Explore possibilities with Duhzine services—transforming businesses online and providing tailored solutions </h5>
                        <button>Our Popular Services <FaArrowDown />
</button>
                    
                    </div>

                    <div className="service_second_con">
                    <div className="service_type">
                        {/* <FaCalendarDays className="service_icon" /> */}
                        <div className="service_icon_div">
                        <img src={icon} className="service_icon" />
                        <img src={ser_icon_black1} className="service_icon_black service_icon" />
                       

                        </div>
                       
                        <h3>Web Development</h3>
                        <h6>Enhance your website's functionality
and performance with our expert web
development team.</h6>
                    </div>

                    <div className="service_type">
                        {/* <FaCalendarDays className="service_icon" /> */}
                        <div className="service_icon_div">
                        <img src={ser_icon2} className="service_icon" />
                        <img src={ser_icon_black2} className="service_icon_black service_icon" />
                        </div>
                        <h3>Mobile App Development</h3>
                        <h6>Transform your business idea into
a successful mobile app with our
experienced app developers.</h6>
                    </div>

                    <div className="service_type">
                        {/* <FaCalendarDays className="service_icon" /> */}
                        <div className="service_icon_div">
                        <img src={ser_icon3} className="service_icon" />
                        <img src={ser_icon_black3} className="service_icon_black service_icon" />
                        </div>
                        <h3>Digital Marketing</h3>
                        <h6>Maximize your website traffic and
conversions with our tailored SEO,
PPC, social media marketing </h6>
                    </div>

                    <div className="service_type">
                        {/* <FaCalendarDays className="service_icon" /> */}
                        <div className="service_icon_div">
                        <img src={ser_icon4} className="service_icon" />
                        <img src={ser_icon_black4} className="service_icon_black service_icon" />
                        </div>
                        <h3>UXUI Design</h3>
                        <h6>Deliver an exceptional user
experience with our intuitive and
visually stunning UX/UI designs</h6>
                    </div>

                    <div className="service_type">
                        {/* <FaCalendarDays className="service_icon" /> */}
                        <div className="service_icon_div">
                        <img src={ser_icon5} className="service_icon" />
                        <img src={ser_icon_black5} className="service_icon_black service_icon" />
                        </div>
                        <h3>Video Editing</h3>
                        <h6>Elevate your brand's video content
with our tailored and high-quality
video editing services</h6>
                    </div>

                    <div className="service_type">
                        {/* <FaCalendarDays className="service_icon" /> */}
                        <div className="service_icon_div">
                        <img src={ser_icon6} className="service_icon" />
                        <img src={ser_icon_black6} className="service_icon_black service_icon" />
                        </div>
                        <h3>Graphics Design</h3>
                        <h6>Increase your brand's visibility and
recognition with our versatile and
impactful graphic design solutions.</h6>
                    </div>


                </div>


                    <div className="benefit_con">
                      <h1>Benifits of Service With Us</h1>

                      <div className="benefit_sub_con">
                        <div className="benefit_box">
                        {/* <FaInternetExplorer /> */}
                        <img src={ser1_icon7}/>
                        <h5>Customer Satisfaction</h5>
                        <h6>Embracing flexibility with remote work,
                           employees to work from the comfort
                                        of their homes or preferred locations.</h6>
                        </div>

                        <div className="benefit_box">
                        {/* <FaInternetExplorer /> */}
                        <img src={ser1_icon88}/>
                        <h5>Quick Support</h5>
                        <h6>Fueling productivity and satisfaction with
                               complimentary coffee and snacks to keep
                                          everyone energized throughout the day.</h6>
                        </div>

                        <div className="benefit_box">
                        {/* <FaInternetExplorer /> */}
                        <img src={ser1_icon9}/>
                        <h5>Subscription Methods</h5>
                        <h6>Assisting in securing the future with a provident
                            fund scheme to help employees save for their
                                       retirement.</h6>
                        </div>

                        <div className="benefit_box">
                        {/* <FaInternetExplorer /> */}
                        <img src={ser1_icon10}/>
                        <h5>Best Solutions</h5>
                        <h6>Rewarding exceptional performance with
                            attractive bonuses to recognize and motivate
                                        our team members..</h6>
                        </div>

                        <div className="benefit_box">
                        {/* <FaInternetExplorer /> */}
                        <img src={ser1_icon11}/>
                        <h5>On Time Delivery</h5>
                        <h6>Providing a fun-filled workplace environment
                            with indoor games and activities for relaxation
                                  and stress relief.</h6>
                        </div>

                        <div className="benefit_box">
                        {/* <FaInternetExplorer /> */}
                        <img src={ser1_icon12}/>
                        <h5>Unique Design</h5>
                        <h6>Providing an internet allowance to support
                               remote work and ensure smooth connectivity
                                for seamless collaboration.</h6>
                        </div>

                        <div className="benefit_box">
                        {/* <FaInternetExplorer /> */}
                        <img src={ser1_icon13}/>
                        <h5>Communication</h5>
                        <h6>Occasional surprises and gifts as tokens of
                           appreciation to make our team members feel
                                        valued and recognized.</h6>
                        </div>

                        <div className="benefit_box">
                        {/* <FaInternetExplorer /> */}
                        <img src={ser1_icon14}/>
                        <h5>24/7 Availability</h5>
                        <h6>Offering support and benefits for expectant
                                    mothers, ensuring a smooth transition during
                                                       maternity leave and return to work.</h6>
                        </div>


                      </div>


                    </div>

                    <div className="future_con">
                      <h1>Let’s Discuss your <span>Future Carrer</span></h1>
                      <h6>Do you have an idea that you want to bring to life? Contact us today & get in touch with our experts!</h6>
                      <button>Contact Us!</button>


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

                    {/* <div className="contact_button">
                        <button>CONTACT ME</button>

                    </div> */}

                    

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

            


            


        // </div>

    )
}
export default  services_two;