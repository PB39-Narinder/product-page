const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));


const products = [
  { name: 'Laptop', price: '83,000' },
  { name: 'Phone', price: '50,000' },
  { name: 'Headphones', price: '1000' },
  { name: 'Monitor', price: '15,000' },
];


app.get('/products', (req, res) => {
  res.render('products', { products });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
