
//business logic fo pizza
function Pizza (size, toppings, total) {
  this.size = {
    size1 : "small",
    size2 : "large" 
   };
  this.toppings = {
    'topping1' : "olives",
    'topping2' : "mushrooms"
};
this.total = total
}


Pizza.prototype.totalCost = function(size, toppings) {
  
  }



//UI Logic
$(document).ready(function(){ 
 
  $("form#pizzaSizeAndToppings").submit(function(event){
    event.preventDefault();
      
    const userPizzaSize = $("#pizza-size").val(); 
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
    })
    let newUserPizza = new Pizza(userPizzaSize, userPizzaToppings,0)


    }); 
  });