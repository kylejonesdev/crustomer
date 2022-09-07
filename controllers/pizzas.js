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
        let toppingsArr = [];
        try{            
            // For premade pizzas, assign specific values
            switch(req.body.pizzaItem) {
                case 'Pepperoni Pizza':
                    req.body.pizzaPrice = 15;
                    toppingsArr.push("pepperoni");
                    break;
                case 'cheese':
                    req.body.pizzaPrice = 12;
                    // req.body.pizzaToppings = 'Cheese';
                    break;
                case 'Chicken Pizza':
                    req.body.pizzaPrice = 18;
                    toppingsArr.push("chicken");
                    break;
                default:
                    break;
            }      
            await Pizza.create({pizza: req.body.pizzaItem, toppings: req.body.topping, size: req.body.size, price: req.body.pizzaPrice, userId: req.user.id})
            console.log('Pizza has been added!')

            //Ingredients returns a string when one custom ingredient is added, but an array if more than one ingredient is added.
            //The below is hacky garbage to address this.
            if(req.body.toppings) {
                Array.isArray(req.body.toppings) ? req.body.toppings.forEach(item => toppingsArr.push(item)) : toppingsArr.push(req.body.toppings);
            }
            console.log(toppingsArr);
            await Pizza.create(
                {
                    pizza: req.body.pizzaItem,
                    toppings: toppingsArr,
                    price: req.body.pizzaPrice,
                    userId: req.user.id
                }
            )
            console.log(`${req.body.pizzaItem} added.`)
            res.redirect('/pizzas')
        }catch(err){
            console.log(err)
        }
    },
    deleteIngredient: async (req, res) => {
        const ingredientName = req.body.ingredientName.toLowerCase();
        try{
            await Pizza.findOneAndUpdate({_id:req.body.pizzaIdFromJSFile}, {
                $pullAll: { toppings: [ingredientName]}
            })
            console.log(`Ingredient deleted: ${ingredientName}`);
            res.redirect('/pizzas');
        }catch(err){
            console.log(err);
        }
    },
    // markComplete: async (req, res)=>{
    //     try{
    //         await Pizza.findOneAndUpdate({_id:req.body.pizzaIdFromJSFile},{
    //             completed: true
    //         })
    //         console.log('Marked Complete')
    //         res.json('Marked Complete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // markIncomplete: async (req, res)=>{
    //     try{
    //         await Pizza.findOneAndUpdate({_id:req.body.pizzaIdFromJSFile},{
    //             completed: false
    //         })
    //         console.log('Marked Incomplete')
    //         res.json('Marked Incomplete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
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