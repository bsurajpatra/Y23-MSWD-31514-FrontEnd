import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import Dashboard from './Dasboard';
export default function SideDrawer() {
  const headerHeight = 64;
  const footerHeight = 64;

  return (
    <Drawer
      anchor="left"
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          top: `${headerHeight}px`,
          bottom: `${footerHeight}px`,
          position: 'fixed',
          overflowY: 'auto',
          backgroundColor: '#FFFFFF',
          zIndex: 1100,
        },
      }}
    >
      <List sx={{ paddingTop: '16px' }}> 
        {[
          { text: 'Dashboard', path: '/dashboard' },
          { text: 'Faculty', path: '/faculty' },
          { text: 'Students', path: '/students' },
          { text: 'Courses', path: '/courses' },
          { text: 'Feedback', path: '/feedback' },
          { text: 'Time Table', path: '/timetable' },
          { text: 'Assignments', path: '/assignments' },
        ].map((item) => (
          <ListItem
            key={item.text}
            
            component={Link}
            to={item.path}
            sx={{
              backgroundColor: '#393e46',
              color: 'white',
              margin: '4px 0',
              borderRadius: '0', 
              width: '100%',
              height: '50px', 
              '&:hover': {
                backgroundColor: '#393e46', 
              },
              '& + &': {
                borderTop: '0px solid white', 
              },
            }}
          >
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}