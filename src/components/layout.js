/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { useAuth } from 'gatsby-theme-firebase';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import Header from './header';
import './layout.css';
import Redirect from './redirect';
import SignIn from './sing-in';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {new Date().getFullYear()}
      {' Kemal Erdem.'} Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </Typography>
  );
}

const loginLocation = '/';

const Layout = ({ location, children }) => {
  const { isLoading, isLoggedIn, profile } = useAuth();
  console.log(isLoading, isLoggedIn);
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div style={{ minHeight: '100vh', backgroundColor: '#FFF' }}>
          {isLoading ? (
            <div
              style={{
                margin: `auto auto`,
                width: '100%',
                height: '50vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <CircularProgress size={100} />
            </div>
          ) : isLoggedIn ? (
            <React.Fragment>
              <Header siteTitle={data.site.siteMetadata.title} />
              <div
                style={{
                  margin: `0 auto`,
                  maxWidth: 960,
                  padding: `0px 1.0875rem 1.45rem`,
                  paddingTop: 100,
                }}
              >
                <main style={{ flex: 1 }}>{children}</main>
                <Copyright />
              </div>
            </React.Fragment>
          ) : (
            <div
              style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `0px 1.0875rem 1.45rem`,
                paddingTop: 100,
              }}
            >
              <main style={{ flex: 1 }}>
                <SignIn />
              </main>
              <Copyright />
            </div>
          )}
        </div>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
