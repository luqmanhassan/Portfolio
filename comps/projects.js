import React from 'react';
import {
  Typography,
  Grid,
  Button,
  Card,
  CardActions,
  CardContent,
  ButtonGroup,
  Chip,
} from '@mui/material';

import nft from '../public/images/nft-tracker.png';
import mcranker from '../public/images/mc-rankings.png';
import shoppingcart from '../public/images/shoppingcart.png';
import Image from 'next/image';

export default function Projects() {
  return (
    <Grid
      item
      container
      direction="column"
      align="center"
      py="50px"
      id="projects"
    >
      <Grid item sx={{mb: '20px'}}>
        <Typography variant="h3">Projects</Typography>
      </Grid>
      <Grid
        item
        spacing={6}
        sx={{
          display: 'flex',
          flexFlow: 'column',
          justifyContent: 'space-around',
          flexFlow: {
            xs: 'column',
            sm: 'column',
            md: 'row',
            lg: 'row',
            xl: 'row',
          },
        }}
      >
        <Card sx={{maxWidth: 400, m: '20px auto'}} raised>
          <Image src={mcranker} alt="mcranker" />
          <CardContent>
            <Typography variant="h5">Crypto MarketCap Ranker</Typography>
            <Typography>Ranks the top 100 cryptos by marketcap.</Typography>
            <Chip label="React" />
            <Chip label="JS" />
          </CardContent>
          <CardActions>
            <ButtonGroup sx={{mx: 'auto'}}>
              <Button
                size="small"
                sx={{color: 'secondary.main'}}
                href="https://github.com/luqmanhassan/Crypto-MarketCap-Ranker"
                target="_blank"
              >
                View Code
              </Button>
              <Button
                size="small"
                sx={{color: 'secondary.main'}}
                href="https://friendly-curran-ba29f3.netlify.app"
                target="_blank"
              >
                Live Preview
              </Button>
            </ButtonGroup>
          </CardActions>
        </Card>

        <Card sx={{maxWidth: 400, m: '20px auto'}} raised>
          <Image src={shoppingcart} alt="shoppingcart" />
          <CardContent>
            <Typography variant="h5">Crypto Mining Shopping Cart</Typography>
            <Typography>An E-commerce site for Crypto Mining Rigs</Typography>
            <Chip label="React" />
            <Chip label="Redux" />
            <Chip label="MUI" />
          </CardContent>
          <CardActions>
            <ButtonGroup sx={{mx: 'auto'}}>
              <Button
                size="small"
                sx={{color: 'secondary.main'}}
                href="https://github.com/luqmanhassan/Shopping-Cart.git"
                target="_blank"
              >
                View Code
              </Button>
              <Button
                size="small"
                sx={{color: 'secondary.main'}}
                href="https://wonderful-lumiere-2e6e5a.netlify.app"
                target="_blank"
              >
                Live Preview
              </Button>
            </ButtonGroup>
          </CardActions>
        </Card>

        <Card sx={{maxWidth: 400, m: '20px auto'}} raised>
          <Image src={nft} alt="nft" />

          <CardContent>
            <Typography variant="h5">NFT Wallet Tracker</Typography>
            <Typography>
              Takes an input for a wallet adress and returns data
            </Typography>
            <Chip label="React" />
            <Chip label="JS" />
          </CardContent>
          <CardActions>
            <ButtonGroup sx={{mx: 'auto'}}>
              <Button
                size="small"
                sx={{color: 'secondary.main'}}
                href="https://github.com/luqmanhassan/NFT-Wallet-Tracker"
                target="_blank"
              >
                View Code
              </Button>
              <Button
                size="small"
                sx={{color: 'secondary.main'}}
                href="https://practical-poincare-a8dca4.netlify.app"
                target="_blank"
              >
                Live Preview
              </Button>
            </ButtonGroup>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
