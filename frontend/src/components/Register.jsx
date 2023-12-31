import { Button, Card, TextField, Typography } from "@mui/material";
import React from "react";
import axios from "axios";
import { BASE_URL } from "../config";
import { useNavigate } from "react-router-dom";
import {  useSetRecoilState } from "recoil";
import { userState } from "../store/atoms/user";


function Register() {
    const setUserEmail = useSetRecoilState(userState);
    const navigate = useNavigate();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    return <div>
        <div style={{marginTop:150}}>
        <Typography style={{display:"flex", justifyContent: "center"}} variant={"h5"}>Register to website here</Typography>

        </div>
        <div style={{display:"flex", justifyContent: "center"}}>
        <Card style={{width:400,padding:10}}>
        <TextField onChange={e => setEmail(e.target.value)} fullWidth={true} variant={"outlined"} type={"text"} label={"email"} style={{marginBottom:10}} />
        <TextField onChange={e => setPassword(e.target.value)} fullWidth={true} variant={"outlined"} type={"password"} label={"password"} style={{marginBottom:10}} /><br />
        <Button onClick={async ()=>{
            const res = await axios.post(`${BASE_URL}/admin/signup`,{
                username: email,
                password: password
            })
            let data = res.data;
            localStorage.setItem('token', data.token);
            setUserEmail({
                isLoading: false,
                userEmail: email
            });
            navigate("/courses");
        }} 
        variant={"contained"}>Signup</Button>
        </Card>
       
        </div>
       
    </div>
}

export default Register;