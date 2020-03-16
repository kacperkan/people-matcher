import React, { useState } from 'react';
import { useList, useObject } from 'react-firebase-hooks/database';
import { firebase } from 'gatsby-theme-firebase';
import Graph from 'react-graph-vis';

import Layout from '../components/layout';
import SEO from '../components/seo';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import UsersConnections from '../components/usersConnections';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));
const options = {
  nodes: {
    borderWidth: 6,
    size: 30
  },
  layout: {
    hierarchical: false,
  },
  edges: {
    arrows: {
      to: {
        enabled: false,
      },
    },
    scaling: {
      customScalingFunction: function(min, max, total, value) {
        return value / total;
      },
    },
    color: '#5B72FF',
  },
};

const IndexPage = ({ location }) => {
  const classes = useStyles();
  const [data, isLoading, error] = useObject(firebase.database().ref('/users'));
  const [selectedNodes, setSelectedNodes] = useState([]);
  const [selectedEdges, setSelectedEdges] = useState([]);

  const events = {
    select: function(event) {
      const { nodes, edges } = event;
      setSelectedNodes(nodes);
      setSelectedEdges(edges);
    },
  };

  const userData = data?.val();

  const nodes =
    typeof userData === 'object'
      ? Object.keys(userData).map(userKey => {
          return {
            ...userData[userKey],
            id: userKey,
            tags: userData[userKey].tags || [],
            shape: 'circularImage',
            image: userData[userKey].photoURL || 'https://raw.githubusercontent.com/google/material-design-icons/master/social/2x_web/ic_person_outline_white_48dp.png',
            brokenImage:
              'https://raw.githubusercontent.com/google/material-design-icons/master/social/2x_web/ic_person_outline_white_48dp.png',
          };
        })
      : [];

  const edges =
    nodes.length > 0
      ? nodes.reduce((acc, node, index) => {
          const usersEdges = nodes
            .filter(
              (user, userIndex) => user.id !== node.id && userIndex > index,
            )
            .map(user => {
              if (user.tags.length === 0) {
                return { value: 0 };
              }

              const connectionStrength = node.tags.filter(nodeTag =>
                user.tags.some(userTag => userTag.uid === nodeTag.uid),
              ).length;

              return {
                id: `${node.id}/${user.id}`,
                from: node.id,
                to: user.id,
                value: connectionStrength,
              };
            });
          return [...acc, ...usersEdges.filter(edge => edge.value !== 0)];
        }, [])
      : [];

  const graph = {
    nodes: nodes,
    edges: edges,
  };

  return (
    <Layout location={location}>
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
          style={{ height: 'calc(100vh - 120px)', width: '100vw' }}
        />
      </Grid>
    </Layout>
  );
};

export default IndexPage;
