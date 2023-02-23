const {LearningStackExport, LearningResourcesExport} = require('../models/Learning-stacks-models')
const User = require('../models/User')

module.exports = {
    getFeed: async (req,res)=>{
        try{
            
            res.render('feed.ejs')

        }catch(err){ 
            console.log(err)
        }
    }
}
