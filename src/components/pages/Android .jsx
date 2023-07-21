
import React from 'react'
import { BiCurrentLocation } from 'react-icons/bi';
import { BsFillPersonPlusFill} from 'react-icons/bs';
import { FaBriefcase} from 'react-icons/fa';

function Android() {
  return(
    <div className='Container-fluid'>
         <div className='row mt-4s'>
        <div className='col-sm-12 Stop'>
        <span className='ms-5'> <a href='/'>Home</a> /Career</span><br/>
        <h3 className='ms-5 mt-2'>Career</h3>
        </div>
      </div>
       <div className='row mt-5'>
       <div className='col-sm-1'></div>
        <div className='col-sm-10 business2'>
            <center>
                <h5 className='mt-3' style={{fontFamily:"Segoe UI Black"}}>ANDROID APPLICATION DEVELOPER 
</h5>
                <hr/>
            </center>
            <div className='row'>
                <div className='col-sm-4'>
                    <center>
                    <BiCurrentLocation/>  Lucknow
                    </center>
                </div>
                <div className='col-sm-4'>
                    <center>
                   < BsFillPersonPlusFill/> 2 Openings

                    </center>
                </div>
                <div className='col-sm-4'>
                    <center>
                <FaBriefcase/>   Full Time
                    </center>
                </div>
            </div>
            <hr/>
            <div className='row'>
                <div className='col-sm-6'>
                Job Description:
                <hr/>
                We have an urgent vacent position for <b>Android Application Developer.</b> 


           <br/>
           <br/>
                Desired Skills:
                <hr/>
                <ul>
                    <li>
                    Java


                    </li>
                    <li>
                    Android
                    </li>
             
                </ul>

                </div>
                <div className='col-sm-6'>
                Apply Online:
                <hr/>
                <from>
                    <div className='row mt-4'>
                        <div className='col-sm-6'>
                        <input type='text' className='form-control' placeholder='Name' style={{margin:'15px auto'}}/>
                        </div>
                        <div className='col-sm-6 py-3'>
                        <input type='text' className='form-control' placeholder='Email'/>
                        </div>
                        </div>
                        <div className='row'>
                        <div className='col-sm-12 mt-3'>
                        <input type='number' className='form-control' placeholder='Phone number'/>
                        </div>  
                        </div>

                        <div class="input-group mb-2 mt-3">
  <input type="file" class="form-control" id="inputGroupFile02"/>
  <label class="input-group-tex bg-primary inp " for="inputGroupFile02" style={{color:'white'}}>Browser</label>
</div>
                    
                  
              <center style={{transform: 'translateY(-10px)'}}>
              <button className='btn btn-primary mt-3 '>Send Massage</button>

              </center>
                </from>
                </div>
             </div>
             </div>
          
        <div className='col-sm-1'> </div>
       </div>
    


    </div>
  )
}

export default Android;