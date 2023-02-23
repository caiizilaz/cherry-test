import React from "react";
import { SiTailwindcss } from 'react-icons/si';
import { BsFacebook } from 'react-icons/bs';
import { FiInstagram } from 'react-icons/fi';
import { AiOutlineTwitter, AiFillGithub, AiFillYoutube } from 'react-icons/ai';

const Footer=()=>{
    return(
        
        <div className="main-footer">
          <div className="container">
             <div className="row">
                
                {/*columm1*/}
                <div className="col" >
                   <h3><SiTailwindcss color='#5100ff' size='2rem'/></h3><br/> 
                   <p>Marking the world a better place throgh constructing <br/> 
                    elegant hierarchies.</p> <br/> 
                   <h3><BsFacebook color='#A9A9A9'/>&emsp; <FiInstagram color='#A9A9A9'/>&emsp; <AiOutlineTwitter color='#A9A9A9' /> &emsp;<AiFillGithub color='#A9A9A9'/> &emsp;<AiFillYoutube color='#A9A9A9'/></h3>
                               
               </div>

                        
             
             </div>
             <br/> 
             <hr/>
             <br/> 
             <div className="row">
                <p className="col-sm">
                   &copy;2020 Your Company, Inc. All rights reserved.
                </p>
             
          </div>
        </div>
        </div>
    );
}
export default Footer;

