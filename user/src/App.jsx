import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Box } from '@mui/material';
import Appbar from './components/Appbar';
import Landing from './components/Landing';
import Signup from './components/Signup';
import Login from './components/Login';
import Courses from './components/Courses';

function App() {
  
  return (
    <Box>
      
      <Router>
        <Appbar />
        <Routes>
          <Route path='/signup' element={<Signup />} /> 
          <Route path='/login' element={<Login />} />
          <Route path='/courses' element={<Courses />} /> 
        </Routes>
      </Router>
    </Box>
  );
    
}

export default App
