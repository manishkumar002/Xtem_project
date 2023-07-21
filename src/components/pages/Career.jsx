// import React from 'react'
// import "../styles/Career.css";
// import { MdOutlineMyLocation } from "react-icons/md";
// import { FaUserPlus } from "react-icons/fa";
// import {RxCheck} from 'react-icons/rx';
// import { Link } from 'react-router-dom';
// export default function Career() {
//   return (
//     <>
//     <div className='container-fluid'>
//       <div className='row'>
//         <div className='col-sm-12 Ctop1'>
//         <span className='ms-5'><a href='/'>Home</a> / Career</span><br/>
//         <h3 className='ms-5 mt-2'>Career</h3>
//         </div>
//       </div>
//       <div className='row py-4'>
//         <div className='col-sm-1'></div>
//         <div className='col-sm-10'>
//         <div className='row'>
//             <div className='col-sm-12 mt-4'>
//                 <center>
//                <b  className='mt-5' style={{fontSize:"25px",marginTop:"40px",fontFamily:"Castellar"}}>Why Work at XTeam</b> 
//                <div className='role'></div>
//                 </center>
//             </div>
//         </div>

//         <div className='row mt-5'>
//             <div className='col-sm-12'>
//                 <center>
//                     <p style={{textAlign:"justify"}}>It is the <b>TEAM</b>  who make good companies great. At  <b>XTeam</b>, we always try to ensure that our <b>Team</b>  Members have access to the best learning
//                     and growth opportunities. Working for <b>XTeam</b>  brings exciting perks, flexibility, recognition and opportunities for learning.
//                     Some of the main benefits, which <b> XTeam</b> members enjoy are:

//                     </p>
//                 </center>
//                 <div className='row'>
//                     <div className='col-sm-6'>
//                     <RxCheck className='icnes mt-1'/>     Friendly Work Environment<br/>
//                     <RxCheck className='icnes mt-1'/>     Work-Life Balance<br/>
//                     <RxCheck className='icnes mt-1'/>     Courses and sessions for grooming knowledge<br/>
//                     <RxCheck className='icnes mt-1'/>     Child Allowance<br/>
//                     </div>
//                     <div className='col-sm-6'>
//                     <RxCheck className='icnes mt-1'/>     Exposure To A Global Clientele
// <br/>
//                     <RxCheck className='icnes mt-1'/>     Fun / Knowledge Sharing activities every month
// <br/>
//                     <RxCheck className='icnes mt-1'/>     Free Complementary Lunch
// <br/>
//                     <RxCheck className='icnes mt-1'/>    Exclusive Benefits for Female Team Members
// <br/>
//                     </div>
//                 </div>
//             </div>
//             <div className='row mt-5'>
//                 <div className='col-sm-2'></div>
//                 <div className='col-sm-8'>
//                 <center>
//                <b  className='mt-5' style={{fontSize:"25px",marginTop:"40px",fontFamily:"Castellar"}}>Current Openings
// </b>
//                 <div className='role'></div>
//                 </center>
//                 <div className='row mt-5'>
//                     <div className='col-sm-12 '>
//                         <button className='but ms-2'>All</button>
//                         <button className='but1 ms-2'>Mobile Development</button>
//                         <button className='but2 ms-2'>Marketing</button>
//                         <button className='but3 ms-2'>Human resource</button>
//                         <button className='but4 ms-2 '>QA</button>
//                         <button className='but5 ms-2'>Web Development</button>

//                     </div>
//                 </div>
//                 </div>
//                 <div className='col-sm-2'></div>
//             </div>
//         </div>
        

//         <div className='row'>
//             <div className='col-sm-4 Ca ms-2'>
//                 <span>Business Development Executive</span>
//                 <span className='ms-4 '><button className='mt-2 ms-4 Ca1'>Full Time</button></span>
//                 <hr/>
//                 <span><MdOutlineMyLocation/>&nbsp;&nbsp;Lucknow</span><br/>
//                 <span><FaUserPlus/>&nbsp;&nbsp;+2 Openings</span><br/><br/>
//              <Link to='/Apply'>   <center><button className='but2'>View/Apply</button></center></Link>
//             </div>


