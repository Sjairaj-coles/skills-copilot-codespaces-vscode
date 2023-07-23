// Create web server
var express = require('express');
var router = express.Router();
var Comment = require('../models/comment');
var jwt = require('jsonwebtoken');
var config = require('../config/database');

// Add a comment
router.post('/new', function (req, res) {
  var newComment = new Comment({
    text: req.body.text,
    user: req.body.user,
    post: req.body.post
  });

  Comment.addComment(newComment, function (err, comment) {
    if (err) {
      res.json({ success: false, msg: 'Failed to add comment' });
    } else {
      res.json({ success: true, msg: 'Comment added' });
    }
  });
});

// Delete a comment
router.delete('/delete/:id', function (req, res) {
  Comment.deleteComment(req.params.id, function (err, comment) {
    if (err) {
      res.json({ success: false, msg: 'Failed to delete comment' });
    } else {
      res.json({ success: true, msg: 'Comment deleted' });
    }
  });
});

// Get comment by post id
router.get('/post/:id', function (req, res) {
  Comment.getCommentByPost(req.params.id, function (err, comment) {
    if (err) {
      res.json({ success: false, msg: 'Failed to get comment' });
    } else {
      res.json({ success: true, msg: comment });
    }
  });
});

// Get all comments
router.get('/all', function (req, res) {
  Comment.getAllComments(function (err, comment) {
    if (err) {
      res.json({ success: false, msg: 'Failed to get comment' });
    } else {
      res.json({ success: true, msg: comment });
    }
  });
});

// Get comment by id
router.get('/:id', function (req, res) {
  Comment.getCommentById(req.params.id, function (err, comment) {
    if (err) {
      res.json({ success: false, msg: 'Failed to get comment' });
    } else {
      res.json({ success: true, msg: comment });
    }
  });
});

// Update a comment
router.put('/update/:id', function (req, res) {
  var newComment = new Comment({
    text: req.body.text,
    user: req.body.user,
  });
});

