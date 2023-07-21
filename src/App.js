
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from "./components/pages/Header";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Portfolio from "./components/pages/Portfolio";
import Career from "./components/pages/Career";
import Contact from "./components/pages/Contact";
import Nfooter from "./components/pages/Nfooter";
import Footer from "./components/pages/Footer";
import Cl from   './components/pages/Cl';
import WordPress from './components/pages/WordPress';
import Junior from   './components/pages/Junior';
import Magento from   './components/pages/Magento';
import Human from   './components/pages/Human';
import Apply from   './components/pages/Apply';
import Android from './components/pages/Android ';



function App() {
  return (
    <>
        <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/career" element={<Career/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/Cl" element={<Cl/>}/>
        <Route path="/WordPress" element={<WordPress/>}/>
        <Route path="/Junior" element={<Junior/>}/>
        <Route path="/Human" element={<Human/>}/>
        <Route path="/Apply" element={<Apply/>}/>
        <Route path="/Magento" element={<Magento/>}/>
        <Route path="/Android" element={<Android/>}/>
      </Routes>
      <br/><br/>
      <Footer/>
      <Nfooter/>
       </BrowserRouter> 
    </>
  );
}

export default App;
