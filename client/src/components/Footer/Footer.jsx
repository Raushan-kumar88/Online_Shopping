import React from "react";
import {FaLocationArrow,
    FaMobileAlt,
    FaEnvelope,} 
    from "react-icons/fa"
import payment from '../../assets/payments.png'
import "./Footer.scss";
const Footer = () => {
    return(
        <>
            <fotter className="footer">
                <div className="footer-content">
                    <div className="col">
                        <div className="title">
                            About
                        </div>
                        <div className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Voluptates laborum rem voluptas ratione aut, temporibus 
                            quaerat aliquid a ducimus repellat.
                        </div>
                    </div>
                    <div className="col">
                        <div className="title">
                            Contact
                        </div>
                        <div className="c-item">
                            <FaLocationArrow />
                            <div className="text">
                            1 St Floor TEJ ARCADE, below Dainik Divya Marathi, Navi Peth, Jalgaon, Maharashtra 425001
                            </div>
                        </div>
                        <div className="c-item">
                            <FaMobileAlt />
                            <div className="text">
                            Phone: 0257 222 1016
                            </div>
                        </div>
                        <div className="c-item">
                            <FaEnvelope />
                            <div className="text">
                            Email : raushan.20jics088@jietjodhpur.ac.in
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="title">Categories</div>

                        <span className="text">Headphones</span>
                        <span className="text">Smart Watches</span>
                        <span className="text">Bluetooth Speakers</span>
                        <span className="text">Wireless Earbuds</span>
                        <span className="text">Home Theaters</span>
                        <span className="text">Projectors</span>
                    </div>
                    <div className="col">
                        <div className="title">Pages</div>

                        <span className="text">Home</span>
                        <span className="text">Abouts</span>
                        <span className="text">Privacy Policy</span>
                        <span className="text">Returns</span>
                        <span className="text">Terms & Conditions</span>
                        <span className="text">Contact Us</span>
                    </div>
                </div>
                <div className="bottom-bar">
                    <div className="bottom-bar-content">
                        <div className="text">
                            RG|STORE 2023 CREATED BY RAUSHAN. PREMIUM E-COMMERCE SOLUTIONS.
                        </div>
                        <div>
                            <img src={payment} alt="" />
                        </div>
                    </div>
                </div>
            </fotter>
        </>
    )
};

export default Footer;
