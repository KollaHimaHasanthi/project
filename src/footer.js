import React from "react";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

import logo from "./images/image.png";

import website_logo1 from "./images/website_logo1.png"


function Footer(){
    return(
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


    )
}
export default Footer;