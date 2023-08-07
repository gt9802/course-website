import { Box,Button, Grid, Typography, styled } from "@mui/material"
import { red } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

function Appbar() {
    const navigate = useNavigate();
    return ( 
      <Grid container>
          <Grid item xs={12} sx={{display: 'flex', justifyContent:'space-between', alignItems:'center', p:'10px'}}>
            <Typography>Coursera</Typography>
            <Box>
            <Button 
            variant="contained" 
            sx={{marginRight:'6px'}}
            onClick={()=> {navigate("/login")}}
            >
              log in
            </Button>
            <Button 
            variant="contained"
            onClick={()=>{navigate("/signup")}}
            >
              sign up
            </Button>
            </Box>
          </Grid>
      </Grid>
     );
}

export default Appbar;