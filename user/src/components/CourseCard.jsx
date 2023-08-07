import { useState } from 'react';
import { Card,Typography, CardContent, CardActions, Button, CardMedia,  Grid, Box, Tooltip } from '@mui/material'
import CourseModal from './CourseModal'
function CourseCard({course}) {
  return (
   
   <Grid item xs={12} sm={6} lg={4}>
        <Card sx={{ Width: 300, Height: 300 }}
        >
                <CardMedia
                component="img"
                alt="course"
                height="140"
                image={course.imageLink}
              
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {course.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {course.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button  variant="contained" color={"info"}  size="small">buy</Button>
                  
                </CardActions>
            </Card>
    </Grid>
  )
  
}


export default CourseCard