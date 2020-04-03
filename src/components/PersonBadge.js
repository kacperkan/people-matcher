import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
    cursor: "pointer"
  },
  selectedAvatar: {
    border: '3px red solid'
  }
}));

const PersonBadge = ({ row, users, onSelect, selectedUser, edges = 0 }) => {
  const classes = useStyles();
  const currentUser = users.find(user => user.id === row.id)

  const handleSelect = () => {
    onSelect(selectedUser && selectedUser.id === currentUser.id ? null : currentUser);
  };

  return (
    <Badge color="secondary" badgeContent={edges} onClick={handleSelect} className={classes.root}>
      <Avatar
        className={selectedUser && selectedUser.id === currentUser.id ? classes.selectedAvatar : null}
        alt={currentUser.username}
        src={
          currentUser.photoUrl ||
          'https://raw.githubusercontent.com/google/material-design-icons/master/social/2x_web/ic_person_outline_white_48dp.png'
        }
      />
    </Badge>
  );
};

export default PersonBadge;
