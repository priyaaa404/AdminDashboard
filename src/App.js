// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import CssBaseline from '@mui/material/CssBaseline';
// import { Box, Toolbar } from '@mui/material';
// import Sidebar from './components/sidebar';
// import Navbar from './components/Navbar';
// import Dashboard from './pages/Dashboard';
// import Tables from './pages/Tables';
// import Charts from './pages/Charts';
// import Calendar from './pages/Calendar';
// import Kanban from './pages/Kanban';
// import { useTheme } from './themes';

// const drawerWidth = 240;

// function App() {
//   const { theme, toggleTheme } = useTheme();

//   const appTheme = createTheme({
//     ...theme,
//     components: {
//       MuiDrawer: {
//         styleOverrides: {
//           paper: {
//             backgroundColor: theme.palette.primary.main,
//             color: theme.palette.primary.contrastText,
//           },
//         },
//       },
//     },
//   });

//   return (
//     <ThemeProvider theme={appTheme}>
//       <CssBaseline />
//       <Router>
//         <Box sx={{ display: 'flex' }}>
//           <Navbar toggleTheme={toggleTheme} drawerWidth={drawerWidth} />
//           <Sidebar drawerWidth={drawerWidth} />
//           <Box
//             component="main"
//             sx={{
//               flexGrow: 1,
//               p: 3,
//               width: { sm: `calc(100% - ${drawerWidth}px)` },
//               ml: { sm: `${drawerWidth}px` },
//               mt: ['48px', '56px', '64px'],
//               backgroundColor: theme.palette.background.default,
//             }}
//           >
//             <Toolbar />
//             <Routes>
//               <Route path="/" element={<Dashboard />} />
//               <Route path="/tables" element={<Tables />} />
//               <Route path="/charts" element={<Charts />} />
//               <Route path="/calendar" element={<Calendar />} />
//               <Route path="/kanban" element={<Kanban />} />
//             </Routes>
//           </Box>
//         </Box>
//       </Router>
//     </ThemeProvider>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Toolbar } from '@mui/material';
import Sidebar from './components/sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Tables from './pages/Tables';
import Charts from './pages/Charts';
import Calendar from './pages/Calendar';
import Kanban from './pages/Kanban';
import { useTheme } from './themes';

const drawerWidth = 240;

function App() {
  const { theme, toggleTheme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const appTheme = createTheme({
    ...theme,
    components: {
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex' }}>
          <Navbar 
            toggleTheme={toggleTheme} 
            drawerWidth={drawerWidth} 
            toggleSidebar={toggleSidebar}
            isSidebarOpen={isSidebarOpen}
          />
          <Sidebar 
            drawerWidth={drawerWidth} 
            isOpen={isSidebarOpen}
            toggleDrawer={toggleSidebar}
          />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: { xs: '100%', sm: `calc(100% - ${isSidebarOpen ? drawerWidth : appTheme.spacing(7)}px)` },
              ml: { xs: 0, sm: isSidebarOpen ? `${drawerWidth}px` : `${appTheme.spacing(7)}px` },
              mt: ['48px', '56px', '64px'],
              backgroundColor: theme.palette.background.default,
              transition: appTheme.transitions.create(['margin', 'width'], {
                easing: appTheme.transitions.easing.sharp,
                duration: appTheme.transitions.duration.leavingScreen,
              }),
            }}
          >
            <Toolbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/tables" element={<Tables />} />
              <Route path="/charts" element={<Charts />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/kanban" element={<Kanban />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;