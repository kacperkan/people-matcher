import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import CircularProgress from "@material-ui/core/CircularProgress";

import Header from "./Header";
import SignIn from "./SingIn";
import {useAuth} from "../hooks/use-auth";

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      style={{ bottom: 0, position: "absolute", width: "100%" }}
    >
      {"Copyright © "}
      {new Date().getFullYear()}

      <Link color="inherit" href="https://github.com/burnpiro">
        {" @burnpiro."}
      </Link>
      Built with
      {` `}
      <Link color="inherit" href="https://www.reactjs.org">
        React
      </Link>
    </Typography>
  );
}

const Layout = ({ children }) => {
  const {isLoggedIn, isLoading} = useAuth();
  return (
    <div style={{ maxHeight: "100vh", backgroundColor: "#FFF" }}>
      {isLoading ? (
        <div
          style={{
            margin: `auto auto`,
            width: "100%",
            height: "50vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <CircularProgress size={100} />
        </div>
      ) : (
        <React.Fragment>
          {isLoggedIn && <Header siteTitle='People Matcher' />}
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              position: "relative",
              height: "calc(100vh - 48px)",
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 100
            }}
          >
            <main style={{ flex: 1 }}>
              {isLoggedIn ? children : <SignIn />}
            </main>
            <Copyright />
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
