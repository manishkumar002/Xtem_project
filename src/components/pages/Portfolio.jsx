// import React from 'react'
// import "../styles/Portfolio.css"
// import { ImLink } from "react-icons/im";
// export default function Portfolio() {
//   return (
//     <>
//     <div className='container-fluid'>
//       <div className='row'>
//         <div className='col-sm-12 Ptop'>
//         <span className='ms-5'>Home / Portfolio</span><br/>
//         <h3 className='ms-5 mt-2'>Portfolio</h3>
//         </div>
//       </div>
//       <div className='row'>
//         <div className='col-sm-4'></div>
//         <div className='col-sm-4 py-5'>
//           <button className='butt' >All</button>
//           <button className='butt1'>Codeigniter</button>
//           <button className='butt2'>Magento</button>
//           <button className='butt3'>WordPres</button>
//         </div>
//         <div className='col-sm-4'></div>
//       </div>
//       <div className='row'>
//         <div className='col-sm-1'></div>
//         <div className='col-sm-10'>
//           <div className='row'>
//             <div className='col-sm-4 Pit1'>
//             <div className='row'>
//               <div className='col-sm-12 p1'>
//                 <center className='fs-4 py-5'>
//                   Poshace <br/>
//                   <b>+   <ImLink/></b>
//                 </center>
//               </div>
//             </div>
//             </div>
         
//             <div className='col-sm-4 Pit2'>
//             <div className='row'>
//               <div className='col-sm-12 p1'>
//                 <center className='fs-4 py-5'>
//                 GLocalShopper <br/>
//                   <b>+   <ImLink/></b>
//                 </center>
//               </div>
//             </div>
//             </div>

//             <div className='col-sm-4 Pit3'>
//             <div className='row'>
//               <div className='col-sm-12 p1'>
//                 <center className='fs-4 py-5'>
//                 GreenzOnline <br/>
//                   <b>+   <ImLink/></b>
//                 </center>
//               </div>
//             </div>
//             </div>

//             <div className='col-sm-4 Pit4'>
//             <div className='row'>
//               <div className='col-sm-12 p1'>
//                 <center className='fs-4 py-5'>
//                 GreenzOnline <br/>
//                   <b>+   <ImLink/></b>
//                 </center>
//               </div>
//             </div>
//             </div>

//             <div className='col-sm-4 Pit5'>
//             <div className='row'>
//               <div className='col-sm-12 p1'>
//                 <center className='fs-4 py-5'>
//                 iLearnings <br/>
//                   <b>+   <ImLink/></b>
//                 </center>
//               </div>
//             </div>
//             </div>

//             <div className='col-sm-4 Pit6'>
//             <div className='row'>
//               <div className='col-sm-12 p1'>
//                 <center className='fs-4 py-5'>
//                Petonly<br/>
//                   <b>+   <ImLink/></b>
//                 </center>
//               </div>
//             </div>
//             </div>
//           </div>
//         </div>
//         <div className='col-sm-1'></div>
//       </div>
//     </div>
//     </>
//   );
// }




import React from 'react';
import "../styles/Portfolio.css";
import { ImLink } from "react-icons/im";

const handle = () => {
  const trainerForm = document.querySelector('#rig');
  const trainerForm1 = document.querySelector('#rig1');
  const trainerForm2 = document.querySelector('#rig2');
  const trainerForm3 = document.querySelector('#rig3');
  const trainerForm4 = document.querySelector('#rig4');
  const trainerForm5 = document.querySelector('#rig5');

  trainerForm.style.display = 'block';
  trainerForm1.style.display = 'block';
  trainerForm2.style.display = 'block';
  trainerForm3.style.display = 'block';
  trainerForm4.style.display = 'block';
  trainerForm5.style.display = 'block';
};

const handleControl = () => {
  const trainerForm = document.querySelector('#rig');
  const trainerForm1 = document.querySelector('#rig1');
  const trainerForm2 = document.querySelector('#rig2');
  const trainerForm3 = document.querySelector('#rig3');
  const trainerForm4 = document.querySelector('#rig4');
  const trainerForm5 = document.querySelector('#rig5');

  trainerForm.style.display = 'none';
  trainerForm1.style.display = 'block';
  trainerForm2.style.display = 'none';
  trainerForm3.style.display = 'none';
  trainerForm4.style.display = 'none';
  trainerForm5.style.display = 'none';
};

