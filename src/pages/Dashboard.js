// import React from 'react';
// import { Grid, Paper, Typography, Box } from '@mui/material';

// const Dashboard = () => {
//   return (
//     <Box>
//       <Typography variant="h4" gutterBottom>
//         Dashboard
//       </Typography>
//       <Grid container spacing={3}>
//         {['Users', 'Revenue', 'Orders', 'Traffic'].map((title, index) => (
//           <Grid item xs={12} sm={6} md={3} key={index}>
//             <Paper
//               sx={{
//                 p: 2,
//                 display: 'flex',
//                 flexDirection: 'column',
//                 height: 140,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 background: (theme) =>
//                   `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.light} 90%)`,
//                 color: 'white',
//               }}
//             >
//               <Typography variant="h4" component="div">
//                 {Math.floor(Math.random() * 1000)}
//               </Typography>
//               <Typography variant="h6">{title}</Typography>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default Dashboard;
import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography, Box, Icon } from '@mui/material';
import { PeopleAlt, AttachMoney, ShoppingCart, TrendingUp } from '@mui/icons-material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const [stats, setStats] = useState([
    { title: 'Users', value: 0, icon: <PeopleAlt />, color: '#3f51b5' },
    { title: 'Revenue', value: 0, icon: <AttachMoney />, color: '#4caf50' },
    { title: 'Orders', value: 0, icon: <ShoppingCart />, color: '#f44336' },
    { title: 'Traffic', value: 0, icon: <TrendingUp />, color: '#ff9800' }
  ]);

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    const fetchData = () => {
      const newStats = stats.map(stat => ({
        ...stat,
        value: Math.floor(Math.random() * 1000)
      }));
      setStats(newStats);

      // Update chart data
      setChartData(prev => [
        ...prev,
        {
          name: new Date().toLocaleTimeString(),
          users: newStats[0].value,
          revenue: newStats[1].value,
          orders: newStats[2].value,
          traffic: newStats[3].value
        }
      ].slice(-10)); // Keep only last 10 data points
    };

    fetchData(); // Initial fetch
    const interval = setInterval(fetchData, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 140,
                justifyContent: 'center',
                alignItems: 'center',
                background: stat.color,
                color: 'white',
                transition: 'all 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: 3,
                },
              }}
            >
              <Icon sx={{ fontSize: 40, mb: 1 }}>{stat.icon}</Icon>
              <Typography variant="h4" component="div">
                {stat.value.toLocaleString()}
              </Typography>
              <Typography variant="h6">{stat.title}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      
      <Box sx={{ mt: 4, height: 300 }}>
        <Typography variant="h5" gutterBottom>
          Real-time Data
        </Typography>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="users" stroke="#3f51b5" />
            <Line type="monotone" dataKey="revenue" stroke="#4caf50" />
            <Line type="monotone" dataKey="orders" stroke="#f44336" />
            <Line type="monotone" dataKey="traffic" stroke="#ff9800" />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default Dashboard;