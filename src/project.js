import React from "react";

import project_img1 from "./images/project_img11.png";
import project_img2 from "./images/project_img22.png";
import project_img3 from "./images/project_img33.png";
import project_img4 from "./images/project_img44.png";
import project_img5 from "./images/project_img55.png";
import project_img6 from "./images/project_img66.png";

function Project(){
    return(
        <div className="project_con">
            <div className="project_sub_con">
                <div className="project_word">
                    <h6>PROJECTS</h6>
                    <h2>Our <span>Portfolio</span> </h2>
                </div>
                <div className="project_type">
                    <p>All</p>
                    <p>Design</p>
                    <p>Marketing</p>
                    <p>Branding</p>

                </div>

                <div className="project_img_con">
                    <div className="project_img">
                        <img src={project_img1}/>
                        <h4>Poster Design for School and
Colleges</h4>
                        <button>Design</button>
                    </div>

                    <div className="project_img">
                        <img src={project_img2}/>
                        <h4>App Design For Local Agency
And Company</h4>
                        <button>Design</button>
                    </div>

                    <div className="project_img">
                        <img src={project_img3}/>
                        <h4>Branding For American IT
Business Agency</h4>
                        <button>Branding</button>
                    </div>

                    <div className="project_img">
                        <img src={project_img4}/>
                        <h4>Website Design For Local 
Agency and Company</h4>
                        <button> Design</button>
                    </div>

                    <div className="project_img">
                        <img src={project_img5}/>
                        <h4>Branding for Hospitals, Resturants and Gym.</h4>
                        <button>Branding</button>
                    </div>

                    <div className="project_img">
                        <img src={project_img6}/>
                        <h4>We are providing A to Z makering Services</h4>
                        <button>Marketing</button>
                    </div>
                    

                </div>

            </div>

        </div>


    )
}
export default Project;