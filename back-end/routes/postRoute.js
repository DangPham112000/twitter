const express = require('express');
const { getAllPosts, createOnePost, deleteOnePost, updateOnePost } = require('../controllers/postController');
const { verifyToken } = require('../middlewares/verifyToken');

const Router = express.Router();

Router.route('/').get(getAllPosts).post(verifyToken, createOnePost);

Router.route('/:postId').delete(verifyToken, deleteOnePost).put(verifyToken, updateOnePost);


module.exports = Router;