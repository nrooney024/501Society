const {LearningStackExport, LearningResourcesExport} = require('../models/Learning-stacks-models')
const User = require('../models/User')

module.exports = {
    getLearningStackPage: async (req,res)=>{
        try{
            
            // ########### Learning Stack Info ###########
            
            // Pull user id
            const user = await User.findById(req.user.id).populate('learningStackArray');

            // Pull logged in user's learning stack array
            const learningStackArray = user.learningStackArray

            // Pull specific learning stack
            const learningStack = await LearningStackExport.findById(req.params.id).populate('learningResourcesList')
            
            // Learning stack details
            const learningStackName = learningStack.learningStackName

            
            const learningResourceList = learningStack.learningResourcesList


            res.render('learning-stack-page.ejs',
            {
                learningStacks: learningStackArray,
                learningStackName: learningStackName,
                learningStackId: req.params.id,
                learningResources: learningResourceList
            })

        }catch(err){ 
            console.log(err)
        }
    },
    createLearningResource: async (req, res)=>{
        try{
            
            // Creating learning resource
            const learningResource = await LearningResourcesExport.create({
                learningResourceName: req.body.learningResourceName,
                urlToResource: req.body.learningResourceLink,
            })

            console.log(`******learningResource: ${learningResource}`)
            

            // Current Learning Stack
            const learningStack = await LearningStackExport.findById(req.params.id);
            console.log(`******learningStack: ${learningStack}`)

            // Learning Resource List 
            const learningResourcesList = learningStack.learningResourcesList
            console.log(`******learningResourcesList 1: ${learningResourcesList}`)

            learningResourcesList.push(learningResource.id)
            console.log(`******learningResourcesList 2: ${learningResourcesList}`)
            console.log(`******learningResources id: ${learningResource.id}`)

            console.log('Learning Resource has been added!')
            res.redirect(`/learning-stack-page/${req.params.id}`)
            learningStack.save()

        }catch(err){
            console.log(err)
        }
    },
    deleteLearningResource: async (req, res) => {
        try {
            // Delete learning stack from db
            await LearningResourcesExport.remove({ _id: req.params.id });
            console.log("Deleted Post");
            res.redirect(req.get('referer'));
        } catch (err) {
            res.redirect(req.get('referer'));
        }
      },
}
