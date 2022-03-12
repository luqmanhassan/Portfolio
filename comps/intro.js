import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {Typography, Grid, Button, ButtonGroup, Chip} from '@mui/material';
import Image from 'next/image';

import image from '../public/images/cartoon.png';
export default function Intro() {
  return (
    <Grid item container direction="column" align="center">
      <Typography variant="h2" sx={{textAlign: 'center', mt: '50px'}}>
        Luqman Hassan
      </Typography>
      <Typography variant="h5" sx={{textAlign: 'center', mb: '50px'}}>
        Web developer based in Seattle, WA
      </Typography>

      <div>
        <Image id="profile" src={image} width={300} height={300} alt="me" />
      </div>
      <div>
        <ButtonGroup sx={{my: '50px'}}>
          <Button
            sx={{
              color: 'secondary.main',
              px: '20px',
            }}
            variant="contained"
            size="large"
            startIcon={<GitHubIcon />}
            href="https://github.com/luqmanhassan"
            target="_blank"
          >
            Github
          </Button>
          <Button
            sx={{
              color: 'white',
              backgroundColor: 'secondary.main',
              px: '20px',
            }}
            size="large"
            variant="contained"
            startIcon={<EmailTwoToneIcon />}
            href="mailto:reallookmanlook@gmail.com"
            target="_blank"
          >
            Email
          </Button>
          <Button
            sx={{
              color: 'secondary.main',
              px: '20px',
            }}
            variant="contained"
            size="large"
            startIcon={<LinkedInIcon />}
            href="https://www.linkedin.com/in/luqman-hassan/"
            target="_blank"
          >
            LinkedIn
          </Button>
        </ButtonGroup>
      </div>

      <div m="50px">
        <Chip
          label="Hardworking"
          variant="outlined"
          sx={{
            animationName: 'movingchips',
            animationDelay: '2s',
            animationDuration: '10s',
            animationIterationCount: 'infinite',
            animationDirection: 'reverse',
            animationTimingFunction: 'ease-in-out',
          }}
        />
        <Chip
          label="Professional"
          variant="outlined"
          sx={{
            animationName: 'movingchips',
            animationDelay: '4s',
            animationDuration: '10s',
            animationIterationCount: 'infinite',
            animationDirection: 'reverse',
            animationTimingFunction: 'ease-in-out',
          }}
        />
        <Chip
          label="Trustworthy"
          variant="outlined"
          sx={{
            animationName: 'movingchips',
            animationDelay: '6s',
            animationDuration: '10s',
            animationIterationCount: 'infinite',
            animationDirection: 'reverse',
            animationTimingFunction: 'ease-in-out',
          }}
        />
        <Chip
          label="Creative"
          variant="outlined"
          sx={{
            animationName: 'movingchips',
            animationDelay: '6s',
            animationDuration: '10s',
            animationIterationCount: 'infinite',
            animationDirection: 'normal',
            animationTimingFunction: 'ease-in-out',
          }}
        />
        <Chip
          label="Dependable"
          variant="outlined"
          sx={{
            animationName: 'movingchips',
            animationDelay: '4s',
            animationDuration: '10s',
            animationIterationCount: 'infinite',
            animationDirection: 'normal',
            animationTimingFunction: 'ease-in-out',
          }}
        />
        <Chip
          label="Flexible"
          variant="outlined"
          sx={{
            animationName: 'movingchips',
            animationDelay: '2s',
            animationDuration: '10s',
            animationIterationCount: 'infinite',
            animationDirection: 'normal',
            animationTimingFunction: 'ease-in-out',
          }}
        />
      </div>
    </Grid>
  );
}
