import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Landing from "./components/Landing";
import AddCourse from './components/AddCourse';
import Register from './components/Register';
import ShowCourses from './components/ShowCourses';
import Course from './components/Course';
import Appbar from './components/Appbar';


function App() {
    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "#eeee"

        }}>
        <Router>
            <Appbar />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/addCourse" element={<AddCourse />} />
                <Route path="/courses" element={<ShowCourses />} />
                <Route path="/course/:courseId" element={<Course />} />
            </Routes>
        </Router>
        </div>
        
    );
}

export default App;