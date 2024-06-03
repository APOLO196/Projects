function summarizeOrders(orders) {
    const productSummary = {};

   
    for (let i = 0; i < orders.length; i++) {
        const order = orders[i];

     
        for (let j = 0; j < order.items.length; j++) {
            const item = order.items[j];

           
            if (productSummary[item.product]) {
                productSummary[item.product] += item.quantity;
            } else {
             
                productSummary[item.product] = item.quantity;
            }
        }
    }

   
    return productSummary;
}

// Пример за използване на функцията
const orders = [
  { customer: 'Ivan', items: [{ product: 'apple', quantity: 2 }, { product: 'banana', quantity: 3 }] },
  { customer: 'Maria', items: [{ product: 'apple', quantity: 1 }, { product: 'orange', quantity: 5 }] },
  { customer: 'Peter', items: [{ product: 'banana', quantity: 2 }, { product: 'apple', quantity: 4 }] },
  { customer: 'John', items: [{ product: 'orange', quantity: 1 }, { product: 'banana', quantity: 1 }] }
];

const summary = summarizeOrders(orders);

console.log(summary); // { apple: 7, banana: 6, orange: 6 }