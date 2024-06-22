// // import React from 'react';
// // import { AppBar, Toolbar, Typography, IconButton, useTheme } from '@mui/material';
// // import Brightness4Icon from '@mui/icons-material/Brightness4';
// // import Brightness7Icon from '@mui/icons-material/Brightness7';

// // const Navbar = ({ toggleTheme, drawerWidth }) => {
// //   const theme = useTheme();

// //   return (
// //     <AppBar
// //       position="fixed"
// //       sx={{
// //         width: { sm: `calc(100% - ${drawerWidth}px)` },
// //         ml: { sm: `${drawerWidth}px` },
// //       }}
// //     >
// //       <Toolbar>
// //         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
// //           Admin Dashboard
// //         </Typography>
// //         <IconButton onClick={toggleTheme} color="inherit">
// //           {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
// //         </IconButton>
// //       </Toolbar>
// //     </AppBar>
// //   );
// // };

// // export default Navbar;
// import React from 'react';
// import { 
//   AppBar, 
//   Toolbar, 
//   Typography, 
//   IconButton, 
//   useTheme, 
//   Box, 
//   Avatar, 
//   Menu, 
//   MenuItem, 
//   Tooltip 
// } from '@mui/material';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import Badge from '@mui/material/Badge';
// import AccountCircle from '@mui/icons-material/AccountCircle';

// const Navbar = ({ toggleTheme, drawerWidth }) => {
//   const theme = useTheme();
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <AppBar
//       position="fixed"
//       sx={{
//         width: { sm: `calc(100% - ${drawerWidth}px)` },
//         ml: { sm: `${drawerWidth}px` },
//         bgcolor: 'background.default',
//         color: 'text.primary',
//         boxShadow: 1,
//       }}
//     >
//       <Toolbar>
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
//           Admin Dashboard
//         </Typography>
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           <Tooltip title="Toggle theme">
//             <IconButton onClick={toggleTheme} color="inherit" sx={{ mr: 2 }}>
//               {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
//             </IconButton>
//           </Tooltip>
//           <Tooltip title="Notifications">
//             <IconButton color="inherit" sx={{ mr: 2 }}>
//               <Badge badgeContent={4} color="error">
//                 <NotificationsIcon />
//               </Badge>
//             </IconButton>
//           </Tooltip>
//           <Tooltip title="Account settings">
//             <IconButton
//               onClick={handleMenu}
//               color="inherit"
//             >
//               <Avatar sx={{ width: 32, height: 32 }}>
//                 <AccountCircle />
//               </Avatar>
//             </IconButton>
//           </Tooltip>
//           <Menu
//             id="menu-appbar"
//             anchorEl={anchorEl}
//             anchorOrigin={{
//               vertical: 'top',
//               horizontal: 'right',
//             }}
//             keepMounted
//             transformOrigin={{
//               vertical: 'top',
//               horizontal: 'right',
//             }}
//             open={Boolean(anchorEl)}
//             onClose={handleClose}
//           >
//             <MenuItem onClick={handleClose}>Profile</MenuItem>
//             <MenuItem onClick={handleClose}>My account</MenuItem>
//             <MenuItem onClick={handleClose}>Logout</MenuItem>
//           </Menu>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;


// import React, { useState } from 'react';
// import { 
//   AppBar, 
//   Toolbar, 
//   Typography, 
//   IconButton, 
//   useTheme, 
//   Box, 
//   Avatar, 
//   Menu, 
//   MenuItem, 
//   Tooltip 
// } from '@mui/material';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import Badge from '@mui/material/Badge';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import MenuIcon from '@mui/icons-material/Menu';

