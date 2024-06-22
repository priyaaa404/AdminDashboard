
// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, useTheme } from '@mui/material';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import TableChartIcon from '@mui/icons-material/TableChart';
// import BarChartIcon from '@mui/icons-material/BarChart';
// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import ViewKanbanIcon from '@mui/icons-material/ViewKanban';

// const Sidebar = ({ drawerWidth }) => {
//   const theme = useTheme();
//   const location = useLocation();

//   const menuItems = [
//     { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
//     { text: 'Tables', icon: <TableChartIcon />, path: '/tables' },
//     { text: 'Charts', icon: <BarChartIcon />, path: '/charts' },
//     { text: 'Calendar', icon: <CalendarTodayIcon />, path: '/calendar' },
//     { text: 'Kanban', icon: <ViewKanbanIcon />, path: '/kanban' },
//   ];

//   return (
//     <Drawer
//       variant="permanent"
//       sx={{
//         width: drawerWidth,
//         flexShrink: 0,
//         [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
//       }}
//     >
//       <Toolbar />
//       <List>
//         {menuItems.map((item) => (
//           <ListItem
//             button
//             key={item.text}
//             component={Link}
//             to={item.path}
//             selected={location.pathname === item.path}
//             sx={{
//               color: theme.palette.primary.contrastText,
//               '&.Mui-selected': {
//                 backgroundColor: theme.palette.primary.dark,
//               },
//               '&:hover': {
//                 backgroundColor: theme.palette.primary.light,
//               },
//             }}
//           >
//             <ListItemIcon sx={{ color: theme.palette.primary.contrastText }}>{item.icon}</ListItemIcon>
//             <ListItemText primary={item.text} />
//           </ListItem>
//         ))}
//       </List>
//     </Drawer>
//   );
// };

// export default Sidebar;



// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, useTheme, IconButton, Box } from '@mui/material';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import TableChartIcon from '@mui/icons-material/TableChart';
// import BarChartIcon from '@mui/icons-material/BarChart';
// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import ViewKanbanIcon from '@mui/icons-material/ViewKanban';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import MenuIcon from '@mui/icons-material/Menu';

// const Sidebar = ({ drawerWidth }) => {
//   const theme = useTheme();
//   const location = useLocation();
//   const [isOpen, setIsOpen] = useState(true);

//   const menuItems = [
//     { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
//     { text: 'Tables', icon: <TableChartIcon />, path: '/tables' },
//     { text: 'Charts', icon: <BarChartIcon />, path: '/charts' },
//     { text: 'Calendar', icon: <CalendarTodayIcon />, path: '/calendar' },
//     { text: 'Kanban', icon: <ViewKanbanIcon />, path: '/kanban' },
//   ];

//   const toggleDrawer = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <Drawer
//         variant="permanent"
//         open={isOpen}
//         sx={{
//           width: isOpen ? drawerWidth : theme.spacing(7),
//           flexShrink: 0,
//           '& .MuiDrawer-paper': {
//             width: isOpen ? drawerWidth : theme.spacing(7),
//             overflowX: 'hidden',
//             transition: theme.transitions.create('width', {
//               easing: theme.transitions.easing.sharp,
//               duration: theme.transitions.duration.enteringScreen,
//             }),
//             boxSizing: 'border-box',
//             backgroundColor: theme.palette.primary.main,
//           },
//         }}
//       >
//         <Toolbar
//           sx={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'flex-end',
//             padding: theme.spacing(0, 1),
//           }}
//         >
//           <IconButton onClick={toggleDrawer} sx={{ color: theme.palette.primary.contrastText }}>
//             {isOpen ? <ChevronLeftIcon /> : <MenuIcon />}
//           </IconButton>
//         </Toolbar>
//         <List>
//           {menuItems.map((item) => (
//             <ListItem
//               button
//               key={item.text}
//               component={Link}
//               to={item.path}
//               selected={location.pathname === item.path}
//               sx={{
//                 minHeight: 48,
//                 justifyContent: isOpen ? 'initial' : 'center',
//                 px: 2.5,
//                 color: theme.palette.primary.contrastText,
//                 '&.Mui-selected': {
//                   backgroundColor: theme.palette.primary.dark,
//                 },
//                 '&:hover': {
//                   backgroundColor: theme.palette.primary.light,
//                 },
//               }}
//             >
//               <ListItemIcon
//                 sx={{
//                   minWidth: 0,
//                   mr: isOpen ? 3 : 'auto',
//                   justifyContent: 'center',
//                   color: theme.palette.primary.contrastText,
//                 }}
//               >
//                 {item.icon}
//               </ListItemIcon>
//               <ListItemText primary={item.text} sx={{ opacity: isOpen ? 1 : 0 }} />
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//     </Box>
//   );
// };

// export default Sidebar;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  IconButton, 
  useTheme, 
  Box
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TableChartIcon from '@mui/icons-material/TableChart';
import BarChartIcon from '@mui/icons-material/BarChart';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';

const Sidebar = ({ isOpen, toggleDrawer, drawerWidth }) => {
  const theme = useTheme();
  const location = useLocation();

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
    { text: 'Tables', icon: <TableChartIcon />, path: '/tables' },
    { text: 'Charts', icon: <BarChartIcon />, path: '/charts' },
    { text: 'Calendar', icon: <CalendarTodayIcon />, path: '/calendar' },
    { text: 'Kanban', icon: <ViewKanbanIcon />, path: '/kanban' },
  ];

  return (
    <Drawer
      variant="permanent"
      open={isOpen}
      sx={{
        width: isOpen ? drawerWidth : theme.spacing(7),
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: isOpen ? drawerWidth : theme.spacing(7),
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
          boxSizing: 'border-box',
          backgroundColor: theme.palette.primary.main,
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          padding: theme.spacing(0, 1),
          ...theme.mixins.toolbar,
        }}
      >
        <IconButton onClick={toggleDrawer} sx={{ color: theme.palette.primary.contrastText }}>
          <ChevronLeftIcon />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            component={Link}
            to={item.path}
            selected={location.pathname === item.path}
            sx={{
              minHeight: 48,
              justifyContent: isOpen ? 'initial' : 'center',
              px: 2.5,
              color: theme.palette.primary.contrastText,
              '&.Mui-selected': {
                backgroundColor: theme.palette.primary.dark,
              },
              '&:hover': {
                backgroundColor: theme.palette.primary.light,
              },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: isOpen ? 3 : 'auto',
                justifyContent: 'center',
                color: theme.palette.primary.contrastText,
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} sx={{ opacity: isOpen ? 1 : 0 }} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;