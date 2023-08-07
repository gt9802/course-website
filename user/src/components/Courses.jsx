import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../config';
import { Card, CardContent, CardMedia,CardActions, Typography, Button, Grid } from '@mui/material';
import CourseCard from './CourseCard';



function Courses() {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        try{
            axios.get(`${BASE_URL}/user/courses`,{
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                    
                }
            }).then((response)=>{
                console.log(response.data.courses)
                setCourses(response.data.courses);
            })
            
        }catch(error){
            if(error){
                setCourses(null);
            }
        }
   },[]) 

  return (
    <Grid container  direction={'column'} sx={{padding:10}}>
        <Grid item xs={12} container spacing={3} sx={{display: 'flex', justifyContent: 'center'}}>
             
             {courses.map((course)=> <CourseCard course={course}/>)}   
             
        </Grid>
    </Grid>
  )
}

export default Courses