import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Stack } from '@mui/material';
import { DeleteFilled, EyeFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';


function createData(date, violation,vehicleNo,location, status, actions) {
  return { date, violation,vehicleNo,location, status, actions };
}

const tfldata = [
  {
    date:'11/02/2025',
    type:'wrongSide',
    vehicleNo:'KA01PK1234',
    location:'Alkola circle',
    FineStatus:'Paid',
    violationStatus:'Violation verified',
    vehicleImg:'https://static.toiimg.com/thumb/msid-56962707,imgsize-97507,width-400,height-225,resizemode-72/56962707.jpg',
    vehicleNoPlateImg:'https://www.businessleague.in/wp-content/uploads/2022/10/Traffic-Challan-Rules.jpg',
    locationA:'Circuit House',
    locationAImg:'',
    locationBImg:'',
    AvgvehicleSpeed:'60',
    ViolatedSpeedDifference:'50',
  },
  {
    date:'12/02/2025',
    type:'NoHelmet',
    vehicleNo:'KA01PK1244',
    location:'Court circle',
    status:'Not Paid',
    violationStatus:'Not verified',
    vehicleImg:'https://static.toiimg.com/thumb/msid-56962707,imgsize-97507,width-400,height-225,resizemode-72/56962707.jpg',
    vehicleNoPlateImg:'https://www.businessleague.in/wp-content/uploads/2022/10/Traffic-Challan-Rules.jpg',
    locationA:'Circuit House',
    locationAImg:'',
    locationBImg:'',
    AvgvehicleSpeed:'60',
    ViolatedSpeedDifference:'50',
  },
  {
    date:'11/02/2025',
    type:'tripleRide',
    vehicleNo:'KA01PK1234',
    location:'Chowki circle',
    FineStatus:'Paid',
    violationStatus:'Violation verified',
    vehicleImg:'https://static.toiimg.com/thumb/msid-56962707,imgsize-97507,width-400,height-225,resizemode-72/56962707.jpg',
    vehicleNoPlateImg:'https://www.businessleague.in/wp-content/uploads/2022/10/Traffic-Challan-Rules.jpg',
    locationA:'Circuit House',
    locationAImg:'',
    locationBImg:'',
    AvgvehicleSpeed:'60',
    ViolatedSpeedDifference:'50',
  },
  {
    date:'15/02/2025',
    type:'SignalJump',
    vehicleNo:'KA01PK2334',
    location:'Jail circle',
    FineStatus:'Paid',
    violationStatus:'violation verified',
    vehicleImg:'https://static.toiimg.com/thumb/msid-56962707,imgsize-97507,width-400,height-225,resizemode-72/56962707.jpg',
    vehicleNoPlateImg:'https://www.businessleague.in/wp-content/uploads/2022/10/Traffic-Challan-Rules.jpg',
    locationA:'Circuit House',
    locationAImg:'',
    locationBImg:'',
    AvgvehicleSpeed:'60',
    ViolatedSpeedDifference:'50',
  },
  {
    date:'11/02/2025',
    type:'No Parking',
    vehicleNo:'KA01PK1289',
    location:'60 Feet road',
    FineStatus:'Not Paid',
    violationStatus:'violation Not Verified',
    vehicleImg:'https://static.toiimg.com/thumb/msid-56962707,imgsize-97507,width-400,height-225,resizemode-72/56962707.jpg',
    vehicleNoPlateImg:'https://www.businessleague.in/wp-content/uploads/2022/10/Traffic-Challan-Rules.jpg',
    locationA:'Circuit House',
    locationAImg:'',
    locationBImg:'',
    AvgvehicleSpeed:'60',
    ViolatedSpeedDifference:'50',
  }
];

const rows = [
  createData('11/02/2025', 'OverSpeed','KA14HP1234', 'JG', 'Paid'),
  createData('11/02/2025', 'NoHelmet','KA14HP1534', 'JG', 'Paid'),
  createData('11/02/2025', 'TripleRide','KA14HP1264', 'JG', 'Paid'),
  createData('11/02/2025', 'WrongSide','KA14HP1264', 'JG', 'Paid'),
  createData('11/02/2025', 'WrongSide','KA14HP1238', 'JG', 'Paid'),
  createData('11/02/2025', 'WrongSide','KA14HP1221', 'JG', 'Paid'),


];

const BasicTable =() => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Violation-Type</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Vehicle No</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell align="right" sx={{color:'red'}}>{row.violation}</TableCell>
              <TableCell align="right">{row.location}</TableCell>
              <TableCell align="right">{row.vehicleNo}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">
                <Stack direction='row' spacing={2}> 
                  <Link to="/dashboard/violations-details" style={{textDecoration:'none'}}><EyeFilled/></Link> 
                  <DeleteFilled/>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


export default BasicTable;