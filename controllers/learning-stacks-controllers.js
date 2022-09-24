const {LearningStackExport, LearningResourcesExport} = require('../models/Learning-stacks-models')
const User = require('../models/User')


module.exports = {
    getLearningStacks: async (req,res)=>{
        try{
            const user = await User.findById(req.user.id).populate('learningStackArray');
            console.log(`*******user: ${user}`)
            
            const learningStackArray = user.learningStackArray
            console.log(`*******learningStackArray: ${learningStackArray}`)

            res.render('learning-stacks.ejs', {learningStacks: learningStackArray})
        }catch(err){ 
            console.log(err)
        }
    },
    createLearningStack: async (req, res)=>{
        try{
            // User signed in
            const user = await User.findById(req.user.id);
            
            const learningStack = await LearningStackExport.create({
                learningStackName: req.body.learningStackName,
                learningResourcesList: []
            })

            console.log(`******learningStack: ${learningStack}`)
            
            // Adding new learning stack from form
            // learningStackArray.push({
            //     learningStackName: req.body.learningStackName,
            //     learningResourcesList: []
            // })


              // Learning stack array of the user signed in
              const learningStackArray = user.learningStackArray

              learningStackArray.push(learningStack.id)

            console.log('Learning stack has been added!')
            res.redirect('/learning-stacks')
            user.save()
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