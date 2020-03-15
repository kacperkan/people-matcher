import React from 'react';
import { SocialLogins } from 'gatsby-theme-firebase';

import SEO from '../components/seo';

import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth } from 'gatsby-theme-firebase';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    display: 'flex',
    flexAlign: 'center',
    justifyContent: 'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  socialLogin: {
    width: '50%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
}));

const SignIn = () => {
  const classes = useStyles();
  const { isLoggedIn } = useAuth();

  return (
    <React.Fragment>
      <SEO title="Login" />
      {!isLoggedIn && (
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <SocialLogins
              className={classes.socialLogin}
              onSuccess={user => {
                console.log(user, '/profile');
              }}
            />
          </form>
        </div>
      )}
    </React.Fragment>
  );
};

export default SignIn;
