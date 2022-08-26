const LearningStack = require('../models/learning-stacks-models')

// Get request if I can't get it to work
// module.exports = {
//     getLearningStacks: (req,res)=>{
//         res.render('learning-stacks.ejs')
//     }
// }




module.exports = {
    getLearningStacks: async (req,res)=>{
        try{
            res.render('learning-stacks.ejs')
            // const learningStack = await LearningStack.find()
            // // const itemsLeft = await LearningStack.countDocuments({completed: false})
            // res.render('learning-stacks-routes.ejs', {LearningStack: learningStacks, left: itemsLeft})
        }catch(err){
            console.log(err)
        }
    },
    createLearningStack: async (req, res)=>{
        try{
            await LearningStackSchema.create({LearningStack: req.body.learningStackName})
            console.log('Learning stack has been added!')
            res.redirect('/learning-stacks')
        }catch(err){
            console.log(err)
        }
    },
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
}    