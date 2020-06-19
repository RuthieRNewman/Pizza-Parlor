
//business logic fo pizza
function Pizza (size, toppings) {
  this.size = {
    size1 : "small",
    size2 : "large" 
   };
  this.toppings = {
    'topping1' : "olives",
    'topping2' : "mushrooms"
  }
};

Pizza.prototype.totalToppings = function(userPizzaToppings) { 
}




//UI Logic
$(document).ready(function(){ 
  $("form#pizzaSizeAndToppings").submit(function(event){
    event.preventDefault();
      
    const userPizzaSize = $("#pizza-size").val(); 
    console.log(userPizzaSize);
    if (userPizzaSize === "small") {
      let baseCost = 15
      let baseCostInteger = parseInt(baseCost);
      console.log(baseCostInteger);
      
    }else if (userPizzaSize === "large") {
      let baseCost = 20
      let baseCostInteger = parseInt(baseCost);
      console.log(baseCostInteger);
      
    }

    let userPizzaToppings = [];
    $("input:checkbox[name=pizza-toppings]:checked").each(function(){
    const userPizzaToppingSelection = $(this).val();
    let userPizzaToppings = userPizzaToppingSelection;
    console.log(userPizzaToppings);
      if (userPizzaToppingSelection === "olives"){
      let topping1 = 1
      console.log(topping1);
      }else if (userPizzaToppingSelection === "mushrooms"){
      let topping2 = 2
      console.log(topping2);
      }
  });
    let newUserPizza = new Pizza(userPizzaSize, userPizzaToppings)
    console.log(newUserPizza.toppings.topping1)
    }); 
  });