//use express async handler: npm install expess-async-handler
const asyncHandler=require('express-async-handler');
//@route GET /api/goals
//@access private
//@desc creating a function to get goals
const getGoals=asyncHandler(async(req,res)=>{
    
    res.status(200).json({message:'Get Goals'})
})

//@route POST /api/goals
//@access private
//@desc Creating a goal
//Now in postman, for adding something you go to the pots method -> body -> x-www-form-urlencoded -> input key and value
// Now to get body data
const createGoals=asyncHandler(async(req,res)=>{
    if(!req.body.text){ //this text is the name of the feld defined in postman
        // res.status(400).json({message:'Please Add a text field'});
        res.status(400);
        throw new Error('Please add a text field.')
    }else{
        console.log(req.body); // It will output undefined and to get the actual output, you need to add couple of code for middleware in server.js
        res.status(200).json({message:`Created Goal: ${req.body.text}`})
    }
})

//@route PUT /api/goals/:id
//@access private
//@desc Updating a goal
const updateGoals=asyncHandler(async(req,res)=>{
    res.status(200).json({message:`Updated Goal ${req.params.id}`})
})

//@route GET /api/goals/:id
//@access private
//@desc deleting a goal
const deleteGoals=asyncHandler(async(req,res)=>{
    res.status(200).json({message:`Deleted Goal ${req.params.id}`})
})

module.exports={getGoals,createGoals,updateGoals,deleteGoals}

