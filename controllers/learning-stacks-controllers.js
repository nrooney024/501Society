const LearningStack = require('../models/learning-stacks-models')


module.exports = {
    getLearningStacks: async (req,res)=>{
        try{
            const learningStack = await LearningStack.find()
            res.render('learning-stacks.ejs', {learningStacks: learningStack})
        }catch(err){
            console.log(err)
        }
    },
    createLearningStack: async (req, res)=>{
        try{
            await LearningStack.create({learningStackName: req.body.learningStackName})
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