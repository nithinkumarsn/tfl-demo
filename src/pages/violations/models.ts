export interface TrafficViolation {
    date: string; // Format: 'DD/MM/YYYY'
    vehicleNo: string;
    violationType: 'overSpeed' | 'wrongLane' | string; // Add more if needed
    locationA: string;
    locationANoPlateImg: string;
    locationAVehicleImg: string;
    locationAVehiclePassTime: string; // Format: 'HH:MM AM/PM'
    locationAVehicleSpeed: string; // Format: 'XX km/hr'
    locationB: string;
    locationBNoPlateImg: string;
    locationBVehicleImg: string;
    locationBVehiclePassTime: string; // Format: 'HH:MM AM/PM'
    locationBVehicleSpeed: string; // Format: 'XX km/hr'
    averageVehicleSpeed: string; // Format: 'XX km/hr'
    timeTaken: string; // Format: 'X min'
  }
  


  export  const tflData: TrafficViolation[] = [
    {
      date: '10/02/2025',
      vehicleNo: 'KA12ER2345',
      violationType: 'overSpeed',
      locationA: 'Ayanur',
      locationANoPlateImg: 'no plate img',
      locationAVehicleImg: 'vehicle img at loc a',
      locationAVehiclePassTime: '12:30 PM',
      locationAVehicleSpeed: '60 km/hr',
      locationB: 'Mudinakoppa',
      locationBNoPlateImg: 'no plate img',
      locationBVehicleImg: 'vehicle img at loc b',
      locationBVehiclePassTime: '12:40 PM',
      locationBVehicleSpeed: '65 km/hr',
      averageVehicleSpeed: '62.5 km/hr',
      timeTaken: '10 min'
    },
    {
      date: '11/02/2025',
      vehicleNo: 'KA14FG5678',
      violationType: 'signalJump',
      locationA: 'Mudinakoppa',
      locationANoPlateImg: 'no plate img',
      locationAVehicleImg: 'vehicle img at loc a',
      locationAVehiclePassTime: '09:15 AM',
      locationAVehicleSpeed: '50 km/hr',
      locationB: 'Kumsi',
      locationBNoPlateImg: 'no plate img',
      locationBVehicleImg: 'vehicle img at loc b',
      locationBVehiclePassTime: '09:25 AM',
      locationBVehicleSpeed: '55 km/hr',
      averageVehicleSpeed: '52.5 km/hr',
      timeTaken: '10 min'
    },
    {
      date: '12/02/2025',
      vehicleNo: 'KA10AB1234',
      violationType: 'overSpeed',
      locationA: 'Kumsi',
      locationANoPlateImg: 'no plate img',
      locationAVehicleImg: 'vehicle img at loc a',
      locationAVehiclePassTime: '02:00 PM',
      locationAVehicleSpeed: '80 km/hr',
      locationB: 'Ayanur',
      locationBNoPlateImg: 'no plate img',
      locationBVehicleImg: 'vehicle img at loc b',
      locationBVehiclePassTime: '02:10 PM',
      locationBVehicleSpeed: '85 km/hr',
      averageVehicleSpeed: '82.5 km/hr',
      timeTaken: '10 min'
    },
    {
      date: '13/02/2025',
      vehicleNo: 'KA22GH6789',
      violationType: 'wrongLane',
      locationA: 'Ayanur',
      locationANoPlateImg: 'no plate img',
      locationAVehicleImg: 'vehicle img at loc a',
      locationAVehiclePassTime: '03:45 PM',
      locationAVehicleSpeed: '40 km/hr',
      locationB: 'Mudinakoppa',
      locationBNoPlateImg: 'no plate img',
      locationBVehicleImg: 'vehicle img at loc b',
      locationBVehiclePassTime: '03:55 PM',
      locationBVehicleSpeed: '45 km/hr',
      averageVehicleSpeed: '42.5 km/hr',
      timeTaken: '10 min'
    },
    {
      date: '14/02/2025',
      vehicleNo: 'KA45KL9012',
      violationType: 'overSpeed',
      locationA: 'Mudinakoppa',
      locationANoPlateImg: 'no plate img',
      locationAVehicleImg: 'vehicle img at loc a',
      locationAVehiclePassTime: '06:10 PM',
      locationAVehicleSpeed: '90 km/hr',
      locationB: 'Kumsi',
      locationBNoPlateImg: 'no plate img',
      locationBVehicleImg: 'vehicle img at loc b',
      locationBVehiclePassTime: '06:20 PM',
      locationBVehicleSpeed: '95 km/hr',
      averageVehicleSpeed: '92.5 km/hr',
      timeTaken: '10 min'
    },
    {
      date: '15/02/2025',
      vehicleNo: 'KA32MN3456',
      violationType: 'signalJump',
      locationA: 'Kumsi',
      locationANoPlateImg: 'no plate img',
      locationAVehicleImg: 'vehicle img at loc a',
      locationAVehiclePassTime: '07:30 AM',
      locationAVehicleSpeed: '55 km/hr',
      locationB: 'Ayanur',
      locationBNoPlateImg: 'no plate img',
      locationBVehicleImg: 'vehicle img at loc b',
      locationBVehiclePassTime: '07:40 AM',
      locationBVehicleSpeed: '60 km/hr',
      averageVehicleSpeed: '57.5 km/hr',
      timeTaken: '10 min'
    },
    {
      date: '16/02/2025',
      vehicleNo: 'KA01XY7890',
      violationType: 'wrongLane',
      locationA: 'Ayanur',
      locationANoPlateImg: 'no plate img',
      locationAVehicleImg: 'vehicle img at loc a',
      locationAVehiclePassTime: '11:20 AM',
      locationAVehicleSpeed: '35 km/hr',
      locationB: 'Mudinakoppa',
      locationBNoPlateImg: 'no plate img',
      locationBVehicleImg: 'vehicle img at loc b',
      locationBVehiclePassTime: '11:30 AM',
      locationBVehicleSpeed: '40 km/hr',
      averageVehicleSpeed: '37.5 km/hr',
      timeTaken: '10 min'
    },
    {
      date: '17/02/2025',
      vehicleNo: 'KA65PQ2345',
      violationType: 'overSpeed',
      locationA: 'Mudinakoppa',
      locationANoPlateImg: 'no plate img',
      locationAVehicleImg: 'vehicle img at loc a',
      locationAVehiclePassTime: '04:05 PM',
      locationAVehicleSpeed: '75 km/hr',
      locationB: 'Kumsi',
      locationBNoPlateImg: 'no plate img',
      locationBVehicleImg: 'vehicle img at loc b',
      locationBVehiclePassTime: '04:15 PM',
      locationBVehicleSpeed: '80 km/hr',
      averageVehicleSpeed: '77.5 km/hr',
      timeTaken: '10 min'
    },
    {
      date: '18/02/2025',
      vehicleNo: 'KA18AB5678',
      violationType: 'signalJump',
      locationA: 'Kumsi',
      locationANoPlateImg: 'no plate img',
      locationAVehicleImg: 'vehicle img at loc a',
      locationAVehiclePassTime: '01:30 PM',
      locationAVehicleSpeed: '65 km/hr',
      locationB: 'Ayanur',
      locationBNoPlateImg: 'no plate img',
      locationBVehicleImg: 'vehicle img at loc b',
      locationBVehiclePassTime: '01:40 PM',
      locationBVehicleSpeed: '70 km/hr',
      averageVehicleSpeed: '67.5 km/hr',
      timeTaken: '10 min'
    },
    {
      date: '19/02/2025',
      vehicleNo: 'KA08CD9012',
      violationType: 'wrongLane',
      locationA: 'Ayanur',
      locationANoPlateImg: 'no plate img',
      locationAVehicleImg: 'vehicle img at loc a',
      locationAVehiclePassTime: '08:00 AM',
      locationAVehicleSpeed: '30 km/hr',
      locationB: 'Mudinakoppa',
      locationBNoPlateImg: 'no plate img',
      locationBVehicleImg: 'vehicle img at loc b',
      locationBVehiclePassTime: '08:10 AM',
      locationBVehicleSpeed: '35 km/hr',
      averageVehicleSpeed: '32.5 km/hr',
      timeTaken: '10 min'
    }
  ];
  