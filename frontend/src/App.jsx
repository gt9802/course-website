import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Landing from "./components/Landing";
import AddCourse from './components/AddCourse';
import Register from './components/Register';
import ShowCourses from './components/ShowCourses';
import Course from './components/Course';
import Appbar from './components/Appbar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from './config';

function App() {
    const [userEmail, setUserEmail] = useState(null);
    const Init = async ()=>{
        const res = await axios.get(`${BASE_URL}/admin/me`,{
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token'),
                "Content-Type": "application/json"
            }
        })
        setUserEmail(res.data.username);
    }

    useEffect(()=>{
        Init();
    },[]);

    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "#eeee"

        }}>
        <Router>
            <Appbar userEmail={userEmail} setUserEmail={setUserEmail} />
            <Routes>
                <Route path="/" element={<Landing userEmail={userEmail}/>} />
                <Route path="/login" element={<Login setUserEmail={setUserEmail}/>} />
                <Route path="/register" element={<Register setUserEmail={setUserEmail} />} />
                <Route path="/addCourse" element={<AddCourse />} />
                <Route path="/courses" element={<ShowCourses />} />
                <Route path="/course/:courseId" element={<Course />} />
            </Routes>
        </Router>
        </div>
        
    );
}

export default App;