const Pizza = require('../models/Pizza')

module.exports = {
    getPizzas: async (req,res)=>{
        console.log(req.user)
        try{
            const pizzaItems = await Pizza.find({userId:req.user.id})
            const itemsLeft = await Pizza.countDocuments({userId:req.user.id,completed: false})
            res.render('pizzas.ejs', {pizzas: pizzaItems, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createPizza: async (req, res)=>{
        try{
            await Pizza.create({pizza: req.body.pizzaItem, completed: false, userId: req.user.id})
            console.log('Pizza has been added!')
            res.redirect('/pizzas')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Pizza.findOneAndUpdate({_id:req.body.pizzaIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Pizza.findOneAndUpdate({_id:req.body.pizzaIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deletePizza: async (req, res)=>{
        console.log(req.body.pizzaIdFromJSFile)
        try{
            await Pizza.findOneAndDelete({_id:req.body.pizzaIdFromJSFile})
            console.log('Deleted Pizza')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    