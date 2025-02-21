import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { IconButton, TextField, MenuItem, Box, Typography, Grid } from '@mui/material';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from 'dayjs';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { tflViolations } from './data';
import { Link } from 'react-router-dom';

const columns = [
  { field: 'date', headerName: 'Date', width: 150 },
  { field: 'vehicleNo', headerName: 'Vehicle No', width: 150 },
  { field: 'violationType', headerName: 'Violation Type', width: 150 },
  { field: 'locationA', headerName: 'Location A', width: 150 },
  { field: 'locationB', headerName: 'Location B', width: 150 },
  { field: 'averageVehicleSpeed', headerName: 'Avg Speed', width: 150 },
  { field: 'timeTaken', headerName: 'Time Taken', width: 150 },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 150,
    renderCell: (params) => (
      <>
        <IconButton color="primary">
        <Link to="/dashboard/violations-details"  style={{textDecoration:'none'}}> <VisibilityIcon /></Link>
        </IconButton>
        <IconButton color="secondary">
          <EditIcon />
        </IconButton>
        <IconButton color="error">
          <DeleteIcon />
        </IconButton>
      </>
    ),
  },
];

const tflData = [
    { id: 1, date: '10/02/2025', vehicleNo: 'KA12ER2345', violationType: 'overSpeed', locationA: 'Ayanur', locationB: 'Mudinakoppa', averageVehicleSpeed: '62.5 km/hr', timeTaken: '10 min', status: 'Fine Paid' },
    { id: 2, date: '11/02/2025', vehicleNo: 'KA14FG5678', violationType: 'noHelmet', locationA: 'Mudinakoppa', locationB: 'Kumsi', averageVehicleSpeed: '52.5 km/hr', timeTaken: '10 min', status: 'Violation Proved But Not Paid Fine' },
    { id: 3, date: '12/02/2025', vehicleNo: 'KA10AB1234', violationType: 'overSpeed', locationA: 'Kumsi', locationB: 'Ayanur', averageVehicleSpeed: '82.5 km/hr', timeTaken: '10 min', status: 'Fine Paid' },
    { id: 4, date: '13/02/2025', vehicleNo: 'KA09XY5678', violationType: 'overSpeed', locationA: 'Ayanur', locationB: 'Kumsi', averageVehicleSpeed: '72.5 km/hr', timeTaken: '12 min', status: 'Fine Paid' },
    { id: 5, date: '14/02/2025', vehicleNo: 'KA08LM4321', violationType: 'noHelmet', locationA: 'Mudinakoppa', locationB: 'Ayanur', averageVehicleSpeed: '55.0 km/hr', timeTaken: '15 min', status: 'Violation Proved But Not Paid Fine' },
    { id: 6, date: '15/02/2025', vehicleNo: 'KA11CD9876', violationType: 'overSpeed', locationA: 'Kumsi', locationB: 'Mudinakoppa', averageVehicleSpeed: '80.0 km/hr', timeTaken: '14 min', status: 'Fine Paid' },
    { id: 7, date: '16/02/2025', vehicleNo: 'KA06PQ3456', violationType: 'noHelmet', locationA: 'Davanagere', locationB: 'Chitradurga', averageVehicleSpeed: '60.0 km/hr', timeTaken: '13 min', status: 'Violation Proved But Not Paid Fine' },
    { id: 8, date: '17/02/2025', vehicleNo: 'KA03GH7890', violationType: 'overSpeed', locationA: 'Bangalore', locationB: 'Tumkur', averageVehicleSpeed: '90.0 km/hr', timeTaken: '20 min', status: 'Fine Paid' },
    { id: 9, date: '18/02/2025', vehicleNo: 'KA02EF2345', violationType: 'noHelmet', locationA: 'Mysore', locationB: 'Nanjangud', averageVehicleSpeed: '58.0 km/hr', timeTaken: '11 min', status: 'Violation Proved But Not Paid Fine' },
    { id: 10, date: '19/02/2025', vehicleNo: 'KA07UV5678', violationType: 'overSpeed', locationA: 'Chikmagalur', locationB: 'Kadur', averageVehicleSpeed: '70.0 km/hr', timeTaken: '16 min', status: 'Fine Paid' },
    { id: 11, date: '20/02/2025', vehicleNo: 'KA05JK2345', violationType: 'noHelmet', locationA: 'Hassan', locationB: 'Sakleshpur', averageVehicleSpeed: '54.0 km/hr', timeTaken: '10 min', status: 'Violation Proved But Not Paid Fine' },
    { id: 12, date: '21/02/2025', vehicleNo: 'KA01AB1234', violationType: 'overSpeed', locationA: 'Mangalore', locationB: 'Udupi', averageVehicleSpeed: '88.0 km/hr', timeTaken: '19 min', status: 'Fine Paid' },
    { id: 13, date: '22/02/2025', vehicleNo: 'KA04YZ6789', violationType: 'noHelmet', locationA: 'Hubli', locationB: 'Dharwad', averageVehicleSpeed: '57.0 km/hr', timeTaken: '12 min', status: 'Violation Proved But Not Paid Fine' },
    { id: 14, date: '23/02/2025', vehicleNo: 'KA13OP9876', violationType: 'overSpeed', locationA: 'Belgaum', locationB: 'Gokak', averageVehicleSpeed: '85.0 km/hr', timeTaken: '18 min', status: 'Fine Paid' },
    { id: 15, date: '24/02/2025', vehicleNo: 'KA15MN5432', violationType: 'noHelmet', locationA: 'Gulbarga', locationB: 'Bidar', averageVehicleSpeed: '56.5 km/hr', timeTaken: '17 min', status: 'Violation Proved But Not Paid Fine' }
  ];
