import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Landing from "./components/Landing";
import AddCourse from './components/AddCourse';
import Register from './components/Register';
import ShowCourses from './components/ShowCourses';
import Course from './components/Course';
import Appbar from './components/Appbar';
import {  useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from './config';
import { userState } from './store/atoms/user';
import {
    RecoilRoot,
    useSetRecoilState,
  } from 'recoil';
function App() {
    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "#eeee"

        }}>
        <RecoilRoot>
        <Router>
            <Appbar />
            <InitUser />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register/>} />
                <Route path="/addCourse" element={<AddCourse />} />
                <Route path="/courses" element={<ShowCourses />} />
                <Route path="/course/:courseId" element={<Course />} />
            </Routes>
        </Router>
        </RecoilRoot>
        </div>
        
    );
}

function InitUser(){
    const setUser = useSetRecoilState(userState);
    const Init = async ()=>{
        try{
            const res = await axios.get(`${BASE_URL}/admin/me`,{
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token'),
                    "Content-Type": "application/json"
                }
            })

            if(res.data.username){
                setUser({
                    isLoading: false,
                    userEmail: res.data.username
                });
            }else{
                setUser({
                    isLoading: false,
                    userEmail: null
                });
            }
        }catch(e){
            setUser({
                isLoading: false,
                userEmail: null
            })
        }
    }

    useEffect(()=>{
        Init();
    },[]);

    return <></>
}


export default App;