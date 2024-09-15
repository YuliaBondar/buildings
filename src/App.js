import './App.css';
import Header from './Header/MainHeader/Header.jsx'
import Footer from './Footer/Footer.jsx'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ComponentHeader from './ForHeaderCompany/ComponentHeader/ComponentHeader.jsx'
import About from './OtherComponent/About/About.jsx'
import Services from './OtherComponent/Services/Services.jsx';
import Gallery from './OtherComponent/Gallery/Gallery.jsx';
import Contact from './OtherComponent/Contact/YouData.jsx';
import Story from './OtherComponent/Story/Story.jsx';
import News from './OtherComponent/News/News.jsx';
import { useState, useEffect } from 'react';

function App() {
  const [text, setText] = useState('');

  useEffect(() => {
    //Извлекается значение savedText из localStorage с помощью localStorage.getItem('savedText').
    const savedText = localStorage.getItem('savedText');
    if (savedText) {
      //Если savedText существует (не равно null), вызывается функция setText(savedText), чтобы установить состояние text на это значение
      setText(savedText);
    }
  }, []);
  return (
    
      <Router>
      <Header/>
        <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<ComponentHeader text={text} />} />
        <Route path="/about" element={<About text={text} />} />
        <Route path="/services" element={<Services text={text} />} />
        <Route path="/gallery" element={<Gallery text={text} />} />
        <Route path="/contact" element={<Contact text={text} />} />
        <Route path="/story" element={<Story text={text} />} />
        <Route path="/news" element={<News text={text} />} />
        </Routes>
      <Footer/>
      
      
    </Router> 
    
  );
}

export default App;
