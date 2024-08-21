import './App.css';
import Header from './Header/MainHeader/Header.jsx'
import Footer from './Footer/Footer.jsx'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ComponentHeader from './ForHeaderCompany/ComponentHeader/ComponentHeader.jsx'
import About from './OtherComponent/About/About.jsx'
import Services from './OtherComponent/Services/Services.jsx';

function App() {
  return (
    
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<ComponentHeader/>} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      <Footer/>
      
      
    </Router> 
    
  );
}

export default App;
