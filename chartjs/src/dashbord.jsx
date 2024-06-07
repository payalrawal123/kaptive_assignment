import React, { useEffect, useState } from 'react';
import axios from 'axios';

const getUniqueData = (products) => {
  let newVal = products.map((ele) => {
    return ele.category;
  });
  newVal = [...new Set(newVal)];
  return newVal;
};

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [view, setView] = useState('card');

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
        const uniqueCategories = getUniqueData(response.data);
        setCategories(uniqueCategories);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const filteredProducts = products
    .filter(product => selectedCategory === 'all' || product.category === selectedCategory)
    .filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="all">All Categories</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      <button onClick={() => setView(view === 'card' ? 'list' : 'card')}>
        Toggle View
      </button>
      <div className={view === 'card' ? 'product-list card-view' : 'product-list list-view'}>
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;