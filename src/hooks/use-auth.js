// Hook (use-auth.js)
import React, { useState, useEffect, useContext, createContext } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';

// Add your Firebase credentials
firebase.initializeApp({
  apiKey: 'AIzaSyDF9a6lrZiRxIKp4egTzFbIlvUai-sxBTg',
  authDomain: 'peoplematcher-ca9ef.firebaseapp.com',
  databaseURL: 'https://peoplematcher-ca9ef.firebaseio.com',
  projectId: 'peoplematcher-ca9ef',
  storageBucket: 'peoplematcher-ca9ef.appspot.com',
  messagingSenderId: '468976630953',
  appId: '1:468976630953:web:67c28399a0d9fa33b3bdb8',
});

const authContext = createContext('auth');

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const provider = new firebase.auth.GoogleAuthProvider();

  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signin = () => {
    setIsLoading(true);
    return firebase.auth().signInWithPopup(provider).then(function(result) {
      setUser(result.user);
      setIsLoading(false);
      return result.user;
    }).catch(function(error) {
      // Handle Errors here.
      console.error(error)
      setIsLoading(false);
    });
  };

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(false);
      });
  };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
        setIsLoading(false);
      } else {
        setUser(false);
        setIsLoading(false);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    setIsLoggedIn(typeof user === 'object');
  }, [user]);

  // Return the user object and auth methods
  return {
    profile: user,
    isLoading,
    isLoggedIn,
    signin,
    signout,
  };
}
