// Hook (use-auth.js)
import React, { useState, useContext, createContext } from 'react';

const routeContext = createContext('router');

export function ProvideNavigation({ children }) {
  const route = useProvideNavigation();
  return <routeContext.Provider value={route}>{children}</routeContext.Provider>;
}

export const useNavigation = () => {
  return useContext(routeContext);
};

function useProvideNavigation() {
  const [path, setPath] = useState('/');

  const goTo = (path) => {
    setPath(path)
  };

  return {
    path,
    goTo,
  };
}
