import React from "react";

import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "firebase";
import googleIcon from "./google-icon.png";
import { useAuth } from "../hooks/use-auth";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    display: "flex",
    flexAlign: "center",
    justifyContent: "center"
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  socialLogin: {
    width: "50%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  sighInIcon: {
    height: "48px",
    paddingRight: "5px"
  }
}));

const SignIn = () => {
  const classes = useStyles();
  const { signin, user } = useAuth();

  const handleSignin = () => {
    signin().then(user => {
      firebase
        .database()
        .ref(`/users/${user.uid}`)
        .once("value")
        .then(function(snapshot) {
          const userData = snapshot.val();
          if (!userData) {
            //create new user
            firebase
              .database()
              .ref(`/users/${user.uid}`)
              .set({
                username: user.displayName,
                email: user.email,
                photoUrl: user.photoURL,
                tags: []
              });
          } else {
            //update existing use
            firebase
              .database()
              .ref(`/users/${user.uid}/username`)
              .set(user.displayName);
            firebase
              .database()
              .ref(`/users/${user.uid}/email`)
              .set(user.email);
            firebase
              .database()
              .ref(`/users/${user.uid}/photoUrl`)
              .set(user.photoURL);
          }
        });
    });
  };

  return (
    <React.Fragment>
      {!user && (
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <Button color="primary" onClick={handleSignin}>
              <img alt={'Google Icon'} className={classes.sighInIcon} src={googleIcon} /> with
              Google
            </Button>
          </form>
        </div>
      )}
    </React.Fragment>
  );
};

export default SignIn;
