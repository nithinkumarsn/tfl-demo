import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Image from 'assets/images/vehicles/locAsmall.jpg';
import Tra1 from 'assets/images/vehicles/locABig.jpg';



import { PlusCircleOutlined } from '@ant-design/icons';
import { Button,Typography,TextField } from '@mui/material';



const ViolationsDetails =() =>{
return(
    <>
    <h1 style={{width:'50%'}}>Violation Details</h1>
      <Grid container spacing={2}>
     
     <Grid item xs={12} md={6}>
        <Box sx={{textAlign:'left',marginBottom:'20px'}}>
            <img className='img img-center text-center border rounded' src={Image} width={200} height={100}/>
        </Box>
        <Box sx={{ width: '100%',display:'flex' }}>
      <Stack spacing={3}>
        <h3>Vehicle No: </h3>
        <h3>Date: </h3>
        <h3>Violation Type: </h3>
        <br/>
        <h3>Location A/Gate: </h3>
        <h3>Time And Speed at A/Gate: </h3>
        <h3>Location B/Gate: </h3>
        <h3>Time And Speed at B/Gate: </h3>
        <h3>Average Vehicle Speed </h3>
        <h3>Time taken in minutes </h3>
      </Stack>
      <Stack spacing={3} sx={{marginLeft:'30px'}}>
        <h3 style={{color:'red'}}>KA02MG0212</h3>
        <h3>02/22/2024</h3>
        <h3 style={{color:'red'}}>Over Speed
            <br/>
            <span style={{color:'green',fontSize:'14px'}}><PlusCircleOutlined /> Add more violations</span>
        </h3>
        <Typography variant='h5' fontWeight={'bold'} color={'green'} >Alkola Circle, Shivamogga, Karnataka 577204</Typography>
        <Typography variant='h5' fontWeight={'bold'} color={'red'} >Time: 12:30 PM And Vehicle Speed 100 Km/hr</Typography>
        
        <Typography variant='h5' fontWeight={'bold'} color={'green'} >Ayanur Circle, Shivamogga, Karnataka 577204</Typography>
        <Typography variant='h5' fontWeight={'bold'} color={'red'} >Time: 12:40 PM And Vehicle Speed 120 Km/hr</Typography>
        <Typography variant='h5' fontWeight={'bold'} color={'red'} > Avg Speed 120 Km/hr</Typography>
        <Typography variant='h5' fontWeight={'bold'} color={'red'} >10 min</Typography>
        
      </Stack>
   
    </Box>
    <Box sx={{ '& button': { m: 1 } }}>
          <>
            <Button variant="contained" color="success" size="small">Verification</Button>
          </>
          <>
            <Button variant="contained" color='secondary' size="small">Invalidate</Button>
          </>

        </Box>

        <Grid item spacing={3}>
          <Typography variant="subtitle1" >
              Remarks
            </Typography>
            <TextField
              style={{ width: "90%" }}
              variant="outlined"
              onChange={(e) => setValue(e.target.value)}  
              label="Add Remarks"
            >
           
            </TextField>

            <>
            <Button sx={{mt:2}} variant="contained" color="success" size="large">Verify</Button>
          </>
          </Grid>
     </Grid>
     <Grid item xs={12} md={6} sx={{mt:-4}}>
     <Box sx={{textAlign:'left',marginBottom:'20px'}}>
            <img className='img img-center text-center border rounded' src={Tra1} width={'100%'} height={300}/>
            <h3 style={{color:'blueviolet'}}>Image Captured  in: Alkola,shimaga. at : 12:30 PM 23/01/2026 </h3>
        </Box>
        <Box sx={{textAlign:'left',marginBottom:'20px'}}>
            <img className='img img-center text-center border rounded' src={Tra1} width={'100%'} height={300}/>
            <h3 style={{color:'blueviolet'}}>Image Captured  in: Ayanur,shimaga. at : 12:40 PM 23/01/2026 </h3>
        </Box>
     </Grid>
 </Grid>
    </>
  
)

}


export default ViolationsDetails;