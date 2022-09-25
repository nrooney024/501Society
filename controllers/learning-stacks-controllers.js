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
}    