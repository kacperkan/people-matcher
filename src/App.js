import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import { ProvideAuth } from "./hooks/use-auth";
import { ProvideNavigation } from "./hooks/use-navigation";
import Router from "./Router";

function App() {
  return (
    <ProvideAuth>
      <ProvideNavigation>
        <Layout>
          <Router/>
        </Layout>
      </ProvideNavigation>
    </ProvideAuth>
  );
}

export default App;
