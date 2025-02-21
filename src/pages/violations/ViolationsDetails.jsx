import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { useLocation } from 'react-router-dom';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Typography, TextField } from '@mui/material';

import Image from 'assets/images/vehicles/locAsmall.jpg';
import Tra1 from 'assets/images/vehicles/locABig.jpg';

const ViolationsDetails = () => {
  const location = useLocation();
  console.log('Received Data:', location.state); // ✅ Debugging
const bgCol = '#A9A9A9';
  const rowData = location.state?.rowData;

  return (
    <>
      <h1 style={{ width: '50%' }}>Violation Details</h1>
      <Box>
        {rowData ? (
          <Grid container spacing={2}>
            {/* Left Side - Details */}
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: 'left', marginBottom: '20px' }}>
                <img
                  className="img img-center text-center border rounded"
                  src={rowData.vehicleNoImg}
                  width={200}
                  height={100}
                  alt="Location A"
                />
              </Box>

              <Box sx={{ width: '100%', display: 'flex' }}>
                <Stack spacing={3}>
                  <h3>Vehicle No:</h3>
                  <h3>Date:</h3>
                  <h3>Violation Type:</h3>
                  <h3>Location A/Gate:</h3>
                  {/* <h3>Time And Speed at A/Gate:</h3> */}
                  <h3 >Location B/Gate:</h3>
                  {/* <h3>Time And Speed at B/Gate:</h3> */}
                  <h3 style={{marginTop:'20px'}}>Average Vehicle Speed:</h3>
                  <h3>Time taken in minutes:</h3>
                </Stack>

                <Stack spacing={3} sx={{ marginLeft: '30px' }}>
                  <h3 style={{ }}>{rowData.vehicleNo}</h3>
                  <h3>{rowData.date}</h3>
                  <h3 style={{ color: 'red',textTransform:'uppercase' }} >
                    {rowData.violationType}
                    {/* <br />
                    <span style={{ color: 'green', fontSize: '14px' }}>
                      <PlusCircleOutlined /> Add more violations
                    </span> */}
                  </h3>
                  <Typography variant="h5" fontWeight="bold" >
                    {rowData.locationA}
                  </Typography>
                  {/* <Typography variant="h5" fontWeight="bold" color="red">
                    Time: {rowData.timeA} And Vehicle Speed {rowData.speedA} Km/hr
                  </Typography> */}
                  <Typography variant="h5" fontWeight="bold" >
                    {rowData.locationB}
                  </Typography>
                  {/* <Typography variant="h5" fontWeight="bold" color="red">
                    Time: {rowData.timeB} And Vehicle Speed {rowData.speedB} Km/hr
                  </Typography> */}
                  <Typography variant="h5" fontWeight="bold" >
                    Avg Speed {rowData.averageVehicleSpeed} Km/hr
                  </Typography>
                  <Typography variant="h5" fontWeight="bold" >
                    {rowData.timeTaken} min
                  </Typography>
                </Stack>
              </Box>

              <Box sx={{ '& button': { m: 1 } }}>
                <Button variant="contained" color="success" size="small">
                  Verification
                </Button>
                <Button variant="contained" color="secondary" size="small">
                  Invalidate
                </Button>
              </Box>

              <Grid item spacing={3}>
                <Typography variant="subtitle1">Remarks</Typography>
                <TextField
                  style={{ width: '90%' }}
                  variant="outlined"
                  label="Add Remarks"
                />
                <Button sx={{ mt: 2 }} variant="contained" color="success" size="large">
                  Verify
                </Button>
              </Grid>
            </Grid>

            {/* Right Side - Images */}
            <Grid item xs={12} md={6} sx={{ mt: -4 }}>
              <Box sx={{ textAlign: 'left', marginBottom: '20px' }}>
                <img className="img img-center text-center border rounded" src={rowData.vehicleImg} width={'100%'} height={300} alt="Captured Image A" />
                <h3 style={{ color: 'blueviolet' }}>
                  Image Captured in: {rowData.locationA}, at: {rowData.date}
                </h3>
              </Box>
              <Box sx={{ textAlign: 'left', marginBottom: '20px' }}>
                <img className="img img-center text-center border rounded" src={rowData.vehicleImg} width={'100%'} height={300} alt="Captured Image B" />
                <h3 style={{ color: 'blueviolet' }}>
                  Image Captured in: {rowData.locationB}, at: {rowData.date}
                </h3>
              </Box>
            </Grid>
          </Grid>
        ) : (
          <Typography>No Data</Typography>
        )}
      </Box>
    </>
  );
};

export default ViolationsDetails;
