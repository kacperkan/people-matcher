import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    zIndex: 100,
    top: '64px',
    left: 0,
    width: '100%',
  },
  connectionsColumn: {
    width: '140px'
  },
  nameColumn: {
    width: '280px'
  }
}));

const generateRowsFromEdges = (edges, nodes) => {
  return edges
    .map(edge => edge.split('/'))
    .reduce((acc, [nodeFromId, nodeToId]) => {
      const fromUser = nodes.find(userNode => userNode.id === nodeFromId);
      const toUser = nodes.find(userNode => userNode.id === nodeToId);

      const tags = fromUser.tags.filter(nodeTag =>
        toUser.tags.some(userTag => userTag.uid === nodeTag.uid),
      );

      const targetUserIndex = acc.findIndex(element => element.id === `${nodeFromId}/${nodeToId}`);
      if(targetUserIndex !== -1) {
        acc[targetUserIndex] = {
          tags,
          id: `${nodeFromId}/${nodeToId}`,
          name: `${fromUser.username} - ${toUser.username}`
        };
      } else {
        acc = [...acc, {
          tags,
          id: `${nodeFromId}/${nodeToId}`,
          name: `${fromUser.username} - ${toUser.username}`
        }]
      }
      return acc;
    }, []);
};

const generateRowsFromNodes = (node, edges, nodes) => {
  const currentUser = nodes.find(userNode => userNode.id === node);
  return edges
    .map(edge => edge.split('/'))
    .reduce((acc, [nodeFromId, nodeToId]) => {
      const targetUser =
        nodeFromId === node
          ? nodes.find(userNode => userNode.id === nodeToId)
          : nodes.find(userNode => userNode.id === nodeFromId);

      const tags = currentUser.tags.filter(nodeTag =>
        targetUser.tags.some(userTag => userTag.uid === nodeTag.uid),
      );

      const targetUserIndex = acc.findIndex(element => element.id === targetUser.id);
      if(targetUserIndex !== -1) {
        acc[targetUserIndex] = {
          tags,
          id: targetUser.id,
          name: targetUser.username
        };
      } else {
        acc = [...acc, {
          tags,
          id: targetUser.id,
          name: targetUser.username
        }]
      }
      return acc;
    }, []);
};

const sortByNumOfConnections = (nodeA, nodeB) => nodeA.tags.length - nodeB.tags.length;

const UsersConnections = ({ selectedNodes, selectedEdges, nodes }) => {
  const classes = useStyles();

  const rows =
    selectedNodes.length > 0
      ? generateRowsFromNodes(selectedNodes[0], selectedEdges, nodes)
      : generateRowsFromEdges(selectedEdges, nodes);

  rows.sort(sortByNumOfConnections);

  return (
    <Container className={classes.root}>
      <Paper>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell className={classes.connectionsColumn} align='center'>Connections</TableCell>
              <TableCell className={classes.nameColumn} align='center'>Name</TableCell>
              <TableCell>Tags</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell className={classes.connectionsColumn} align='center'>{row.tags.length}</TableCell>
                <TableCell className={classes.nameColumn} align='center'>{row.name}</TableCell>
                <TableCell>{row.tags.map(tag => (
                  <Chip key={tag.uid} label={tag.tagName} />))}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default UsersConnections;
