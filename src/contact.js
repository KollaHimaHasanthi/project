import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

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

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


// import { IoCallSharp } from "react-icons/io5";
// import { MdEmail } from "react-icons/md";
// import { FaLocationDot } from "react-icons/fa6";

// import logo from "./image.png";

import about from "./images/about1.png";

import { IoMdMail } from "react-icons/io";
import { FaHome } from "react-icons/fa";

import { Link } from "react-router-dom";

import website_logo2 from "./images/website_logo2.png";
import website_logo1 from "./images/website_logo1.png";

function Contact() {
  return (
    <div className="home_container">
      <div className="home_sub_con">
        {/* nav second */}
        <div className="nav_con">
          <Navbar expand="lg" className="bg-body-tertiary nav_sub_con ">
            <Container fluid>
              <Navbar.Brand href="#">
                <img src={website_logo2} />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll" className="section">
                <Nav
                  className="me-auto my-2 my-lg-0 "
                  style={{ maxHeight: "100px" }}
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
                <Nav.Link href="#action1" className="nav_a">
                  {" "}
                  <a>
                    <Link to="/">Home</Link>
                  </a>
                </Nav.Link>
                <Nav.Link href="#action2" className="nav_a">
                  {" "}
                  <a>
                    <Link to="/about">About</Link>
                  </a>
                </Nav.Link>
                <Nav.Link href="#action2" className="nav_a">
                  <a>
                    <Link to="/services">Services</Link>
                  </a>
                </Nav.Link>
                <Nav.Link href="#action2" className="nav_a">
                  <a>
                    <Link to="/courses">Courses</Link>
                  </a>
                </Nav.Link>
                <Nav.Link href="#action2" className="nav_a">
                  <a>
                    <Link to="/careers">Carrers</Link>
                  </a>
                </Nav.Link>
                <a>
                  <Link to="/contact">
                    <button className="nav_button">CONTACT US</button>
                  </Link>
                </a>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
      {/* course con */}
      <div className="course_con">
        <div className="course_sub_con">
          <div className="contact_home_con">
        <div className="contact_one">
          <h1>Contact Us</h1>
          <div>
            <a href="/">Home /</a>
            <a href="#contact"> Contact</a>
          </div>
        </div>
        <div className="contact_two">
          <h6>CONTACT</h6>
          <h2>Feel free to contact us today and get your solution</h2>
          <p>
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. It is a long
            established fact that a reader.
          </p>
        </div>

        <div className="form_con">
          <div className="form_one">
            <h1>Get in Touch</h1>
            <h6>
              Give us a call or drop by anytime, we endeavour to answer all
              enquiries within 24 hours.
            </h6>
            <div className="form_input">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Your Subject" />
              <textarea placeholder="Add Your Comments" className="command"></textarea>
            </div>
            <div className="checkbox">
              <input type="checkbox" />
              <span>I agree to the Terms & Conditions</span>
            </div>
            <button type="submit">Send Message</button>
          </div>

          <div className="form_two">
            <div className="form_two_call">
              <IoCallSharp className="con_icon" />
              <div className="form_two_call_text">
                <h6>Call Us.</h6>
                <h6>+91 9841483195</h6>
              </div>
            </div>

            <div className="form_two_call">
              <IoMdMail className="con_icon" />
              <div className="form_two_call_text">
                <h6>Email Us.</h6>
                <h6>duhzineitsolutions@gmail.com</h6>
              </div>
            </div>

            <div className="form_two_call">
              <FaHome className="con_icon" />
              <div className="form_two_call_text">
                <h6>Address.</h6>
                <h6>S2 Stalin Complex Navalur Chennai.</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

          {/* <Footer /> */}
        </div>
      </div>

      <div className="footer_con">
        <div className="footer_sub_con">
          <div className="contact_con">
            <div className="contact_box">
              <IoCallSharp className="contact_icon" />
              <div className=" contact_name">
                <h6>PHONE</h6>
                <h6>+91 9841483195</h6>
              </div>
            </div>

            <div className="contact_box">
              <MdEmail className="contact_icon" />

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
                <h3>Course</h3>
                <p>UXUI Design</p>
                <p>Full Stack Development</p>
                <p>Digital Marketing</p>
                <p>Graphics Design</p>
                <p>Content Creator</p>
              </div>
            </div>
            <div className="footer_p">
              <p>
                Copyright © 2023 Duhzine IT Solutions Pvt Ltd. All Rights
                Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
