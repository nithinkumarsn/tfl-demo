import React, { Component, useState } from 'react'
import BasicTable from './DataGridTable';
import { Box, TextField, Typography, Grid, Button, FormControl } from '@mui/material'
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import MenuItem from '@mui/material/MenuItem';



const Violations = () => {


  const [age, setAge] = useState(0);
  const [value, setValue] = useState(null);

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <Grid className='grid-main' container >

      <Grid item xs="12" md="3" >
        <Grid item>
          <Typography variant="subtitle1">
            From
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
             style={{padding:0,margin:0,width:'100%'}}
              label="Select Date & Time"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item sx={{ marginTop: 2 }}>
          <Typography variant="subtitle1" >
            To
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              label="Select Date & Time"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </LocalizationProvider>
        </Grid>
        <Box sx={{ '& button': { m: 1 } }}>
          <>
            <Button variant="contained" color="warning" size="small">Reset</Button>
          </>
          <>
            <Button variant="contained" color='success' size="small">Filter</Button>
          </>

        </Box>

      </Grid>

      <Grid item xs="12" md="3">
          <Grid item>
          <Typography variant="subtitle1" >
              Violations
            </Typography>
            <TextField
              style={{ width: "90%" }}
              variant="outlined"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              select
              label="ALL"
            >
              <MenuItem key={1} value="all">
                All
              </MenuItem>
              <MenuItem key={2} value="WrongLane">
                Wrong Lane/side
              </MenuItem>
              <MenuItem key={2} value="NoHelmet">
                Without Helmet
              </MenuItem>
              <MenuItem key={2} value="UnderAge">
                No DL / Under age
              </MenuItem>
              <MenuItem key={2} value="NoInssurance">
                No Vehicle and PA innsurance
              </MenuItem>
              <MenuItem key={2} value="OverSpeed">
                Over Speed
              </MenuItem>
              <MenuItem key={2} value="trippes">
                Triple Riding
              </MenuItem>
              <MenuItem key={2} value="HitAndRun">
                Hit And Run
              </MenuItem>
              <MenuItem key={2} value="NoSeatBelt">
                Without Seat Belt
              </MenuItem>
              <MenuItem key={2} value="NoHeadLight">
                Without Head Light
              </MenuItem>
              <MenuItem key={2} value="NoParking">
                No Parking 
              </MenuItem>
              <MenuItem key={2} value="SignalJump">
                Signal Jump
              </MenuItem>
            </TextField>
          </Grid>
          <Grid item sx={{ marginTop: 2 }}>
          <Typography variant="subtitle1" >
              Status
            </Typography>
            <TextField
              style={{ width: "90%" }}
              variant="outlined"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              select
              label="Select Status"
            >
              <MenuItem key={1} value="Paid">
                Fine Paid
              </MenuItem>
              <MenuItem key={2} value="Violation Validated">
                Violation Validated & sent fine letter
              </MenuItem>
              <MenuItem key={2} value="Violation Proved But Not Paid Fine">
              Violation Proved But Not Paid Fine
              </MenuItem>
              <MenuItem key={2} value="In Court">
              In Court
              </MenuItem>
            </TextField>
          </Grid>
         
      </Grid>

      <Grid item xs="12" md="3">
          <Grid item>
          <Typography variant="subtitle1" >
              Location/Gate
            </Typography>
            <TextField
              style={{ width: "90%" }}
              variant="outlined"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              select
              label="Select Gate"
            >
           <MenuItem key={1} value="all">
                All
              </MenuItem>
              <MenuItem key={1} value="BSC">
                Bus Stand Circle
              </MenuItem>
              <MenuItem key={2} value="TB">
                Tunga Bridge 
              </MenuItem>
              <MenuItem key={3} value="JG">
                Joythi Garden
              </MenuItem>
              <MenuItem key={4} value="NB">
                Nandi Bunk
              </MenuItem>
              <MenuItem key={6} value="SR">
               Savalanga Road
              </MenuItem>
              <MenuItem key={7} value="CC">
               Court Circle
              </MenuItem>
              <MenuItem key={8} value="DC">
               DVS Circle
              </MenuItem>
            </TextField>
          </Grid>
          <Grid item sx={{ marginTop: 2 }}>
          <Typography variant="subtitle1" >
              Vehicle No
            </Typography>
            <TextField
              style={{ width: "90%" }}
              variant="outlined"
              value={value}
              onChange={(e) => setValue(e.target.value)}
          
              label="Vehicle No"
            >
            
            </TextField>
          </Grid>
         
      </Grid>

      {/* <Grid item xs="12" md="3">
          <Grid item>
          <Typography variant="subtitle1" >
              Lane
            </Typography>
            <TextField
              style={{ width: "90%" }}
              variant="outlined"
              value={value}
              onChange={(e) => setValue(e.target.value)}
             
              label="Select Lane"
            >
             
            </TextField>
          </Grid>
          <Grid item sx={{ marginTop: 2 }}>
          <Typography variant="subtitle1" >
              Speed (Km/hr)
            </Typography>
            <TextField
              style={{ width: "90%" }}
              variant="outlined"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              select
              label="All"
            >
              <MenuItem key={1} value="test">
                Test 1
              </MenuItem>
              <MenuItem key={2} value="test2">
                Test 2
              </MenuItem>
            </TextField>
          </Grid>
         
      </Grid> */}
      <Box>
        <BasicTable/>
      </Box>
   </Grid>



  )
}

export default Violations;