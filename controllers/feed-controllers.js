const {LearningStackExport, LearningResourcesExport} = require('../models/Learning-stacks-models')
const { db } = require('../models/User')
const User = require('../models/User')

module.exports = {
    getFeed: async (req,res)=>{
        try{
     
            const learningStacks = await LearningStackExport.find({ public: 'public' })
                
                // .sort({ createdAt: 'desc' })


            res.render('feed.ejs', {
                learningStacks
            })

        }catch(err){ 
            console.log(err)
        }
    }
}
