import * as React from 'react';
import { AppBar, TitlePortal } from 'react-admin';
import { Box, IconButton, Typography, Avatar, Menu, MenuItem } from '@mui/material';
import { AccountCircle, Notifications } from '@mui/icons-material';

export const MyAppBar = (props) => {
    // States for managing the profile menu
    const [anchorEl, setAnchorEl] = React.useState(null);

    // Open profile menu
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // Close profile menu
    const handleProfileMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar color="primary">
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                {}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h6" color="inherit">
                        Farmers Market Admin
                    </Typography>
                </Box>

                {/* Right Side - User Avatar, Notifications, Profile */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {/* Notifications Icon */}
                    <IconButton color="inherit" sx={{ marginRight: 2 }}>
                        <Notifications />
                    </IconButton>

                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleProfileMenuClose}
                        PaperProps={{
                            elevation: 4,
                            sx: {
                                minWidth: 180,
                                padding: '10px',
                            },
                        }}
                    >
                        <MenuItem onClick={handleProfileMenuClose}>My Profile</MenuItem>
                        <MenuItem onClick={handleProfileMenuClose}>Logout</MenuItem>
                    </Menu>
                </Box>
            </Box>
        </AppBar>
    );
};
