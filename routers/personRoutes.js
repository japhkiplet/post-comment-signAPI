import {  getPeople, getPerson, createPerson, updatePerson, deletePerson } from '../controllers/user.js';


const routes = (app) => {
    //people routes
    app.route('/people')
        .get( getPeople)
        .post( createPerson);

    app.route('/people/:id')
        .put( updatePerson)
        .get( getPerson)
        .delete( deletePerson);

  


};
export default routes;