import React, { useState } from 'react';
import { useObject } from 'react-firebase-hooks/database';
import { firebase, useAuth } from 'gatsby-theme-firebase';
import { DraggableAreasGroup } from 'react-draggable-tags';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import RemoveIcon from '@material-ui/icons/Remove';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

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
    background: 'rgba(0, 0, 0, 0.05)'
  },
}));

const ProfilePage = ({ location }) => {
  const classes = useStyles();
  const [newTagName, setNewTagName] = useState('');
  const [leftTags, setLeftTags] = useState([
    {
      id: 'apple',
      content: 'apple',
    },
  ]);
  const [rightTags, setRightTags] = useState([
    {
      id: 'tomato',
      content: 'tomato',
    },
  ]);
  const { isLoading, profile } = useAuth();
  const [data, loading, error] = useObject(
    firebase.database().ref(`/users/${profile?.uid}`),
  );

  const handleClickDelete = tag => {
    setRightTags(rightTags.filter(item => item.id !== tag.id));
    setLeftTags([...leftTags, tag]);
  };

  const handleAddTag = () => {
    setLeftTags([...leftTags, { id: Math.random(), content: newTagName }]);
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
                <div className={classes.tag}>{tag.content}</div>
              )}
              onChange={leftTags => {
                setLeftTags(leftTags);
              }}
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
              tags={rightTags}
              render={({ tag }) => (
                <div className={classes.tag + ' ' + classes.tagSelected}>
                  <RemoveIcon
                    color={'secondary'}
                    className={classes.deleteBtn}
                    onClick={() => handleClickDelete(tag)}
                  />
                  {tag.content}
                </div>
              )}
              onChange={rightTags => {
                setRightTags(rightTags);
              }}
            />
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default ProfilePage;
