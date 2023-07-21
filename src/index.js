// import React ,{ useEffect, useState } from 'react';
// import ReactDOM from 'react-dom/client';
// import { HiOutlineMail } from "react-icons/hi";
// import { FcPhoneAndroid } from "react-icons/fc";
// import { BsLinkedin } from "react-icons/bs";
// import { AiFillSkype } from "react-icons/ai";
// import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './App';
// import ScrollToTop from "react-scroll-to-top";
// import './App.css';
// import MoonLoader from 'react-spinners/MoonLoader';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// const [loading, setLoading] = useState(false);

// useEffect(() => {
//   setLoading(true);
//   setTimeout(() => {
//     setLoading(false);
//   }, 5000);
// }, []);
// root.render(
//   <>
//   {loading ? (
//         <div
//           style={{
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             height: '100vh',
//           }}
//         >
//           <MoonLoader color={'#0000ff'} loading={loading} size={100} />
//         </div>
//       ):(
//         <>
//     <ScrollToTop smooth   top='20'  color="black" className='mani' />
//       <div className='row in' style={{height:'50px',lineHeight:'50px'}}>
//         <div className='col-sm-4'><HiOutlineMail/>       <a href='https://mail.google.com/mail/u/0/#inbox' className='call'> info@xteamindia.com</a>
//      <FcPhoneAndroid></FcPhoneAndroid> <a href='tel:919795728885' className='call'> + 919795728885</a> 
//       </div>
//         <div className='col-sm-4'></div>
//         <div className='col-sm-4'>
//           <a href='https://www.linkedin.com/company/xteam-india/'><BsLinkedin className='ms-auto fs-6 text-light'/></a>&nbsp;&nbsp;
//           <AiFillSkype className='fs-5'/>
//         </div>
//       </div>
//       <App />
//       </>
//       )} 
//   </>

// );






import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { HiOutlineMail } from 'react-icons/hi';
import { FcPhoneAndroid } from 'react-icons/fc';
import { BsLinkedin } from 'react-icons/bs';
import { AiFillSkype } from 'react-icons/ai';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from 'react-scroll-to-top';
import Typewriter from 'typewriter-effect';
import MoonLoader from 'react-spinners/MoonLoader';
import App from './App';
import './index.css';
import './App.css';

function Index() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
    
      {loading ? (
        <>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <MoonLoader color={'#0000ff'} loading={loading} size={100} />
          </div>
          <div>
    <h4 className='dilip'>
<Typewriter
options={{
strings: ['XTEAM Consultants India Pvt. Ltd',],
autoStart: true,
loop: true,
}}
/>
</h4>
  </div>
        </>
        
      ) : (
        <>
          <ScrollToTop smooth top={20} color="black"/>
          <div className="row in" >
            <div className="col-sm-4">
              <HiOutlineMail />{' '}
              <a href="https://mail.google.com/mail/u/0/#inbox" className="call">
                info@xteamindia.com
              </a>
              <FcPhoneAndroid></FcPhoneAndroid>{' '}
              <a href="tel:919795728885" className="call">
                +919795728885
              </a>
            </div>
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
              <a href="https://www.linkedin.com/company/xteam-india/">
                <BsLinkedin className="ms-auto fs-6 text-light" />
              </a>
              &nbsp;&nbsp;
              <AiFillSkype className="fs-5" />
            </div>
          </div>
          <App/>

        </>
        
      )}
    </>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));

