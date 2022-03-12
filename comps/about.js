import React from 'react';
import {
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function About() {
  return (
    <Grid
      item
      container
      sx={{
        py: '30px',
      }}
      id="about"
    >
      <Grid container item direction="column" align="center" sx={{mb: '20px'}}>
        <Typography variant="h3">About Me </Typography>
      </Grid>

      <Grid item sx={{mx: 'auto'}}>
        <Accordion sx={{bgcolor: 'secondary.main', color: 'primary.main'}}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Brief Introduction</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Results driven web developer who is able to work well
              independently or in a team to provide quality software solutions.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>My Commitment</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Upon employment, I am fully commited to working hard to bringing
              value to your team.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{bgcolor: 'secondary.main', color: 'primary.main'}}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>My Intrests</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              In my off time I like to hone my 2d & 3d animation skills.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
}
