var pizza = {
    crustType: ["deep dish", "hand tossed"],
    sauceType: ["traditional", "marianara"],
    cheeses: ["mozzarella", "feta"],
    toppings: ["pepperoni", "sausage", "mushrooms", "olives", "onions","ham", "pineapple"]
};



function pizzaOven(crustType,sauceType,cheeses,toppings){
    var pizza = {};
    pizza.crust = crustType;
    pizza.sauce = sauceType;
    pizza.cheese=cheeses;
    pizza.topping=toppings;
    return pizza;
}
var p1= pizzaOven("deep dish", "traditional", "mozzarella", "pepperoni", "sausage");
console.log(p1);

var p2 = pizzaOven(this.pizza.crust[1],this.pizza.sauce[1], this.pizza.cheese[0,1], this.pizza.toppings[2,3,4]);
console.log(p2);

var p3 = pizzaOven(this.pizza.crust[0],this.pizza.sauce[1], this.pizza.cheese[0], this.pizza.toppings[5,6]);
console.log(p3);

var p4 = pizzaOven(this.pizza.crust[1],this.pizza.sauce[0],this.pizza.cheese[0],this.pizza.toppings[0,4,6])
    console.log(p4);