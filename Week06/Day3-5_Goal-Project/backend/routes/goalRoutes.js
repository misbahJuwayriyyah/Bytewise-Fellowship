//Each resource in your API will have its own route file
const express=require('express');
const router=express.Router();

const {getGoals,createGoals,updateGoals,deleteGoals}=require('../controllers/getController');

// //http://localhost:5000/api/goals
// router.get('/',getGoals);

// //http://localhost:5000/api/goals
// router.post('/',createGoals);

// //http://localhost:5000/api/goals/1
// router.put('/:id',updateGoals);

// //http://localhost:5000/api/goals/1
// router.delete('/:id',deleteGoals);
// module.exports=router;

//We can create our functionalities here but it's better if we make a controller to control the functonality of the routes

//We can clean up the code a little more 
router.route('/').get(getGoals).post(createGoals);
router.route('/:id').put(updateGoals).delete(deleteGoals);

//If you miss the following, it will give a type-error
module.exports=router;