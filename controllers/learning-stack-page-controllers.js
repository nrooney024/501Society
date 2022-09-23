const Todo = require('../models/Learning-stacks-models')

module.exports = {
    getLearningStackPage: : async (req,res)=>{
        try{
            // Pull user id
            const user = await User.findById(req.user.id);
            
            // Pull logged in user's learning stack array
            const learningStackArray = user.learningStackArray
            
            // Pull specific learning stack
            const learningStack = learningStackArray.findOne(req.params.id)

            

            res.render('learning-stacks.ejs', {learningStacks: learningStackArray})
        }catch(err){ 
            console.log(err)
        }
    }
}



// module.exports = {
//     getLearningStacks: async (req,res)=>{
//         try{
//             const todoItems = await Todo.find()
//             const itemsLeft = await Todo.countDocuments({completed: false})
//             res.render('todos.ejs', {todos: todoItems, left: itemsLeft})
//         }catch(err){
//             console.log(err)
//         }
//     },
    // createTodo: async (req, res)=>{
    //     try{
    //         await Todo.create({todo: req.body.todoItem, completed: false})
    //         console.log('Todo has been added!')
    //         res.redirect('/todos')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // markComplete: async (req, res)=>{
    //     try{
    //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
    //             completed: true
    //         })
    //         console.log('Marked Complete')
    //         res.json('Marked Complete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // markIncomplete: async (req, res)=>{
    //     try{
    //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
    //             completed: false
    //         })
    //         console.log('Marked Incomplete')
    //         res.json('Marked Incomplete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // deleteTodo: async (req, res)=>{
    //     console.log(req.body.todoIdFromJSFile)
    //     try{
    //         await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
    //         console.log('Deleted Todo')
    //         res.json('Deleted It')
    //     }catch(err){
    //         console.log(err)
    //     }
    // }
// }    