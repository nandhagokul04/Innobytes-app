
import './App.css';
import Layout from './components/Layout';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page3 from './components/Page3';
import Page4 from './components/Page4';

function App() {
  return (
    <div className="app">
      <div className='left'>
        <Layout />
      </div>
      <div className='right'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Page1 />} />
            <Route path="/Page2" element={<Page2 />} />
            <Route path="/Page3" element={<Page3 />} />
            <Route path="/Page4" element={<Page4/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
