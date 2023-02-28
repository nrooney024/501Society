const {LearningStackExport, LearningResourcesExport} = require('../models/Learning-stacks-models')
const User = require('../models/User')


module.exports = {
    getLearningStacks: async (req,res)=>{
        try{
            const user = await User.findById(req.user.id).populate('learningStackArray');
            console.log(`*******user: ${user}`)

            const userImage = user.image
            
            const learningStackArray = user.learningStackArray
            console.log(`*******learningStackArray: ${learningStackArray}`)

            res.render('learning-stacks.ejs', {
                learningStacks: learningStackArray,
                userImage: userImage
            })
        }catch(err){ 
            console.log(err)
        }
    },
    createLearningStack: async (req, res)=>{
        try{
            // User signed in
            const user = await User.findById(req.user.id);

            let privacySwitch = ""

            // Is it public or private?
            if (req.body.public === "on"){
                publicSwitch = "public"
            }else{
                publicSwitch = "private"
            }

            console.log(req.body)
            
            const learningStack = await LearningStackExport.create({
                learningStackName: req.body.learningStackName,
                public: publicSwitch,
                learningResourcesList: []
            })
            
              // Learning stack array of the user signed in
              const learningStackArray = user.learningStackArray

              learningStackArray.push(learningStack.id)

            console.log('Learning stack has been added!')
            user.save()
            res.redirect('/learning-stacks')
        }catch(err){
            console.log(err)
        }
    },
    deleteLearningStack: async (req, res) => {
        try {
          // Delete learning stack from db
          await LearningStackExport.remove({ _id: req.params.id });
          console.log("Deleted Post");
          res.redirect("/learning-stacks");
        } catch (err) {
          res.redirect("/learning-stacks");
        }
      },
      updatePublic: async (req, res) => {
        
        console.log("updatePublic running...")


        // Find learning stack that we're updating
        const learningStackToUpdate = await LearningStackExport.findById(req.body.learningStackIdFromJSFile)

        console.log(learningStackToUpdate)

        // If public is set to public, make it private

        console.log(learningStackToUpdate.public)

        if (learningStackToUpdate.public == "public"){
            learningStackToUpdate.update({public: "private"})
        }else{
            // If public is set to private, make it public
            learningStackToUpdate.update({public: "public"})
        }
        
      }
}    