const {LearningStackExport, LearningResourcesExport} = require('../models/Learning-stacks-models')
const { db } = require('../models/User')
const User = require('../models/User')

module.exports = {
    getFeed: async (req,res)=>{
        try{
            const allLearningStacks = []
            const allUserImages = []

            db.users.forEach(user =>{
                allLearningStacks.push(user.populate('learningStackArray'))
                allUserImages.push(user.userImage)
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
