import React from 'react';
import ListAltTwoToneIcon from '@mui/icons-material/ListAltTwoTone';
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import BuildTwoToneIcon from '@mui/icons-material/BuildTwoTone';
//import LightModeTwoToneIcon from '@mui/icons-material/LightModeTwoTone';
//import NightlightTwoToneIcon from '@mui/icons-material/NightlightTwoTone';
import {Typography, Button, AppBar, Toolbar, ButtonGroup} from '@mui/material';

export default function Nav() {
  // const [mode, setMode] = useState(true);
  return (
    <AppBar
      sx={{backgroundColor: 'primary.main', py: '10px', px: '30px'}}
      position="sticky"
    >
      <Toolbar
        sx={{
          display: 'flex',
          flexFlow: {
            xs: 'column',
            sm: 'column',
            md: 'row',
            lg: 'row',
            xl: 'row',
          },
          justifyContent: 'space-between',
        }}
      >
        <Typography
          variant="h3"
          color="secondary.main"
          sx={{textAlign: 'center'}}
        >
          L/H
        </Typography>
        <ButtonGroup variant="text">
          <Button
            size="large"
            sx={{color: 'black'}}
            startIcon={<ListAltTwoToneIcon />}
            href="#projects"
          >
            Projects
          </Button>
          <Button
            size="large"
            sx={{color: 'black'}}
            startIcon={<BuildTwoToneIcon />}
            href="#skills"
          >
            Skills
          </Button>
          <Button
            size="large"
            sx={{color: 'black'}}
            startIcon={<PersonTwoToneIcon />}
            href="#about"
          >
            About
          </Button>
          {/*
          <Button
            size="large"
            sx={{color: 'black'}}
            startIcon={
              mode ? <LightModeTwoToneIcon /> : <NightlightTwoToneIcon />
            }
            onClick={() => {
              if (mode == true) {
                setMode(false);
              } else {
                setMode(true);
              }
            }}
          >
            Mode
          </Button>
          */}
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
}
