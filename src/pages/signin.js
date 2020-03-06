import React, { Fragment } from 'react';

import Layout from '../components/layout';
import SignInForm, {
  SignInGoogle,
  SignInFacebook,
  SignInTwitter,
} from '../components/SignIn';

const SignInPage = () => (
  <Fragment>
    <h1>SignIn</h1>
    <SignInGoogle />
    <SignInFacebook />
  </Fragment>
);

export default () => (
  <Layout>
    <SignInPage />
  </Layout>
);
