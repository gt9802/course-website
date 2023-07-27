import { Card, Grid } from "@mui/material";
import { useEffect, useState} from "react"
import { useParams } from "react-router-dom";
import { Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import {Loading} from "./Loading";
import { BASE_URL } from "../config.js";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { courseState } from "../store/atoms/course";
import { imageLinkState, isLoadingState, priceState, titleState, courseDetail } from "../store/selectors/courseSelector";

function Course() {
    let { courseId } = useParams();
    const setCourse = useSetRecoilState(courseState);
    const isLoading = useRecoilValue(isLoadingState);

    const GetCourse = async()=>{
        try{
            const res = await axios.get(`${BASE_URL}/admin/course/${courseId}`, {
                method: "GET",
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            })
            if(res.data.course){
                
                setCourse({
                   isLoading: false,
                   course: res.data.course
                })
            }else{
                setCourse({
                    isLoading: true,
                    course: null
                })
            }
        }catch(e){
            setCourse({
                isLoading: true,
                course: null
            })
        }
    }
    useEffect(() => {
        GetCourse();
    }, []);

    if (isLoading) {
        return <Loading /> 
    }
    return <div>
        <GrayTopper />
        <Grid container>
            <Grid item lg={8} md={12} sm={12}>
                <UpdateCard />
            </Grid>
            <Grid item lg={4} md={12} sm={12}>
                <CourseCard />
            </Grid>
        </Grid>
        </div>
}
function GrayTopper() {
    const title = useRecoilValue(titleState);
    return <div style={{height: 250, background: "#212121", top: 0, width: "100vw", zIndex: 0, marginBottom: -250}}>
        <div style={{ height: 250, display: "flex", justifyContent: "center", flexDirection: "column"}}>
            <div>
                <Typography style={{color: "white", fontWeight: 600}} variant="h3" textAlign={"center"}>
                    {title}
                </Typography>
            </div>
        </div>
    </div>
}

function UpdateCard() {
   const [courseDetail, setCourseDetail] = useRecoilState(courseState)
   const [title, setTitle] = useState(courseDetail.course.title);
   const [description, setDescription] = useState(courseDetail.course.description);
   const [price, setPrice] = useState(courseDetail.course.price);
   const [imageLink, setImageLink] = useState(courseDetail.course.imageLink); 

    return <div style={{display: "flex", justifyContent: "center"}}>
    <Card varint={"outlined"} style={{maxWidth: 600, marginTop: 200}}>
        <div style={{padding: 20}}>
            <Typography style={{marginBottom: 10}}>Update course details</Typography>
            <TextField
                value={title}
                style={{marginBottom: 10}}
                onChange={(e) => {
                    setTitle(e.target.value)
                }}
                fullWidth={true}
                label="Title"
                variant="outlined"
            />

            <TextField
                value={description}
                style={{marginBottom: 10}}
                onChange={(e) => {
                   setDescription(e.target.value)
                }}
                fullWidth={true}
                label="Description"
                variant="outlined"
            />

            <TextField
                value={imageLink}
                style={{marginBottom: 10}}
                onChange={(e) => {
                  setImageLink(e.target.value)
                }}
                fullWidth={true}
                label="Image link"
                variant="outlined"
            />
            <TextField
                value={price}
                style={{marginBottom: 10}}
                onChange={(e) => {
                    setPrice(e.target.value)
                }}
                fullWidth={true}
                label="Price"
                variant="outlined"
            />

            <Button
                variant="contained"
                onClick={async () => {
                    axios.put(`${BASE_URL}/admin/courses/` + courseDetail.course._id, {
                        
                        title: title,
                        description: description,
                        imageLink: imageLink,
                        published: true,
                        price: price
                    }, {
                        headers: {
                            "Content-type": "application/json",
                            "Authorization": "Bearer " + localStorage.getItem("token")
                        }
                    });
                    let updatedCourse = {
                        _id: courseDetail.course._id,
                        title: title,
                        description: description,
                        imageLink: imageLink,
                        price: price
                    };
                    setCourseDetail({
                        isLoading:false,
                        course: updatedCourse
                    });
                }}
            > Update course</Button>
        </div>
    </Card>
</div>
}

function CourseCard() {
    const title = useRecoilValue(titleState);
   
    const imageLink = useRecoilValue(imageLinkState);
    return <div style={{display: "flex",  marginTop: 50, justifyContent: "center", width: "100%"}}>
     <Card style={{
        margin: 10,
        width: 350,
        minHeight: 200,
        borderRadius: 20,
        marginRight: 50,
        paddingBottom: 15,
        zIndex: 2
    }}>
        <img src={imageLink} style={{width: 350}} ></img>
        <div style={{marginLeft: 10}}>
            <Typography variant="h5">{title}</Typography>
            <Price />
        </div>
    </Card>
    </div>
}
function Price() {

    const price = useRecoilValue(priceState);
    return <>
        <Typography variant="subtitle2" style={{color: "gray"}}>
            Price
        </Typography>
        <Typography variant="subtitle1">
            <b>Rs {price} </b>
        </Typography>
    </>
}
export default Course;