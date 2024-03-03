import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          {/* <Routes>
            <Route path="/" element={<Home />} />
          </Routes> */}
      </div>
    </Router>
  );
}

export default App;
