const {LearningStackExport, LearningResourcesExport} = require('../models/Learning-stacks-models')
const User = require('../models/User')

module.exports = {
    getLearningStackPage: async (req,res)=>{
        try{
            // Pull user id
            const user = await User.findById(req.user.id).populate('learningStackArray');
            // console.log(`******user: ${user}`)


            // Pull logged in user's learning stack array
            const learningStackArray = user.learningStackArray
            // console.log(`******learningStackArray: ${learningStackArray}`)
            // console.log(`******param: ${req.params.id}`)

            console.log(`******typeof learningStackArray: ${typeof learningStackArray}`)

            // Pull specific learning stack
            const learningStack = await LearningStackExport.findById(req.params.id)
            
            // Learning stack details
            const learningStackName = learningStack.learningStackName
            console.log(`******learningStack: ${learningStack}`)
            console.log(`******learningStackName: ${learningStackName}`)

            res.render('learning-stack-page.ejs',
            {
                learningStacks: learningStackArray,
                learningStackName: learningStackName
            })

            // user.save()
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