const Violations = () => {
  const [filters, setFilters] = useState({
    fromDate: null,
    toDate: null,
    violationType: '',
    status: '',
    location: '',
    vehicleNo: ''
  });

  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const filteredData = tflData.filter((item) => {
    const itemDate = dayjs(item.date, 'DD/MM/YYYY');
    return (
      (!filters.fromDate || itemDate.isAfter(dayjs(filters.fromDate))) &&
      (!filters.toDate || itemDate.isBefore(dayjs(filters.toDate))) &&
      (!filters.violationType || item.violationType.toLowerCase() === filters.violationType.toLowerCase()) &&
      (!filters.status || item.status === filters.status) &&
      (!filters.location || item.locationA.toLowerCase().includes(filters.location.toLowerCase()) || item.locationB.toLowerCase().includes(filters.location.toLowerCase())) &&
      (!filters.vehicleNo || item.vehicleNo.toLowerCase().includes(filters.vehicleNo.toLowerCase()))
    );
  });

  return (
    <Grid container spacing={2} sx={{mt:3}}>
        {/* <Typography variant='maintitle' sx={{flexGrow:1,textAlign:'center'}}>Traffic Violations List</Typography> */}
      <Grid item xs={12} md={3}>
        <Typography variant="subtitle1">From</Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            label="Select Date & Time"
            value={filters.fromDate}
            onChange={(newValue) => handleFilterChange('fromDate', newValue)}
            renderInput={(params) => <TextField {...params} fullWidth />}
          />
        </LocalizationProvider>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>To</Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            label="Select Date & Time"
            value={filters.toDate}
            onChange={(newValue) => handleFilterChange('toDate', newValue)}
            renderInput={(params) => <TextField {...params} fullWidth />}
          />
        </LocalizationProvider>
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography variant="subtitle1">Violations</Typography>
        <TextField select fullWidth value={filters.violationType} onChange={(e) => handleFilterChange('violationType', e.target.value)}>
          <MenuItem value="">All</MenuItem>
          <MenuItem value="overSpeed">Over Speed</MenuItem>
          <MenuItem value="noHelmet">No Helmet</MenuItem>
        </TextField>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>Status</Typography>
        <TextField select fullWidth value={filters.status} onChange={(e) => handleFilterChange('status', e.target.value)}>
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Fine Paid">Fine Paid</MenuItem>
          <MenuItem value="Violation Proved But Not Paid Fine">Violation Proved But Not Paid Fine</MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={12} md={3} >
      <Typography variant="subtitle1" sx={{  }}>Vehicle No</Typography>
        <TextField label="Vehicle No" value={filters.vehicleNo} onChange={(e) => handleFilterChange('vehicleNo', e.target.value)} fullWidth />
      
  
        <Typography variant="subtitle1" sx={{mt:2  }}>Location</Typography>
        <TextField label="Location" value={filters.location} onChange={(e) => handleFilterChange('location', e.target.value)} fullWidth />
      </Grid>

      <Grid item xs={12} md={3}>
   
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid 
        rows={filteredData} 
        columns={columns} 
        pageSize={5} 
        sx={{
          '& .MuiDataGrid-cell': { borderBottom: '1px solid #ddd' },
          '& .MuiDataGrid-columnHeaders': { backgroundColor: '#3f51b5', color: 'gray',fontWeight:'medium' },
          '& .MuiDataGrid-row:nth-of-type(odd)': { backgroundColor: '#e3f2fd' }
        }}
      />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Violations;
