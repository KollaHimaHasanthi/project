import React from "react";
import dev from "./images/dev.png";

import it from "./images/it.png";
import eCommerce from "./images/eCommerce.png";
import Media from "./images/Media.png";
import Real  from "./images/Real Estate.png";
import Engineering from "./images/Engineering.png";
import Architech  from "./images/Architech.png";
import Healthcare from "./images/Healthcare.png";
import  Finance from "./images/Finance.png";
import Hospitality from "./images/Hospitality.png";
import Ad   from "./images/Ad Agency.png";
import Auto  from "./images/Auto Mobile.png";
import Imports  from "./images/Imports.png"


function Develop(){
    return(
        <div className="develop_con">
            <div className="develop_first_con">
            <div className="develop_sub_con">
                <div className="develop_img">
                    <img src={dev} />

                </div>
                <div className="develop_word">
                    <h6>DEVELOP</h6>
                    <h2>We Grow Your Business  Online Presence!!!</h2>
                    <h5>Duhzine IT Solutions not only concentrates on the website,
                        we are your strategic partner in expanding your digital
                         footprint. With a keen eye on the latest trends, we navigate
                          the dynamic landscape of online growth, ensuring your
                           business thrives in the digital era. Let us elevate your brand
                                 and reach new heights together</h5>
                </div>
            </div>

            <div className="explore_sub_con">
                <div className="explore_word">
                    <h6>EXPLORE</h6>
                    <h2>We have Served In Different Industry Vertical</h2>
                    <h5>We have provided premium web development services to a large clientele across multiple industries, enabling them
                          leverage their potential, expand their market share and increase their turnover.</h5>

                </div>
                <div className="explore_con_box">
                    <div className="explore_box">
                        <img src={it} />
                        <h6>IT / Software</h6>
                    </div>

                    <div className="explore_box">
                        <img src={Real} />
                        <h6>Real Estate</h6>
                    </div>

                    <div className="explore_box">
                        <img src={ Engineering} />
                        <h6>Engineering</h6>
                    </div>

                    <div className="explore_box">
                        <img src={Architech} />
                        <h6>Architech</h6>
                    </div>

                    <div className="explore_box">
                        <img src={eCommerce} />
                        <h6>E-Commerce</h6>
                    </div>

                    <div className="explore_box">
                        <img src={Healthcare} />
                        <h6>Healthcare</h6>
                    </div>

                    <div className="explore_box">
                        <img src={Finance} />
                        <h6>Finance</h6>
                    </div>

                    <div className="explore_box">
                        <img src={Hospitality} />
                        <h6>Hospitality</h6>
                    </div>

                    <div className="explore_box">
                        <img src={Media} />
                        <h6>Media / Cinema</h6>
                    </div>

                    <div className="explore_box">
                        <img src={Ad} />
                        <h6>Ad Agency</h6>
                    </div>

                    <div className="explore_box">
                        <img src={Auto} />
                        <h6>Auto Mobile</h6>
                    </div>

                    <div className="explore_box">
                        <img src={Imports} />
                        <h6>Imports</h6>
                    </div>


                </div>

            </div>


            </div>
        </div>
    )

}

export default Develop;