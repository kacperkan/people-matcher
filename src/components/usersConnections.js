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

      acc[`${nodeFromId}/${nodeToId}`] = {
        tags,
        name: `${fromUser.username} - ${toUser.username}`
      };
      return acc;
    }, {});
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

      acc[targetUser.id] = {
        tags,
        name: targetUser.username
      };
      return acc;
    }, {});
};

const UsersConnections = ({ selectedNodes, selectedEdges, nodes }) => {
  const classes = useStyles();
  console.log(selectedNodes);
  console.log(selectedEdges);
  console.log('nodes', nodes);

  const rows =
    selectedNodes.length > 0
      ? generateRowsFromNodes(selectedNodes[0], selectedEdges, nodes)
      : generateRowsFromEdges(selectedEdges, nodes);

  console.log(rows);

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
            {Object.keys(rows).map(rowId => (
              <TableRow key={rowId}>
                <TableCell className={classes.connectionsColumn} align='center'>{rows[rowId].tags.length}</TableCell>
                <TableCell className={classes.nameColumn} align='center'>{rows[rowId].name}</TableCell>
                <TableCell>{rows[rowId].tags.map(tag => (
                  <Chip label={tag.tagName} />))}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default UsersConnections;
