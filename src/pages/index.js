import React from 'react';
import { useList, useObject } from 'react-firebase-hooks/database';
import {firebase} from 'gatsby-theme-firebase';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const IndexPage = ({ location }) => {
  const classes = useStyles();
  const [data, isLoading, error] = useObject(firebase.database().ref("/users"),);

  console.log(data?.val())

  return (
    <Layout location={location}>
      <SEO title="Home" />
      <Grid container spacing={3} justify="center">
        <Grid item xs={2}>
          <div style={{ maxWidth: `100px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>
        </Grid>
        <Grid item xs={8}>
          <h1>Gatsby Material UI Starter</h1>
          <h5>
            A responsive, minimalist Gatsby starter based on the
            world's most popular React UI framework.
          </h5>
        </Grid>
      </Grid>
      <Divider />
    </Layout>
  );
};

export default IndexPage;
