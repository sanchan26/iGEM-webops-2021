import React from 'react'
import {AiOutlineYoutube} from "react-icons/ai";
import {AiOutlineInstagram} from "react-icons/ai";
import {AiOutlineLinkedin} from "react-icons/ai";
import {AiOutlineMail} from "react-icons/ai"
import './FooterStyle.css'


function Footer() {
    return (
        <div>
            <div className="Footer-main">
            <div className="center"><h5>Contact</h5></div>
                <div className="Footer-container1">
                    <div className="Address">
                        <br/>
                        <p>Department of Biotechnology, IIT Madras, Indian Institute of Technology, Sardar Patel Road , Chennai, India-600036</p>
                    </div>
                    
                    
                    <div className="Social-media">
                        <a href = 'https://www.instagram.com/igemiitm/'>
                        <AiOutlineInstagram size ='40px'/>
                        </a>
                        <a href = 'https://www.linkedin.com/in/igemiitm/'>
                        <AiOutlineLinkedin size ='40px'/>
                        </a>
                        <a href = 'https://www.youtube.com/c/iGEMIITMadras'>
                        <AiOutlineYoutube size ='40px'/>
                        </a>
                        <a href = 'mailto:igem@smail.iitm.ac.in'>
                        <AiOutlineMail size ='40px'/>
                        </a>
                    </div>
                </div>
               
                <div className="copyrights">
                Made with ❤️ by webops iGEM IITM
                </div>
            </div>
        </div>
    )
}

export default Footer
