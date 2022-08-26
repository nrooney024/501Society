const Todo = require('../models/learning-stacks-models')


module.exports = {
    getLearningStacks: (req,res)=>{
        res.render('learning-stacks.ejs')
    }
}




// module.exports = {
//     getLearningStacks: async (req,res)=>{
//         try{
//             const learningStack = await LearningStack.find()
//             // const itemsLeft = await LearningStack.countDocuments({completed: false})
//             res.render('learning-stacks-routes.ejs', {LearningStack: learningStacks, left: itemsLeft})
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