import React, { useEffect, useState } from 'react';
import { useObject, useListVals } from 'react-firebase-hooks/database';
import { firebase, useAuth } from 'gatsby-theme-firebase';
import { DraggableAreasGroup } from 'react-draggable-tags';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import RemoveIcon from '@material-ui/icons/Remove';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { v4 as uuidv4 } from 'uuid';

import Layout from '../components/layout';
import SEO from '../components/seo';

const group = new DraggableAreasGroup();
const DraggableArea1 = group.addArea();
const DraggableArea2 = group.addArea();

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  tag: {
    position: 'relative',
    margin: '3px',
    fontSize: '16px',
    border: '2px dashed #cccccc',
    borderRadius: '4px',
    padding: theme.spacing(1),
    lineHeight: '30px',
    color: '#666666',
    background: 'rgba(255, 255, 255, 0.7)',
  },
  tagSelected: {
    border: '2px dashed #3b9de9;',
  },
  deleteBtn: {
    position: 'absolute',
    top: '-1px',
    right: '-1px',
    width: '20px',
    height: '20px',
    cursor: 'pointer',
    userDrag: 'none',
    userSelect: 'none',
  },
  dragableBox: {
    minHeight: '100px',
    background: 'rgba(0, 0, 0, 0.05)',
  },
}));

const ProfilePage = ({ location }) => {
  const classes = useStyles();
  const { isLoading, profile } = useAuth();
  const [user, loadingUser, errorUser] = useObject(
    firebase.database().ref(`/users/${profile?.uid}`),
  );
  const [tags, loadingTags, error] = useListVals(
    firebase.database().ref(`/tags`),
  );
  const [newTagName, setNewTagName] = useState('');
  const userData = user?.val();

  const userTags = userData?.tags || [];

  const leftTags = tags.filter(tag => !userTags.some(userTag => userTag.uid === tag.uid));

  const updateUserTags = tags => {
    const updates = {
      [`/users/${profile?.uid}/tags`]: tags,
    };
    firebase
      .database()
      .ref()
      .update(updates);
  };

  const handleClickDelete = tag => {
    updateUserTags(userTags.filter(item => item.uid !== tag.uid));
  };

  const handleAddTag = () => {
    const newId = uuidv4();
    let newPostKey = firebase
      .database()
      .ref()
      .child('tags')
      .push().key;
    const updates = {
      [`/tags/${newPostKey}`]: {
        uid: newId,
        tagName: newTagName,
      },
    };
    firebase
      .database()
      .ref()
      .update(updates);
    setNewTagName('');
  };

  const setTagName = tagName => {
    setNewTagName(tagName.target.value);
  };

  return (
    <Layout location={location}>
      <SEO title="Page two" />
      <h1>Select your interests</h1>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <DraggableArea1
              className={classes.dragableBox}
              tags={leftTags}
              render={({ tag }) => (
                <div className={classes.tag}>{tag.tagName}</div>
              )}
            />
            <Grid container justify="center" alignItems="flex-end">
              <Grid item xs={9}>
                <TextField
                  required
                  id="tagName"
                  name="tagName"
                  label="Tag name"
                  onChange={setTagName}
                  value={newTagName}
                  fullWidth
                />
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={newTagName.length < 1}
                  onClick={handleAddTag}
                  className={classes.button}
                >
                  Add
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <DraggableArea2
              className={classes.dragableBox}
              tags={userTags}
              render={({ tag }) => (
                <div className={classes.tag + ' ' + classes.tagSelected}>
                  <RemoveIcon
                    color={'secondary'}
                    className={classes.deleteBtn}
                    onClick={() => handleClickDelete(tag)}
                  />
                  {tag.tagName}
                </div>
              )}
              onChange={rightTags => {
                updateUserTags(rightTags);
              }}
            />
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default ProfilePage;
