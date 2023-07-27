
import { useNavigate } from "react-router-dom";
import {  Typography } from "@mui/material";
import Grid  from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {  useRecoilValue } from "recoil";

import { userEmailState } from "../store/selectors/userEmail";
import { isUserLoadingState } from "../store/selectors/isUserLoading";
import { Loading } from "./Loading";


function Landing() {
    const userEmail = useRecoilValue(userEmailState);
    const isUserLoading = useRecoilValue(isUserLoadingState);
    const navigate = useNavigate(); 
    if(isUserLoading){
        return <Loading />
    }
    return(
            <div>
            <Grid container style={{padding: "5vw"}}>
            <Grid item xs={12} md={6} lg={6}>
                <div style={{marginTop: 100}}>
                    <Typography variant={"h2"}>
                        Coursera Admin
                    </Typography>
                    <Typography variant={"h5"}>
                        A place to learn, earn and grow
                    </Typography>
                    {!userEmail && <div style={{display: "flex", marginTop: 20}}>
                        <div style={{marginRight: 10}}>
                            <Button
                                size={"large"}
                                variant={"contained"}
                                onClick={() => {
                                    navigate("/register")
                                }}
                            >Signup</Button>
                        </div>
                        <div>
                            <Button
                                size={"large"}
                                variant={"contained"}
                                onClick={() => {
                                    navigate("/login")
                                }}
                            >Signin</Button>
                        </div>
                    </div>}
                </div>
                <div>
                </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6}  style={{marginTop: 20}}>
                <img src={"/class.jpeg"} width={"100%"} />
            </Grid>
        </Grid>
    </div>
        )
    }
    

export default Landing;