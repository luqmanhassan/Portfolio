import {Grid, Button} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';

export default function Footer() {
  return (
    <Grid
      item
      container
      direction="column"
      align="center"
      sx={{
        py: '100px',
      }}
    >
      <Button
        sx={{
          color: 'white',
          backgroundColor: 'secondary.main',
          px: '20px',
          mx: 'auto',
        }}
        size="large"
        startIcon={<WorkIcon />}
        variant="contained"
        href="https://drive.google.com/file/d/17M3CQpv1hJBR0ElggzqFk1KmiXu_H38x/view?usp=sharing"
        target="_blank"
      >
        Resume
      </Button>
    </Grid>
  );
}
