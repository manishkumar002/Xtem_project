import React from 'react'
import { BsFillTelephoneFill} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md';
import {BsLinkedin} from 'react-icons/bs';
import {AiFillSkype} from 'react-icons/ai';

function Fotter() {
  return (
    <div className='Container-fluid'>
        <div className='row footer'>
            <div className='col-sm-2 mt-4'>
                <center>
                    <b >USEFUL LINKS
                    </b>
                    <br/>
                    <br/>
                
                      <p className='Lipo'> > Home</p>  
                      <p className='Lipo'> > About us</p>
                      <p className='Lipo'> > Services</p>
                      <p className='Lipo'> > Portfolio</p>
                      <p className='Lipo'> > Contact</p>
                 
                </center>
            </div>
            <div className='col-sm-3 mt-4'>
                <center>
             <b> OUR SERVICES</b> 
                      <br/>    
                      <br/>        
                      <p className='Lip ml-4'> > Business Consulting
</p>  
                      <p className='Lip'> > Web Design and Development
</p>
                      <p className='Lip'> > Mobile Apps Development
</p>
                      <p className='Lip' > > Marketing
 </p>
                      <p className='Lip'> > Testing Services
</p> 
                </center>
            </div>
            <div className='col-sm-3 mt-4'>
             <center>
             <b>CONTACT US
              </b>
              <br/>
              <br/>
              <p>416/195, Dilaram Baradari, Chaupatiya, Lucknow, Uttar Pradesh 226003, India
</p>        
<b>Phone</b>
 
    <a href='tel:919795728885' className='call'>+919795728885</a>   
<p>
 <b>Email:
</b>
       <a href='https://mail.google.com/mail/u/0/#inbox' className='call'> info@xteamindia.com</a>
       
</p>
             </center>
                </div>   
            <div className='col-sm-4 mt-4'>
<center>
<b>ABOUT XTEAM
</b>
<br/>
<br/>
<p className=''>
We are a team of innovation oriented <br/> 
and highly skilled professionals who <br/>
 always follow latest technology trends to <br/>
 deliver the <b>BEST</b>  and  <b>MOST</b>   <br/>
 AFFORDABLE solutions to their clients.
</p>
<a  href='tel:919795728885'><BsFillTelephoneFill className='icne' /></a>  <a href='https://mail.google.com/mail/u/0/#inbox'> <MdEmail className='icne'/></a>  <AiFillSkype className='icne'/>       <a href='https://www.linkedin.com/company/xteam-india/'> <BsLinkedin className='icne'/></a>  

</center>

            </div>
        </div>
    </div>
  )
}

export default Fotter;