//             <div className='col-sm-4 Ca ms-2'>
//                 <span>Magento Developer</span>
//                 <span className='ms-5 '><button className='mt-2 ms-5 Ca1'>Full Time</button></span>
//                 <hr/>
//                 <span><MdOutlineMyLocation/>&nbsp;&nbsp;Lucknow</span><br/>
//                 <span><FaUserPlus/>&nbsp;&nbsp;+5 Openings</span><br/><br/>
//                 <Link to='/Magento'>  <center><button className='but2'>View/Apply</button></center>
// </Link>
//             </div>

//             <div className='col-sm-4 Ca ms-2'>
//                 <span>Android Application Developer</span>
//                 <span className='ms-4'><button className='mt-2 ms-4 Ca1'>Full Time</button></span>
//                 <hr/>
//                 <span><MdOutlineMyLocation/>&nbsp;&nbsp;Lucknow</span><br/>
//                 <span><FaUserPlus/>&nbsp;&nbsp;+2 Openings</span><br/><br/>
//                 <Link to='/Android'><center><button className='but2'>View/Apply</button></center>
// </Link>
//             </div>

//             <div className='col-sm-4 Ca ms-2'>
//                 <span>Junior Software Tester</span>
//                 <span className='ms-5 '><button className='mt-2 ms-5 Ca1'>Full Time</button></span>
//                 <hr/>
//                 <span><MdOutlineMyLocation/>&nbsp;&nbsp;Lucknow</span><br/>
//                 <span><FaUserPlus/>&nbsp;&nbsp;+3 Openings</span><br/><br/>
//                 <Link to='/Junior'>
//                 <center><button className='but2'>View/Apply</button></center>

//                 </Link>
//             </div>


//             <div className='col-sm-4 Ca ms-2'>
//                 <span>WordPress Developer</span>
//                 <span className='ms-5'><button className='mt-2 ms-5 Ca1'>Full Time</button></span>
//                 <hr/>
//                 <span><MdOutlineMyLocation/>&nbsp;&nbsp;Lucknow</span><br/>
//                 <span><FaUserPlus/>&nbsp;&nbsp;+5 Openings</span><br/><br/>
//                 <Link to='/WordPress'>
//                 <center><button className='but2'>View/Apply</button></center>

//                 </Link>
//             </div>


//             <div className='col-sm-4 Ca ms-2'>
//                 <span>CI / Laravel / CakePHP Developer</span>
//                 <span className='ms-4 '><button className='mt-2 ms-4 Ca1'>Full Time</button></span>
//                 <hr/>
//                 <span><MdOutlineMyLocation/>&nbsp;&nbsp;Lucknow</span><br/>
//                 <span><FaUserPlus/>&nbsp;&nbsp;+5 Openings</span><br/><br/>
//                 <Link to ='/Cl'>
//                 <center><button className='but2'>View/Apply</button></center>

//                 </Link>
//             </div>
        
//             <div className='col-sm-4 Ca ms-2'>
//                 <span>Human Resource Manager</span>
//                 <span className='ms-5 '><button className='mt-2 ms-5 Ca2'>Part Time</button></span>
//                 <hr/>
//                 <span><MdOutlineMyLocation/>&nbsp;&nbsp;Lucknow</span><br/>
//                 <span><FaUserPlus/>&nbsp;&nbsp;+1 Openings</span><br/><br/>
//                 <Link to='/Human'>                <center><button className='but2'>View/Apply</button></center>
// </Link>
//             </div>

//         </div>
//          </div>
//         <div className='col-sm-1'></div>
//         </div>
//        </div>
//     </>
//   );
// }



import React from 'react'
import "../styles/Career.css";
import { MdOutlineMyLocation } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import {RxCheck} from 'react-icons/rx';

