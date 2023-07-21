import React from 'react';
import { BsCardChecklist } from "react-icons/bs";
import { BsFillBarChartFill } from "react-icons/bs";
import { BsFillBinocularsFill } from "react-icons/bs";
import { PiApertureBold } from "react-icons/pi";
import { AiOutlineFileText } from "react-icons/ai";
import { GoStopwatch } from "react-icons/go";
import { BiWorld } from "react-icons/bi";
import { BiSlideshow } from "react-icons/bi";
import { BiSolidArch } from "react-icons/bi";
import Photo from './Photo';
import '../styles/It.css'
export default function It() {
  return (
    <>
    <div className='container-fluid'>
        <div className='row mt-5'>
            <div className='col-sm-1'></div>
            <div className='col-sm-10'>
                <div className='row'>
            <center><h2>IT Services</h2>
            <div className='role'></div>
            </center>
        {/* <div className="grand_parent">    */}
      <div className="parents py-3">
        <div className="child p-3">
        <div data-aos="zoom-in">
                <p className='fs-1 py-3'>
                <BsCardChecklist  />
                </p>
                <h4>Website Design & Development Services</h4>
                <span>
                We transform opportunities 
                into platform evolving<br/> market 
                trends into significant tools
                 to help your <br/>business reach heights.
                </span>
                </div>
        </div>
        <div className="child p-3">
        <div data-aos="zoom-in">
            <p className='fs-1 py-3 '>
                <BsFillBarChartFill/>
             </p>
             <h4>Mobile Application Development</h4>
                <span>
                We, as an innovator design, build scalable, 
                robust,<br/> feature-rich mobile apps with 
                interactive and user-<br/>friendly interface.
                </span>
            </div>
        </div>
        <div className="child p-3">
        <div data-aos="zoom-in">
            <p className='fs-1 py-3'>
                <BsFillBinocularsFill/>
                </p>
                <h4>Cloud Computing For Online<br/> Business</h4>
                <span>
                We, understand the tangible benefits which comes
                 with Cloud Technologies including 
                 robust, scalable<br/> infrastructure.
                </span>
            </div>
        </div>
      </div>
{/* </div> */}
 </div>
            <div className='row'>
                <div className='col-sm-6 mk'>
                  <img data-aos="zoom-in-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" src="https://xteamindia.com/skin/frontend/img/mission-vision.jpg" className='w-100'/>  
                </div>
                <div className='col-sm-6 '>
                    <h2>Our Vision</h2>
                    <span>
                    At <b>XTeam</b>, we strive to understand your unique business 
                    requirements, and provide you the Best-in-Class Business
                     Solutions by the use of emerging technologies.
                    </span><br/><br/>
                    <h2>Our Mission</h2>
                    <span>
                    Our mission is to enhance the growth of our Clients
                     by providing Cost Effective and Efficient solutions,
                      and become their Trusted Partner on 
                    the basis of honesty, integrity, perseverance and dedication. 
                    </span>
                </div>
            </div>


       {/* // //....................core value....................//////     */}


            {/* <div className='row'> */}
                <center className='mt-1'><h2>Core Values</h2>
                <div className='role'></div>
                </center>
       {/* <div className="grand_parent">    */}
      <div className="parents py-3">
        <div className="child p-3">
        <div data-aos="zoom-out">
        <div className='n'>
                <p className='py-3 text-center'>
                <PiApertureBold style={{fontSize:'20px'}}/>
                </p>
                </div>
                <h4 className='text-center'>Integrity</h4>
                <span className='text-center' >
                We are actively reorganizing and overhauling
                 the various meanings behind our company’s 
                 values, mission statement, and vision.
                </span>
                </div>
        </div>
        <div className="child p-3">
        <div data-aos="zoom-out">
        <div className='n'>
                <p className='py-3 text-center '>
                <AiOutlineFileText style={{fontSize:'20px'}}/>
                </p>
                </div>
                <h4 className='text-center'>Quality Assurance</h4>
                <span className='text-center' >
                Our Quality Assurance team takes your software 
                and puts it through rigorous tests from screen to 
                screen ensuring it works perfectly.
                </span>
            </div>
        </div>
        <div className="child p-3">
        <div data-aos="zoom-out">
        <div className='n'>
                <p className='py-3 text-center'>
                <GoStopwatch style={{fontSize:'20px'}}/>
                </p>
                </div>
                <h4 className='text-center'>Customer Focus</h4>
                <span className='text-center' >
                We have a vast pool of extremely experienced and
                 skilled dedicated developers that possess expertise
                  in various technologies and tools.
                </span>
            </div>
        </div>
      </div>
      <div className="parents py-3">
        <div className="child p-3">
        <div data-aos="zoom-out">
        <div className='n'>
                <p className='py-3 text-center '>
                <BiWorld style={{fontSize:'20px'}}/>
                </p>
                </div>
                <h4 className='text-center'>Long Term Relationships</h4>
                <span className='text-center' >
                We take long-term responsibility for the product,
                 its development, and functionality. We have to look a
                 few steps ahead, get into the client’s 
                 shoes and consider his business.
                </span>
                </div>
        </div>
        <div className="child p-3">
        <div data-aos="zoom-out">
        <div className='n'>
                <p className='py-3 text-center '>
                <BiSlideshow style={{fontSize:'20px'}}/>
                </p>
                </div>
                <h4 className='text-center'>Collaborative Innovation</h4>
                <span className='text-center' >
                Disruptive technologies and new business
                 paradigms are having a 
                 transformative impact on virtually every
                 segment of the economy, creating new 
                 business models and opportunities.
                </span>
            </div>
        </div>
        <div className="child p-3">
        <div data-aos="zoom-out">
        <div className='n'>
                <p className='py-3 text-center '>
                <BiSolidArch style={{fontSize:'20px'}}/>
                </p>
                </div>
                <h4 className='text-center'>Continuous Learning</h4>
                <span className='text-center' >
                To encouraging employees to steadily learn by 
                providing them with the tools 
                that facilitate this learning.
                </span>
            </div>
        </div>
      </div>
    {/* </div> */}
       {/* </div> */}
            <Photo/>
            </div>
            <div className='col-sm-1'></div>
        </div>
    </div>
    </>
  )
}
