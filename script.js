var cart = [
{
  name: 'banana',
  price: 1,
  taxed: true
},
{
  name: 'salmon',
  price: 20.72,
  taxed: true
},
{
  name: 'yogurt',
  price: 4.49,
  taxed: true
},
{
  name: 'lettuce',
  price: 2.00,
  taxed: true
},
{
  name: 'blueberries',
  price: 4.39,
  taxed: true
},
{
  name: 'asparagus',
  price: 4.49,
  taxed: true
},
{
  name: 'potatoes',
  price: 3.49,
  taxed: true
},
{
  name: 'ginger root',
  price: 1.79,
  taxed: true
},
{
  name: 'brussel sprouts',
  price: 3.49,
  taxed: true
},
{
  name: 'curry powder',
  price: 4.99,
  taxed: true
},

];

/*  TOTAL  */

var total = 0;

cart.forEach(function(i){
    document.write(i.name + '<br/>');
    document.write(i.price + '<br/>');

    total += i.price;
});

console.log(total.toFixed(2));


/*  Tax  */

var taxTotal = 0;

cart.forEach(function(t){
  if(t.taxed === true) {
    taxTotal += t.price * 0.06;
  }
});

console.log(taxTotal.toFixed(2));

//To USER

document.write('<h3>'+"Your Subtotal is: $" + total.toFixed(2) + '</h3>' + '<br/>');
document.write('<h3>'+"Your tax is: $" + taxTotal.toFixed(2) + '</h3>' + '<br/>');

document.write('<h3>'+ "Your total payment is: $" + (total + taxTotal).toFixed(2) + '</h3>')
