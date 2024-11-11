import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

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
          { text: 'Dashboard', path: '/app/dashboard' },
          { text: 'Faculty', path: '/app/faculty' },
          { text: 'Students', path: '/app/students' },
          { text: 'Courses', path: '/app/courses' },
          { text: 'Feedback', path: '/app/feedback' },
          { text: 'Time Table', path: '/app/timetable' },
          { text: 'Assignments', path: '/app/assignments' },
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
