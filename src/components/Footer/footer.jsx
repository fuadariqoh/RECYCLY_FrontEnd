import React from 'react';
import './footer.css'
import logoheader from './../../images/recyly_whitenobg.png'
import {FaFacebook, FaYoutube, FaInstagram, FaTwitter} from 'react-icons/fa'

const Footer=()=>{
return (
        <div>            
            <div className='f-containersatu'>
                <div className='f-header satu'>
                    <p className='footer-body'>
                        <img fixed='top' src={logoheader} alt='logo' height='90px' style={{paddingLeft:'30px'}}></img>
                    </p>
                </div>
                
                <div className='f-header dua'>
                    <p className='footer-body'>SUPPORT</p>
                    <p><a href='/aboutus' className='clickable' style={{color:'white'}}>About Us</a></p>
                    <p><a href='/contactus'className='clickable' style={{color:'white'}}>Contact Us</a></p>
                </div>

                <div className='f-header tiga'>
                    <p className='footer-body'>SHOP </p>
                    <p><a href='/terms' className='clickable' style={{color:'white'}}>Terms</a></p>
                    <p><a href='/privacypolicy' className='clickable' style={{color:'white'}}>Privacy Policy</a></p>
                </div>

                <div className='f-header empat'>
                    <p className='footer-body' >MORE</p>  
                    <div className='footer-bodyicon'>
                        <a href='https://www.facebook.com/RethinkReuseIt' style={{color:'inherit'}}><p className='footer-icon'><FaFacebook/></p></a>
                        <a href='https://twitter.com/Recyclebank' style={{color:'inherit'}}><p className='footer-icon'><FaTwitter/></p></a>
                        <a href='https://www.instagram.com/recycleandplay/' style={{color:'inherit'}}><p className='footer-icon'><FaInstagram/></p></a>
                        <a href='https://www.youtube.com/channel/UCCLVg6BI7NxDIp6GFKfFGFw' style={{color:'inherit'}}><p className='footer-icon'><FaYoutube/></p></a>
                    </div>
                             
                </div>
                
            </div>

            <div className='f-containerdua'>
                <div className='f-footersatu'>
                    <p style={{paddingLeft:'30px'}}>Copyright <span style={{color:'#9ac84a'}}>Recycly</span> 2020. All Rights Reserved</p>
                </div>
            </div>
            
        </div>
)
}

export default Footer