import { Link } from 'react-router-dom';


const handleTrainerClick = () => {
    const trainerForm = document.querySelector('#rigs1');
    const trainerForm1 = document.querySelector('#rigs2');
    const trainerForm2 = document.querySelector('#rigs3');
    const trainerForm3 = document.querySelector('#rigs4');
    const trainerForm4 = document.querySelector('#rigs5');
    const trainerForm5 = document.querySelector('#rigs6');
    const trainerForm6 = document.querySelector('#rigs7');

    trainerForm.style.display = 'none';
    trainerForm1.style.display = 'none';
    trainerForm2.style.display = 'block';
    trainerForm3.style.display = 'none';
    trainerForm4.style.display = 'none';
    trainerForm5.style.display = 'none';
    trainerForm6.style.display = 'none';
  };

  const handleTrainerClicks = () => {
    const trainerForm = document.querySelector('#rigs1');
    const trainerForm1 = document.querySelector('#rigs2');
    const trainerForm2 = document.querySelector('#rigs3');
    const trainerForm3 = document.querySelector('#rigs4');
    const trainerForm4 = document.querySelector('#rigs5');
    const trainerForm5 = document.querySelector('#rigs6');
    const trainerForm6 = document.querySelector('#rigs7');

    trainerForm.style.display = 'block';
    trainerForm1.style.display = 'none';
    trainerForm2.style.display = 'none';
    trainerForm3.style.display = 'none';
    trainerForm4.style.display = 'none';
    trainerForm5.style.display = 'none';
    trainerForm6.style.display = 'none';
  };
  const handleTrainerClickss = () => {
    const trainerForm = document.querySelector('#rigs1');
    const trainerForm1 = document.querySelector('#rigs2');
    const trainerForm2 = document.querySelector('#rigs3');
    const trainerForm3 = document.querySelector('#rigs4');
    const trainerForm4 = document.querySelector('#rigs5');
    const trainerForm5 = document.querySelector('#rigs6');
    const trainerForm6 = document.querySelector('#rigs7');

    trainerForm.style.display = 'none';
    trainerForm1.style.display = 'none';
    trainerForm2.style.display = 'none';
    trainerForm3.style.display = 'none';
    trainerForm4.style.display = 'none';
    trainerForm5.style.display = 'none';
    trainerForm6.style.display = 'block';
  };


  const handleTrainerClicksq = () => {
    const trainerForm = document.querySelector('#rigs1');
    const trainerForm1 = document.querySelector('#rigs2');
    const trainerForm2 = document.querySelector('#rigs3');
    const trainerForm3 = document.querySelector('#rigs4');
    const trainerForm4 = document.querySelector('#rigs5');
    const trainerForm5 = document.querySelector('#rigs6');
    const trainerForm6 = document.querySelector('#rigs7');

    trainerForm.style.display = 'none';
    trainerForm1.style.display = 'none';
    trainerForm2.style.display = 'none';
    trainerForm3.style.display = 'block';
    trainerForm4.style.display = 'none';
    trainerForm5.style.display = 'none';
    trainerForm6.style.display = 'none';
  };


  
  const handleTrainerClicksp = () => {
    const trainerForm = document.querySelector('#rigs1');
    const trainerForm1 = document.querySelector('#rigs2');
    const trainerForm2 = document.querySelector('#rigs3');
    const trainerForm3 = document.querySelector('#rigs4');
    const trainerForm4 = document.querySelector('#rigs5');
    const trainerForm5 = document.querySelector('#rigs6');
    const trainerForm6 = document.querySelector('#rigs7');

    trainerForm.style.display = 'none';
    trainerForm1.style.display = 'block';
    trainerForm2.style.display = 'none';
    trainerForm3.style.display = 'none';
    trainerForm4.style.display = 'block';
    trainerForm5.style.display = 'block';
    trainerForm6.style.display = 'none';
  };
  

  const handle = () => {
    const trainerForm = document.querySelector('#rigs1');
    const trainerForm1 = document.querySelector('#rigs2');
    const trainerForm2 = document.querySelector('#rigs3');
    const trainerForm3 = document.querySelector('#rigs4');
    const trainerForm4 = document.querySelector('#rigs5');
    const trainerForm5 = document.querySelector('#rigs6');
    const trainerForm6 = document.querySelector('#rigs7');

    trainerForm.style.display = 'block';
    trainerForm1.style.display = 'block';
    trainerForm2.style.display = 'block';
    trainerForm3.style.display = 'block';
    trainerForm4.style.display = 'block';
    trainerForm5.style.display = 'block';
    trainerForm6.style.display = 'block';
  };
  
