const router = require('express-promise-router')();

const { users } = require ('../controllers');

router.route('/:id').get(users.get);
router.route('/').get(users.getAll);
router.route('/').post(users.create);
router.route('/:id').put(users.update);
router.route('/:id').delete(users.delete);

module.exports = router;