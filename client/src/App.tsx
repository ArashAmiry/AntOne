import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './Home';
import Footer from './components/Footer';
import Mixer from './Mixer';

function App() {
  return (
    <div style={{backgroundColor: "#F0F0F3"}}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='mix' element={<Mixer />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
