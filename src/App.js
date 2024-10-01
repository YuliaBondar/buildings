import './App.css';
import Header from './pages/MainHeader/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ComponentHeader from './pages/HomePage/ComponentHeader.jsx'
import About from './pages/About/About.jsx'
import Servicess from './pages/Servicess/Services.jsx';
import Gallery from './pages/Gallery/Gallery.jsx';
import Contact from './pages/Contact/YouData.jsx';
import Story from './components/Story/Story.jsx';
import News from './pages/News/News.jsx';
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
        <Route path="/services" element={<Servicess text={text} />} />
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
