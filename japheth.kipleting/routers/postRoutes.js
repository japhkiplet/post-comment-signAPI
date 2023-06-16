import {  getPosts, getPost, createPosts, updatePost, deletePost } from '../controllers/post.js';


const routes = (app) => {
    //people routes
    app.route('/post')
        .get( getPosts)
        .post( createPosts);

    app.route('/post/:id')
        .put( updatePost)
        .get( getPost)
        .delete( deletePost);

  


};
export default routes;