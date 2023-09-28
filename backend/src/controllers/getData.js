const Item = require('../modals/Item')


exports.getAllItem = async (req,res)=>{
    
    try{
        const   items = await Item.find({});
        res.json(items)
    }catch(err){
        res.json(err)
    }
    
}