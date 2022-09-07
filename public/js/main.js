const deleteBtn = document.querySelectorAll('.del')
const pizzaItem = document.querySelectorAll('span.not')
const ingredientListItem = document.querySelectorAll('span.ingredient')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deletePizza)
})

Array.from(pizzaItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(ingredientListItem).forEach((el)=>{
    el.addEventListener('click', deleteIngredient)
})

async function deletePizza(){
    const pizzaId = this.parentNode.dataset.id
    try{
        const response = await fetch('pizzas/deletePizza', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'pizzaIdFromJSFile': pizzaId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function deleteIngredient(e) {
    const pizzaId = this.parentNode.dataset.id;
    try {
        const res = await fetch('pizzas/deleteIngredient', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'pizzaIdFromJSFile': pizzaId,
                'ingredientName': e.target.innerText
            })
        })
        location.reload();
    }catch(err){
        console.log(err);
    }
}

async function markComplete(){
    const pizzaId = this.parentNode.dataset.id
    try{
        const response = await fetch('pizzas/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'pizzaIdFromJSFile': pizzaId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const pizzaId = this.parentNode.dataset.id
    try{
        const response = await fetch('pizzas/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'pizzaIdFromJSFile': pizzaId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}