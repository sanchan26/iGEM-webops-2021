import React from 'react'
import {FaFacebookSquare} from "react-icons/fa";
import {FaInstagramSquare} from "react-icons/fa";
import {FaTwitterSquare} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";

import './FooterStyle.css'


function Footer() {
    return (
        <div>
            <div className="Footer-main">
            <div className="center"><h4>Contact us</h4></div>
                <div className="Footer-container1">
                    
                    <div className="Address">
                        
                        <p>Department of Biotechnology, IIT Madras, Indian Institute of Technology, Sardar Patel Road , Chennai, India-600036</p>


                        
                    </div>
                    <div className="Contact-no">
                        
                        
                        <p>Head 1:  1234567</p>
                        <p>Head 2:  2345674</p>
                    </div>

                    <div className="Social-media">
                        <FaFacebookSquare size ='40px'/>
                        <FaInstagramSquare size ='40px'/>
                        <FaLinkedin size ='40px'/>
                        <FaTwitterSquare size ='40px'/>
                    </div>
                </div>
                <div className="copyrights">
                <span>&#169;</span> <span>Copyrights reserved to iGEM IITM</span>
                </div>
            </div>
        </div>
    )
}

export default Footer
