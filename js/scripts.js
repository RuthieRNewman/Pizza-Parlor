
//business logic fo pizza
function Pizza (size, toppings, toppingInteger) {
  this.size = {
    size1 : "small",
    size2 : "large" 
   };
  this.toppings = {
    'topping1' : "olives",
    'topping2' : "mushrooms"
  };
};

Pizza.prototype.totalToppings = function(userPizzaToppings) { 
  let totalPizzaToppings
  for (let i=0; i<this.toppings.length; i++)
    if (this.toppings[i]){
      if (this.toppings[i] === topping1){
        let toppingTotal = 1
        console.log(toppingTotal);
      }
}
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
    });
    let newUserPizza = new Pizza(userPizzaSize, userPizzaToppings)
    console.log()
    }); 
  });