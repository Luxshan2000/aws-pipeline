const Item = require('../modals/Item')



exports.addItem = async (req,res) =>{
    try{

        const { name } =  req.body

        const newItem = new Item({ name})
        await newItem.save()


        console.log("Successfully meal added!")



    } catch(error){
        console.log("There is an error occured in addMeal!")
    }
}