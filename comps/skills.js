import React from 'react';
import {Typography, Grid, ImageList, ImageListItem} from '@mui/material';
import Image from 'next/image';

import js from '../public/images/js.png';
import html from '../public/images/html.png';
import css from '../public/images/css.png';
import git from '../public/images/git.png';
import react from '../public/images/react.svg';
import redux from '../public/images/redux.png';
import sass from '../public/images/sass.png';
import typescript from '../public/images/typescript.png';
import mui from '../public/images/mui.png';
import tailwind from '../public/images/tailwind.png';
import styledcomponents from '../public/images/styledcomp.png';

import node from '../public/images/node.png';
import next from '../public/images/next.png';
import jest from '../public/images/jest.png';
import mongodb from '../public/images/mongodb.png';

export default function Skills() {
  return (
    <Grid
      item
      container
      direction="column"
      align="center"
      sx={{
        backgroundColor: 'secondary.main',
        py: '50px',
      }}
      id="skills"
    >
      <Grid item sx={{mb: '20px'}}>
        <Typography variant="h3" sx={{backgroundColor: 'primary.main'}}>
          Skills & Tools
        </Typography>
      </Grid>
      <Grid item>
        <ImageList
          sx={{
            width: '300px',
            height: '100%',
          }}
          cols={3}
          gap={5}
        >
          <ImageListItem>
            <Image src={html} alt="html" />
          </ImageListItem>
          <ImageListItem>
            <Image src={js} alt="js" />
          </ImageListItem>
          <ImageListItem>
            <Image src={css} alt="css" />
          </ImageListItem>

          <ImageListItem>
            <Image src={git} alt="git" />
          </ImageListItem>

          <ImageListItem>
            <Image src={react} alt="react" />
          </ImageListItem>

          <ImageListItem>
            <Image src={redux} alt="redux" />
          </ImageListItem>

          <ImageListItem>
            <Image src={sass} alt="sass" />
          </ImageListItem>

          <ImageListItem>
            <Image src={typescript} alt="typescript" />
          </ImageListItem>

          <ImageListItem>
            <Image src={mui} alt="MUI" />
          </ImageListItem>

          <ImageListItem>
            <Image src={tailwind} alt="tailwind" />
          </ImageListItem>

          <ImageListItem>
            <Image src={styledcomponents} alt="styledcomponents" />
          </ImageListItem>

          <ImageListItem>
            <Image src={node} alt="node" />
          </ImageListItem>

          <ImageListItem>
            <Image src={next} alt="next" />
          </ImageListItem>

          <ImageListItem>
            <Image src={jest} alt="jest" />
          </ImageListItem>

          <ImageListItem>
            <Image src={mongodb} alt="mongodb" />
          </ImageListItem>
        </ImageList>
      </Grid>
    </Grid>
  );
}
