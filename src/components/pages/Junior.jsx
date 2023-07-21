
import React from 'react'
import { BiCurrentLocation } from 'react-icons/bi';
import { BsFillPersonPlusFill} from 'react-icons/bs';
import { FaBriefcase} from 'react-icons/fa';

function Junior() {
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
        <div className='col-sm-10 business4'>
            <center>
                <h5 className='mt-3' style={{fontFamily:"Segoe UI Black"}}> JUNIOR SOFTWARE TESTER
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
                   < BsFillPersonPlusFill/> 3 Openings

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
                <li>
                High attention to detail and a focus on fact-based decision making.
                </li>
                <li>
                Analyze requirements and provide a solution in terms of test
                approach and design, suggested tools etc.

                </li>
                <li>
                Prepare test plans, develop test cases and execute tests.

                </li>
                <li>
                Work closely with developers on identifying, designing or enhancing existing areas where test efforts can be reduced

                </li>
              </ul>
                Desired Skills:
                <hr/>
                <ul>
                    <li>
                    Good Communication Skill
                    </li>
                    <li>
                    Good Convincing power
                    </li>
                    <li>
Experience: Minimum 2 Years

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

export default Junior;