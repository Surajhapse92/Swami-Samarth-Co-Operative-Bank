import Home from './views/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
   <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
        
        </Routes>
      </BrowserRouter>

   </div>
  );
}

export default App;