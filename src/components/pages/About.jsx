import React, { useState } from 'react'
import "../styles/About.css"
import { BsCheckCircle } from "react-icons/bs";
import { BsCardChecklist } from "react-icons/bs";
import { BsFillBinocularsFill } from "react-icons/bs";
import { BsFillBarChartFill} from "react-icons/bs";
import { BsEmojiSmile} from "react-icons/bs";
import { BsJournalRichtext} from "react-icons/bs";
import { BsHeadset} from "react-icons/bs";
import { HiUsers} from "react-icons/hi";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
export default function About() {
  const[counterOn,setCounterOn]=useState(false)
  return (
    <>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-sm-12 top'>
        <span className='ms-5'><a href='/'>Home</a> / About Us</span><br/>
        <h3 className='ms-5 mt-2'>About Us</h3>
        </div>
      </div>
      <div className='row mt-5'>
        <div className='col-sm-1'></div>
        <div className='col-sm-10'>
          <div className='row'>
            <div className='col-sm-6'>
            <div data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
              <img src="https://xteamindia.com/skin/frontend/img/about.jpg" className='w-100' style={{minHeight:'500px'}}/>
            </div>
            </div>
            <div className='col-sm-6'>
            <span><b>XTeam (www.xteamindia.com)</b> incorporated in 2021, is offshore software development company with a strong team of highly skilled IT experts, catering its global clients with innovative cost-effective solutions across different industry verticals.<br/><br/>

We attribute our transformation from a startup to a renowned service provider to our ability to evolve continuously and drive for excellence. We provide cost-effective and long-term solutions to our customers all over the world.<br/><br/>

XTeam has challenged the traditional industry by providing service to its customers 24X7. We develop brand identities & web applications, create stunning websites, and do web marketing for clients all over the world.

XTeam offers different engagement models to meet global - clients' diverse needs
<br/><br/>
<b>XTeam offers different engagement models to meet global - clients' diverse needs.</b>
</span><br/><br/>

<span><BsCheckCircle className='fs-4 text-primary'/>  Fixed Price Project Model</span><br/><br/>
<span><BsCheckCircle className='fs-4 text-primary'/>  Time & Material Project Model</span><br/><br/>
<span><BsCheckCircle className='fs-4 text-primary'/>  Dedicated Resource Model (DRM)</span><br/><br/>
            </div>
          </div>

          {/* <div className='row'> */}
            <center className='fs-5'>Before getting swept away in the euphoria, we listed what we believed a good software company needed and measured ourselves on those dimensions:-</center>      
            {/* <div className="grand_parent">    */}
      <div className="parents py-3">
        <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="child p-3">
         <p className='fs-1 py-3 '>
                <BsCardChecklist/>
                </p>
                <h4>Exceptional Technical Skills</h4>
                <span>
                Our greatest strength was that we were all nerds.
                 With degrees from MIT, Stanford, IIT Kanpur and 
                 development experience at Microsoft and Oracle,
                  we felt quite confident of our ability to "out-nerd" anybody.
                </span>
            </div>
            <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="child p-3">
            <p className='fs-1 py-3 '>
                <BsFillBarChartFill/>
             </p>
             <h4>Good Client Skills</h4>
                <span>
                We might have been Indian software engineers with
                 fairly heavy accents, but our client interactions
                  with Fortune 500 clients had shown us that it was
                   a hurdle that we could overcome.
                </span>
            </div>
            <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="child p-3">
            <p className='fs-1 py-3'>
                <BsFillBinocularsFill/>
                </p>
                <h4>Good Management Skills</h4>
                <span>
                Nerds we might have been, but nonetheless one
                 of us had single handedly built up a college
                  from scratch to 2500 students within 5 years.
                   Add to this mix a Harvard MBA, a project manager
                    from Oracle and a consultant, we did believe that
                     we had the management skills required to start and run a company.
                </span>
            </div>

      </div>
{/* </div> */}
    
          {/* </div> */}

          <div className='row'>
           <center> <h2>Our Achievements</h2>
           <div className='role'></div>
           </center>
            <div className='col-sm-3 ab1 py-4 mt-5'>
              <span className='fs-1 text-primary'><BsEmojiSmile/></span>
              <ScrollTrigger onEnter={()=>setCounterOn(true)}>
             {counterOn &&  <b><CountUp start={0} end={5} duration={2} delay={0} className='ab2'/></b>}
              </ScrollTrigger>
              <span><b>Happy Clients</b></span>
            </div>
            <div className='col-sm-3 ab1 py-4 mt-5'>
            <span className='fs-1 text-primary'><BsJournalRichtext/></span>
              <ScrollTrigger onEnter={()=>setCounterOn(true)}>
             {counterOn &&  <b><CountUp start={0} end={12} duration={3} delay={0} className='ab2'/></b>}
              </ScrollTrigger>
              <span><b>Projects Successfully Running</b></span>
            </div>
            <div className='col-sm-3 ab1 py-4 mt-5'>
            <span className='fs-1 text-primary'><BsHeadset/></span>
              <ScrollTrigger onEnter={()=>setCounterOn(true)}>
             {counterOn &&  <b><CountUp start={0} end={450} duration={5} delay={0} className='ab2'/></b>}
              </ScrollTrigger>
              <span><b>Hours of Active Support</b></span>
            </div>
            <div className='col-sm-3 ab1 py-4 mt-5'>
            <span className='fs-1 text-primary'><HiUsers/></span>
              <ScrollTrigger onEnter={()=>setCounterOn(true)}>
             {counterOn &&  <b><CountUp start={0} end={15} duration={6} delay={0} className='ab2'/></b>}
              </ScrollTrigger>
               <span><b>Smart Working</b> team members</span>
            </div>
          </div>
        </div>
        <div className='col-sm-1'></div>
      </div>
    </div>
    </>
  )
}