// const Navbar = ({ toggleTheme, drawerWidth, toggleSidebar, isSidebarOpen }) => {
//   const theme = useTheme();
//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <AppBar
//       position="fixed"
//       sx={{
//         width: { xs: '100%', sm: `calc(100% - ${isSidebarOpen ? drawerWidth : theme.spacing(7)}px)` },
//         ml: { xs: 0, sm: isSidebarOpen ? `${drawerWidth}px` : `${theme.spacing(7)}px` },
//         bgcolor: 'background.default',
//         color: 'text.primary',
//         boxShadow: 1,
//         transition: theme.transitions.create(['margin', 'width'], {
//           easing: theme.transitions.easing.sharp,
//           duration: theme.transitions.duration.leavingScreen,
//         }),
//       }}
//     >
//       <Toolbar>
//         <IconButton
//           color="inherit"
//           aria-label="open drawer"
//           edge="start"
//           onClick={toggleSidebar}
//           sx={{ mr: 2, display: { sm: 'none' } }}
//         >
//           <MenuIcon />
//         </IconButton>
//         <Typography 
//           variant="h6" 
//           component="div" 
//           sx={{ 
//             flexGrow: 1, 
//             fontWeight: 'bold',
//             ml: { xs: 0, sm: isSidebarOpen ? 0 : `${drawerWidth - theme.spacing(7)}px` },
//             transition: theme.transitions.create('margin', {
//               easing: theme.transitions.easing.sharp,
//               duration: theme.transitions.duration.leavingScreen,
//             }),
//           }}
//         >
//           Admin Dashboard
//         </Typography>
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           <Tooltip title="Toggle theme">
//             <IconButton onClick={toggleTheme} color="inherit" sx={{ mr: 2 }}>
//               {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
//             </IconButton>
//           </Tooltip>
//           <Tooltip title="Notifications">
//             <IconButton color="inherit" sx={{ mr: 2 }}>
//               <Badge badgeContent={4} color="error">
//                 <NotificationsIcon />
//               </Badge>
//             </IconButton>
//           </Tooltip>
//           <Tooltip title="Account settings">
//             <IconButton
//               onClick={handleMenu}
//               color="inherit"
//             >
//               <Avatar sx={{ width: 32, height: 32 }}>
//                 <AccountCircle />
//               </Avatar>
//             </IconButton>
//           </Tooltip>
//           <Menu
//             id="menu-appbar"
//             anchorEl={anchorEl}
//             anchorOrigin={{
//               vertical: 'top',
//               horizontal: 'right',
//             }}
//             keepMounted
//             transformOrigin={{
//               vertical: 'top',
//               horizontal: 'right',
//             }}
//             open={Boolean(anchorEl)}
//             onClose={handleClose}
//           >
//             <MenuItem onClick={handleClose}>Profile</MenuItem>
//             <MenuItem onClick={handleClose}>My account</MenuItem>
//             <MenuItem onClick={handleClose}>Logout</MenuItem>
//           </Menu>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
  useTheme, 
  Box, 
  Avatar, 
  Menu, 
  MenuItem, 
  Tooltip 
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ toggleTheme, drawerWidth, toggleSidebar, isSidebarOpen }) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { xs: '100%', sm: `calc(100% - ${isSidebarOpen ? drawerWidth : theme.spacing(7)}px)` },
        ml: { xs: 0, sm: isSidebarOpen ? `${drawerWidth}px` : `${theme.spacing(7)}px` },
        bgcolor: 'background.default',
        color: 'text.primary',
        boxShadow: 1,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={toggleSidebar}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            flexGrow: 1, 
            fontWeight: 'bold',
            ml: { xs: 0, sm: isSidebarOpen ? 0 : `${drawerWidth - theme.spacing(7)}px` },
            transition: theme.transitions.create('margin', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          }}
        >
          Admin Dashboard
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Tooltip title="Toggle theme">
            <IconButton onClick={toggleTheme} color="inherit" sx={{ mr: 2 }}>
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Tooltip>
          <Tooltip title="Notifications">
            <IconButton color="inherit" sx={{ mr: 2 }}>
              <Badge badgeContent={4} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Tooltip>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleMenu}
              color="inherit"
            >
              <Avatar sx={{ width: 32, height: 32 }}>
                <AccountCircle />
              </Avatar>
            </IconButton>
          </Tooltip>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;