export default function Career() {
  return (
    <>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-sm-12 Ctop1'>
        <span className='ms-5'><a href='/'>Home</a> / Career</span><br/>
        <h3 className='ms-5 mt-2'>Career</h3>
        </div>
      </div>
      <div className='row py-4'>
        <div className='col-sm-1'></div>
        <div className='col-sm-10'>
        <div className='row'>
            <div className='col-sm-12 mt-4'>
                <center>
               <b  className='mt-5' style={{fontSize:"25px",marginTop:"40px",fontFamily:"Castellar"}}>Why Work at XTeam</b> 
               <div className='role'></div>
                </center>
            </div>
        </div>

        <div className='row mt-5'>
            <div className='col-sm-12'>
                <center>
                    <p style={{textAlign:"justify"}}>It is the <b>TEAM</b>  who make good companies great. At  <b>XTeam</b>, we always try to ensure that our <b>Team</b>  Members have access to the best learning
                    and growth opportunities. Working for <b>XTeam</b>  brings exciting perks, flexibility, recognition and opportunities for learning.
                    Some of the main benefits, which <b> XTeam</b> members enjoy are:

                    </p>
                </center>
                <div className='row'>
                    <div className='col-sm-6'>
                    <RxCheck className='icnes mt-1'/>     Friendly Work Environment<br/>
                    <RxCheck className='icnes mt-1'/>     Work-Life Balance<br/>
                    <RxCheck className='icnes mt-1'/>     Courses and sessions for grooming knowledge<br/>
                    <RxCheck className='icnes mt-1'/>     Child Allowance<br/>
                    </div>
                    <div className='col-sm-6'>
                    <RxCheck className='icnes mt-1'/>     Exposure To A Global Clientele
<br/>
                    <RxCheck className='icnes mt-1'/>     Fun / Knowledge Sharing activities every month
<br/>
                    <RxCheck className='icnes mt-1'/>     Free Complementary Lunch
<br/>
                    <RxCheck className='icnes mt-1'/>    Exclusive Benefits for Female Team Members
<br/>
                    </div>
                </div>
            </div>
            <div className='row mt-5'>
                <div className='col-sm-2'></div>
                <div className='col-sm-8'>
                <center>
               <b  className='mt-5' style={{fontSize:"25px",marginTop:"40px",fontFamily:"Castellar"}}>Current Openings
</b>
                <div className='role'></div>
                </center>
                <div className='row mt-5'>
                    <div className='col-sm-12 '>
                        <button className='but ms-2' onClick={handle}>All</button>
                        <button className='but12 ms-2'  onClick={handleTrainerClick}>Mobile Development</button>
                        <button className='but23 ms-2' onClick={handleTrainerClicks}>Marketing</button>
                        <button className='but3 ms-2'   onClick={handleTrainerClickss}>Human resource</button>
                        <button className='but4 ms-2 '  onClick={handleTrainerClicksq}>QA</button>
                        <button className='but5 ms-2'   onClick={handleTrainerClicksp}>Web Development</button>

                    </div>
                </div>
                </div>
                <div className='col-sm-2'></div>
            </div>
        </div>
        

        <div className='row mt-5'>
            <div className='col-sm-4 Ca  ' id='rigs1'>
                <span>Business Development Executive</span>
                <span className='ms-1 '><button className='mt-2 ms-4 Ca1'>Full Time</button></span>
                <hr/>
                <span><MdOutlineMyLocation/>&nbsp;&nbsp;Lucknow</span><br/>
                <span><FaUserPlus/>&nbsp;&nbsp;+2 Openings</span><br/><br/>
             <Link to='/Apply'>   <center><button className='but22'>View/Apply</button></center></Link>
            </div>


            <div className='col-sm-4 Ca' id='rigs2'>
                <span>Magento Developer</span>
                <span className='ms-5 '><button className='mt-2 ms-5 Ca1'>Full Time</button></span>
                <hr/>
                <span><MdOutlineMyLocation/>&nbsp;&nbsp;Lucknow</span><br/>
                <span><FaUserPlus/>&nbsp;&nbsp;+5 Openings</span><br/><br/>
                <Link to='/Magento'>  <center><button className='but22'>View/Apply</button></center>
</Link>
            </div>

            <div className='col-sm-4 Ca' id='rigs3'>
                <span>Android Application Developer</span>
                <span className='ms-4'><button className='mt-2 ms-4 Ca1'>Full Time</button></span>
                <hr/>
                <span><MdOutlineMyLocation/>&nbsp;&nbsp;Lucknow</span><br/>
                <span><FaUserPlus/>&nbsp;&nbsp;+2 Openings</span><br/><br/>
                <Link to='/Android'><center><button className='but22'>View/Apply</button></center>
</Link>
            </div>

            <div className='col-sm-4 Ca'id='rigs4'>
                <span>Junior Software Tester</span>
                <span className='ms-5 '><button className='mt-2 ms-5 Ca1'>Full Time</button></span>
                <hr/>
                <span><MdOutlineMyLocation/>&nbsp;&nbsp;Lucknow</span><br/>
                <span><FaUserPlus/>&nbsp;&nbsp;+3 Openings</span><br/><br/>
                <Link to='/Junior'>
                <center><button className='but22'>View/Apply</button></center>

                </Link>
            </div>


            <div className='col-sm-4 Ca' id='rigs5'>
                <span>WordPress Developer</span>
                <span className='ms-5' style={{button:'fixed'}}><button className='mt-2 ms-5 Ca1'>Full Time</button></span>
                <hr/>
                <span><MdOutlineMyLocation/>&nbsp;&nbsp;Lucknow</span><br/>
                <span><FaUserPlus/>&nbsp;&nbsp;+5 Openings</span><br/><br/>
                <Link to='/WordPress'>
                <center><button className='but22'>View/Apply</button></center>

                </Link>
            </div>


            <div className='col-sm-4 Ca' id='rigs6'>
                <span>CI / Laravel / CakePHP Developer</span>
                <span className='ms-2 '><button className='mt-2 ms-4 Ca1'>Full Time</button></span>
                <hr/>
                <span><MdOutlineMyLocation/>&nbsp;&nbsp;Lucknow</span><br/>
                <span><FaUserPlus/>&nbsp;&nbsp;+5 Openings</span><br/><br/>
                <Link to ='/Cl'>
                <center><button className='but22'>View/Apply</button></center>

                </Link>
            </div>
        
            <div className='col-sm-4 Ca' id='rigs7'>
                <span>Human Resource Manager</span>
                <span className='ms-2 '><button className='mt-2 ms-5 Ca2 text-light'>Part Time</button></span>
                <hr/>
                <span><MdOutlineMyLocation/>&nbsp;&nbsp;Lucknow</span><br/>
                <span><FaUserPlus/>&nbsp;&nbsp;+1 Openings</span><br/><br/>
                <Link to='/Human'><center><button className='but22'>View/Apply</button></center>
</Link>
            </div>

        </div>
         </div>
        <div className='col-sm-1'></div>
        </div>
       </div>
    </>
  );
}