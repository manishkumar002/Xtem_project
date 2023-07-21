import React from 'react'
import { BiCurrentLocation } from 'react-icons/bi';
import { BsFillPersonPlusFill} from 'react-icons/bs';
import { FaBriefcase} from 'react-icons/fa';

function Cl() {
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
        <div className='col-sm-10 business1'>
            <center>
                <h5 className='mt-3' style={{fontFamily:"Segoe UI Black"}}>
                CI / LARAVEL / CAKEPHP DEVELOPER

</h5>
                <hr/>
            </center>
            <div className='row'>
                <div className='col-sm-4'>
                    <center>
                    <BiCurrentLocation/>Lucknow
                    </center>
                </div>
                <div className='col-sm-4'>
                    <center>
                   < BsFillPersonPlusFill/> 5 Openings

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
                <ul>
    <li>Good understanding of PHP and Object-oriented programming paradigm, MVC architecture
</li>

<li>Ability to develop custom functionality & customize existing functionality



</li>
<li>Should have problem solving, prioritizing tasks, multi-tasking abilities


</li>
<li>Should be able to understand and handle tasks independently.


.</li>
<li>Working knowledge of GIT, Composer


    <li>
    Basic Knowledge of JavaScript, CSS, Web Services


    </li>
</li>
                </ul>
                Desired Skills:
                <hr/>
                <ul>
                    <li>
                    Good Communication Skills

                    </li>
                    <li>
                    Strong learning capability

                    </li>
                
             
                </ul>

                </div>
                <div className='col-sm-6'>
                Apply Online:
                <hr/>
                <from>
                    <div className='row mt-4'>
                        <div className='col-sm-6'>
                        <input type='text' className='form-control' placeholder='Name'/>
                        </div>
                        <div className='col-sm-6'>
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

export default Cl;