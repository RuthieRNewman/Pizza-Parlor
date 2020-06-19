
//business logic fo pizza
function Pizza (size, toppings, total) {
  this.size = size;
  this.toppings = {
    'topping1' : "olives",
    'topping2' : "mushrooms"
};
this.total = total
}


Pizza.prototype.sizeCost = function(size) {
  }



//UI Logic
$(document).ready(function(){ 
 
  $("form#pizzaSizeAndToppings").submit(function(event){
    event.preventDefault();
      
    const userPizzaSize = $("#pizza-size").val(); 

    let userPizzaToppings = [];
    $("input:checkbox[name=pizza-toppings]:checked").each(function(){
    const userPizzaToppingSelection = $(this).val();
    let userPizzaToppings = userPizzaToppingSelection;
    console.log(userPizzaToppings);
    })
    let newUserPizza = new Pizza(userPizzaSize, userPizzaToppings,0)
    console.log(newUserPizza);
    
    }); 
  });