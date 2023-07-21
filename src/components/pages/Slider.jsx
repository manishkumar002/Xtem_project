import React, { useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import AOS from 'aos';
import 'aos/dist/aos.css'

function Slider() {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        })
    }, [])
  return (
    <div className='Container-fluid'>

<Carousel>
      <Carousel.Item>
        <div className='row'>
          <div className='col-sm-12 imgs d-block w-100'>
          <div className=" row rgba">
            <div className='col-sm-12'>
                 <center>
                 <div data-aos="fade-up">
                 <p className="htl">Welcome to   <span style={{color:"blue"}}> Xteam</span>  </p>  
                </div>
              <div data-aos="fade-down">
              <p style={{fontSize:"20px" ,fontFamily:"Castellar",color:"withe"}}>Software Development, Apps Mobility , IT Infrastructure<br/>
              Development
              </p>
              <input type="button" className="w-24 btn btn-primary" value="Read More" style={{ "borderRadius": "5px" }} />
            </div>
           </center>
            </div>
             </div>
          </div>
        </div> 
      </Carousel.Item>


      <Carousel.Item>
      <div className='row'>
          <div className='col-sm-12 imgs2 d-block w-100'>
          <div className="row rgba2">
 <div className='col-sm-12'>
  <center>
    <div data-aos="fade-down">
    <p className="htl1">We develop  <i>tech solutions</i> 
  </p>
  </div> 
  <br/> 
    
    <div data-aos="fade-down">
  <p style={{fontFamily:"Castellar",fontSize:"20px"}}>Do you need Social, Mobile, Analytics or Cloud solutions for your business? Don't hesitate to <br/>
   get no obligation free
     quote from us today. <br/>
     <br/>
     <input type="button" className="w-24 btn btn-primary" value="Read More" style={{ "borderRadius": "5px" }} />
</p>


    </div>
  </center>
  </div>        
                    </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='row'>
          <div className='col-sm-12 imgs3 d-block w-100'>
          <div className=" row rgba3 ">
 <div className='col-sm-12'>
<center>
<div>
    <p className="htl2">Complex Problems?
</p>
<h3>We solve them</h3>
<div>
  <p style={{fontFamily:"Segoe UI Blackssss",fontSize:"20px"}} >Our Experts can help you optimize performance of your work force and <br/>
  utilize business resources fully.<br/>
  <input type="button" className="w-24 btn btn-primary mt-2" value="Read More" style={{ "borderRadius": "5px" }} />

</p>
</div>
  </div>
  </center>
 </div>
                      
                    </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Slider;