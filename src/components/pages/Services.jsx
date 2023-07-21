import React from 'react'
import { PiApertureBold } from "react-icons/pi";
import "../styles/Services.css"
export default function Services() {
  return (
    <>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-sm-12 Stop'>
        <span className='ms-5'><a href='/'>Home</a>/ Service</span><br/>
        <h3 className='ms-5 mt-2'>Service</h3>
        </div>
      </div>
      <div className='row mt-5'>
        <div className='col-sm-1'></div>
        <div className='col-sm-10'>
        {/* <div className='row'> */}
        {/* <div className="grand_parent">    */}
      <div className="parents py-3">
        <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="child p-3" >
            <div className='n1'>
                <p className='py-3 text-center '>
                <PiApertureBold style={{fontSize:'20px'}}/>
                </p>
                </div>
                <h4 className='text-center'>BUSINESS CONSULTING</h4>
                <ul>
                  <li>Requirement Analysis and Discussion</li>
                  <li>Software Consulting Services</li>
                  <li>eCommerce Consulting Services</li>
                </ul>
          </div>
          <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="child p-3">
            <div className='n1'>
                <p className='py-3 text-center '>
                <PiApertureBold style={{fontSize:'20px'}}/>
                </p>
                </div>
                <h4 className='text-center'>MOBILE APPLICATIONS</h4>
                <ul>
                  <li>Android Applications Development</li>
                  <li>Hybrid Applications Development</li>
                  <li>Progressive Web Applications (PWA)</li>
                </ul>
            </div>
            <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="child p-3">
              <div className='n1'>
                <p className='py-3 text-center '>
                <PiApertureBold style={{fontSize:'20px'}}/>
                </p>
                </div>
                <h4 className='text-center'>WEB APPLICATIONS</h4>
                <ul>
                  <li>Custom Web Development</li>
                  <li>eCommerce Development</li>
                  <li>Bespoke CMS Development</li>
                </ul>
            </div>
          </div>
          <div className="parents py-3">
          <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="child p-3">
            <div className='n1'>
                <p className='py-3 text-center '>
                <PiApertureBold style={{fontSize:'20px'}}/>
                </p>
                </div>
                <h4 className='text-center'>UI/UX Design</h4>
                <ul>
                  <li>Logo Design and Corporate Branding</li>
                  <li>Wireframes  Designing</li>
                  <li>Responsive Web Design</li>
                </ul>
            </div>
            <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="child p-3">
            <div className='n1'>
                <p className='py-3 text-center '>
                <PiApertureBold style={{fontSize:'20px'}}/>
                </p>
                </div>
                <h4 className='text-center'>AUDIT SERVICES</h4>
                <ul>
                  <li>Speed & Performance Audit Services</li>
                  <li>Design & UX Audit</li>
                  <li>Technical Audit</li>
                </ul>
            </div>
            <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="child p-3">
            <div className='n1'>
                <p className='py-3 text-center '>
                <PiApertureBold style={{fontSize:'20px'}}/>
                </p>
                </div>
                <h4 className='text-center'>TESTING SERVICES</h4>
                <ul>
                  <li>Software Testing</li>
                  <li>Web Applications Testing</li>
                  <li>Mobile Applications Testing</li>
                </ul>
            </div>
          </div>
          {/* </div> */}
            {/* </div> */}
          </div>
        <div className='col-sm-1'></div>
      </div>
    </div>
    </>
  );
}