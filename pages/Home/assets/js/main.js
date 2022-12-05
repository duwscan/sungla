// test 2
console.log('Duc an');
// render product
const productList = new ListGlass();
// Some eyes Wear Product
const featureProducts = document.getElementById('feature-item');
ListGlass.groupByFeature('Recommend').forEach((el) => {
  featureProducts.appendChild(renderProduct(el));
});
// new-arrivals
const newArrivalProducts = document.getElementById('new_arrivals-item');
ListGlass.groupByFeature('New Arrival').forEach((el) => {
  newArrivalProducts.appendChild(renderProduct(el));
});
