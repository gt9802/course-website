import { Typography, Card,TextField,Button } from "@mui/material";
import React from "react";
import axios from "axios";

import { BASE_URL } from "../config";

import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userState } from "../store/atoms/user";

function Login() {
    const setUserEmail = useSetRecoilState(userState);
    const navigate = useNavigate();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    return <div>
        <div style={{display: "flex", justifyContent:"center" ,marginTop:150}}>
            <Typography variant={"h5"}>Login to Admin Dashboard</Typography>
        </div>
     
        <div style={{display:"flex", justifyContent: "center",marginTop:50}}>
        <Card style={{width:400,padding:10}}>
        <TextField onChange={e => setEmail(e.target.value)} fullWidth={true} variant={"outlined"} type={"text"} label={"email"} style={{marginBottom:10}} />
        <TextField onChange={e => setPassword(e.target.value)} fullWidth={true} variant={"outlined"} type={"password"} label={"password"} style={{marginBottom:10}} /><br />
        <Button onClick={async ()=>{
            const res = await axios.post(`${BASE_URL}/admin/login`,{},{
               headers:{
                username: email,
                password: password,
                'Content-Type':'application/json'
            } 
            })
            let data = res.data
            localStorage.setItem('token', data.token);
            setUserEmail({
                isLoading: false,
                userEmail: email
            });
            navigate("/courses");
            
        }} 
        variant={"contained"}>Signin</Button>
        </Card>
       
        </div>
    </div>
}

export default Login;