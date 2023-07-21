import React from 'react'
import "../styles/Contact.css"
import { MdOutlineLocationOn } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { LuPhoneCall } from "react-icons/lu";
export default function Contact() {
  return (
    <>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-sm-12 Ctop'>
        <span className='ms-5'><a href='/'>Home</a> / Contact</span><br/>
        <h3 className='ms-5 mt-2'>Contact</h3>
        </div>
      </div>

      <div className='row py-4'>
        <div className='col-sm-1'></div>
        <div className='col-sm-10'>
          <div className='row'>
            <div className='col-sm-6 ct1 '>
            <center>
              <span className='fs-1 text-primary'><MdOutlineLocationOn/></span><br/>
              <b className='fs-5' style={{color:'#777777'}}>Our Address</b><br/>
              <span>416/195, Dilaram Baradari, Chaupatiya, Lucknow, Uttar Pradesh 226003, India</span>
            </center>
            </div>
            <div className='col-sm-3 ct2'>
            <center>
              <span className='fs-1 text-primary'><HiOutlineMail/></span><br/>
              <b className='fs-5' style={{color:'#777777'}}>Email Us</b><br/>
              <span>info@xteamindia.com</span>
            </center>
            </div>
            <div className='col-sm-3 ct3'>
            <center>
              <span className='fs-1 text-primary'><LuPhoneCall/></span><br/>
              <b className='fs-5' style={{color:'#777777'}}>Call Us</b><br/>
              <span>+919795728885</span>
            </center>
            </div>
          </div>
          <div className='row mt-5'>
          <div className='col-sm-6 ct4 '>
           <iframe src="https://www.google.com/maps/d/u/3/embed?mid=14NJdFejStQG9eIu7DrwXNuDtxItYnsU&ehbc=2E312F"  className='w-100' style={{height:'600px'}}>

           </iframe>
          </div>
          <div className='col-sm-6 ct4'>
          <div className='row pt-4'>
            <div className='col-sm-6 p-4'>
              <input type="text" className='form-control' placeholder='Your Name'/>
            </div>
            <div className='col-sm-6 p-4'>
            <input type="email" className='form-control' placeholder='Your Email'/>
            </div>
          </div>
          <div className='row m-2'>
          <input type="text" className='form-control' placeholder='Subject'/>
          <textarea type="text" className='form-control mt-4 t ' placeholder='Massage'/>
          </div>
          <div className='row'>
            <div className='col-sm-6 t1 ms-3 mt-3 ' style={{background:'#f9f9f9'}}>
            <span><input type="checkbox" style={{height:'30px',width:'30px',marginTop:'25px'}}/></span>
            <span  style={{margin:'20px'}}>I'm not a robot</span>
           <span><img src="../../images/ch.png"/></span>
            </div>
          </div>
          <center><button className='but1'>Send Massage</button></center>
          </div>
          
          </div>
        </div>
        <div className='col-sm-1'></div>
        </div>

         
    </div>
    </>
  );
}
