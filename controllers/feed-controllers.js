const {LearningStackExport, LearningResourcesExport} = require('../models/Learning-stacks-models')
const { db } = require('../models/User')
const User = require('../models/User')

module.exports = {
    getFeed: async (req,res)=>{
        try{
            const allLearningStacks = []
            const allUserImages = []

            
            
            forEach(individualUser =>{
                allLearningStacks.push(individualUser.populate('learningStackArray'))
                allUserImages.push(individualUser.userImage)
            })

            res.render('feed.ejs', {
                allLearningStacks: allLearningStacks,
                allUserImages: allUserImages
            })
        }catch(err){ 
            console.log(err)
        }
    }
}