const handeMegate = () => {
  const trainerForm = document.querySelector('#rig');
  const trainerForm1 = document.querySelector('#rig1');
  const trainerForm2 = document.querySelector('#rig2');
  const trainerForm3 = document.querySelector('#rig3');
  const trainerForm4 = document.querySelector('#rig4');
  const trainerForm5 = document.querySelector('#rig5');

  trainerForm.style.display = 'block';
  trainerForm1.style.display = 'none';
  trainerForm2.style.display = 'block';
  trainerForm3.style.display = 'block';
  trainerForm4.style.display = 'block';
  trainerForm5.style.display = 'block';
};



const handeWordpres = () => {
  const trainerForm = document.querySelector('#rig');
  const trainerForm1 = document.querySelector('#rig1');
  const trainerForm2 = document.querySelector('#rig2');
  const trainerForm3 = document.querySelector('#rig3');
  const trainerForm4 = document.querySelector('#rig4');
  const trainerForm5 = document.querySelector('#rig5');

  trainerForm.style.display = 'none';
  trainerForm1.style.display = 'none';
  trainerForm2.style.display = 'none';
  trainerForm3.style.display = 'none';
  trainerForm4.style.display = 'none';
  trainerForm5.style.display = 'none';
};

export default function Portfolio() {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-12 Ptop'>
            <span className='ms-5'><a href='/'>Home</a> / Portfolio</span><br/>
            <h3 className='ms-5 mt-2'>Portfolio</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-3'></div>
          <div className='col-sm-5 py-5'>
            <button className='butt' onClick={handle}>All</button>
            <button className='butt1' onClick={handleControl}>Codeigniter</button>
            <button className='butt2' onClick={handeMegate}>Magento</button>
            <button className='butt3'onClick={handeWordpres}>WordPres</button>
          </div>
          <div className='col-sm-4'></div>
        </div>
        <div className='row'>
          <div className='col-sm-1'></div>
          <div className='col-sm-10'>
            <div className='row'>
              <div className='col-sm-4 Pit1 M' id='rig'>
                <div className='row'>
                  <div className='col-sm-12 p1'>
                    <center className='fs-4 py-5'>
                      Poshace <br/>
                      <b>+   <ImLink/></b>
                    </center>
                  </div>
                </div>
              </div>
         
              <div className='col-sm-4 Pit2 M' id='rig1'>
                <div className='row'>
                  <div className='col-sm-12 p1'>
                    <center className='fs-4 py-5'>
                      GLocalShopper <br/>
                      <b>+   <ImLink/></b>
                    </center>
                  </div>
                </div>
              </div>

              <div className='col-sm-4 Pit3 M' id='rig2'>
                <div className='row'>
                  <div className='col-sm-12 p1'>
                    <center className='fs-4 py-5'>
                      GreenzOnline <br/>
                      <b>+   <ImLink/></b>
                    </center>
                  </div>
                </div>
              </div>

              <div className='col-sm-4 Pit4 M' id='rig3'>
                <div className='row'>
                  <div className='col-sm-12 p1'>
                    <center className='fs-4 py-5'>
                      iLearnings <br/>
                      <b>+   <ImLink/></b>
                    </center>
                  </div>
                </div>
              </div>

              <div className='col-sm-4 Pit5 M' id='rig4'>
                <div className='row'>
                  <div className='col-sm-12 p1'>
                    <center className='fs-4 py-5'>
                      Petonly<br/>
                      <b>+   <ImLink/></b>
                    </center>
                  </div>
                </div>
              </div>

              <div className='col-sm-4 Pit6 M' id='rig5'>
                <div className='row'>
                  <div className='col-sm-12 p1'>
                    <center className='fs-4 py-5'>
                      Some Project<br/>
                      <b>+   <ImLink/></b>
                    </center>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-1'></div>
        </div>
      </div>
    </>
  );
}