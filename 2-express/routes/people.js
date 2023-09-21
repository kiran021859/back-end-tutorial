const express = require('express');
const router = express.Router( );
const { people } = require('../data');
const {getPeople, postPeople, postPeoplePostman, putPeople, deletePeople} = require('./controllers/controller')


// router.get('/', getPeople);

// router.post('/', postPeople );

// //post to postman
// router.post('/postman', postPeoplePostman );

// router.put('/:id', putPeople);

// router.delete('//:id', deletePeople);

router.route('/').get(getPeople).post(postPeople);
router.route('/postman').post(postPeople);
router.route('/:id').put(putPeople).delete(deletePeople);

module.exports = router