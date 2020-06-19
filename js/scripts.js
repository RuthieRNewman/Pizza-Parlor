//business logic

function Pizza (size, toppings, finalPizza) {
  this.size = size
  this.toppings = [];
  this.finalPizza = [];
}

Pizza.prototype.size = function(size){
  if (userPizzaSize === 1){
  let basePrice = 15
}else if (userPizzaSize === 2) {
  let basePrice = 20
}
}

Pizza.prototype.toppings = function(toppings) {
}






//UI Logic
$(document).ready(function(){
  $("form#pizzaSizeAndToppings").submit(function(event){
    event.preventDefault();
      const userPizzaSize = $("#pizza-size").val();
      console.log(userPizzaSize);
      let userPizzaToppings = [];
      $("input:checkbox[name=pizza-toppings]:checked").each(function(){
        const PizzaToppings = $(this).val();
        userPizzaToppings.push(PizzaToppings)
        console.log(userPizzaToppings);
      });
  });
});

  
    

