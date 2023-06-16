import {  getComments, getComment, createComment, updateComment, deleteComment } from '../controllers/comments.js';


const routes = (app) => {
    //people routes
    app.route('/comments')
        .get( getComments)
        .post( createComment);

    app.route('/comments/:id')
        .put( updateComment)
        .get( getComment)
        .delete( deleteComment);

  


};
export default routes;