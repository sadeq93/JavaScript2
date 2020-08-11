function takeOutLemons(basket) {
  return `"My mom bought me a fruit basket, containing ${basket.filter(fruit => fruit !== 'Lemon')}!" `;
}
const fruitBasket = ['Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon'];

console.log(takeOutLemons(fruitBasket));