import React from "react";
import { useNavigation } from "./hooks/use-navigation";
import Network from "./components/Network";
import Profile from "./components/Profile";

function Router({paths}) {
  const { path } = useNavigation();

  return (
    <React.Fragment>
      {path === "/" && <Network />}
      {path === "/profile" && <Profile />}
    </React.Fragment>
  );
};

export default Router;
