import React, { useState } from "react";
import { useObject } from "react-firebase-hooks/database";
import firebase from "firebase";
import Graph from "react-graph-vis";

import SEO from "../components/Seo";

import Grid from "@material-ui/core/Grid";
import UsersConnections from "../components/UsersConnections";

const options = {
  nodes: {
    borderWidth: 6,
    size: 30
  },
  layout: {
    randomSeed: 16,
    improvedLayout:true,
    clusterThreshold: 500,
  },
  physics: {
    forceAtlas2Based: {
      gravitationalConstant: -75,
      springLength: 300,
      springConstant: 0.03,
      avoidOverlap: 5,
      centralGravity: 0.001
    },
    hierarchicalRepulsion: {
      springLength: 300,
    },
    maxVelocity: 146,
    solver: "forceAtlas2Based",
    timestep: 0.35,
    stabilization: {
      enabled: true,
      iterations: 100,
      updateInterval: 25
    }
  },
  edges: {
    arrows: {
      to: {
        enabled: false
      }
    },
    scaling: {
      customScalingFunction: function(min, max, total, value) {
        return value / (max + min);
      }
    },
    color: "#5B72FF"
  }
};

function isInNodes(edge, nodes) {
  return nodes.some(node => node === edge.to || node === edge.from)
}

const Network = () => {
  const [data] = useObject(firebase.database().ref("/users"));
  const [selectedNodes, setSelectedNodes] = useState([]);
  const [selectedEdges, setSelectedEdges] = useState([]);

  const events = {
    select: function(event) {
      const { nodes, edges } = event;
      setSelectedNodes(nodes);
      setSelectedEdges(edges);
    }
  };

  const userData = data?.val();

  const nodes =
    typeof userData === "object"
      ? Object.keys(userData).map(userKey => {
          return {
            ...userData[userKey],
            id: userKey,
            tags: userData[userKey].tags || [],
            shape: "circularImage",
            image:
              userData[userKey].photoUrl ||
              "https://raw.githubusercontent.com/google/material-design-icons/master/social/2x_web/ic_person_outline_white_48dp.png",
            brokenImage:
              "https://raw.githubusercontent.com/google/material-design-icons/master/social/2x_web/ic_person_outline_white_48dp.png"
          };
        })
      : [];

  const edges =
    nodes.length > 0
      ? nodes.reduce((acc, node, index) => {
          const usersEdges = nodes
            .filter(
              (user, userIndex) => user.id !== node.id && userIndex > index
            )
            .map(user => {
              if (user.tags.length === 0) {
                return { value: 0 };
              }

              const connectionStrength = node.tags.filter(nodeTag =>
                user.tags.some(userTag => userTag.uid === nodeTag.uid)
              ).length;

              return {
                id: `${node.id}/${user.id}`,
                from: node.id,
                to: user.id,
                value: connectionStrength,
                color: selectedNodes ? (isInNodes({from: node.id, to: user.id }, selectedNodes) ? "red" : "#5B72FF") : "#5B72FF"
              };
            });
          return [...acc, ...usersEdges.filter(edge => edge.value !== 0)];
        }, [])
      : [];

  const graph = {
    nodes: nodes,
    edges: edges
  };

  return (
    <React.Fragment>
      <SEO title="Home" />
      {(selectedEdges.length > 0 || selectedNodes.length > 0) && (
        <UsersConnections
          selectedNodes={selectedNodes}
          selectedEdges={selectedEdges}
          nodes={nodes}
        />
      )}
      <Grid container spacing={3} justify="center">
        <Graph
          graph={graph}
          options={options}
          events={events}
          style={{ height: "calc(100vh - 120px)", width: "100vw" }}
        />
      </Grid>
    </React.Fragment>
  );
};

export default Network;
