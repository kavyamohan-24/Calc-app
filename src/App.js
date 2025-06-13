import logo from './logo.svg';
import './App.css';
import Addition from './components/Addition';
import Subtraction from './components/Subtraction';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>

      <Route path='/' element={<Addition/>}/>
      <Route path='/sub' element={<Subtraction/>}/>

      </Routes>
      
      </BrowserRouter>
    </div>
    
  );
}

export default App;
