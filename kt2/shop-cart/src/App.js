

import React, { useState } from 'react';
import ProductItem from './components/ProductItem';
import './App.css';

const App = () => {

  const initialData = [
    { id: 1, name: 'Велосипед', price: 1000, count: 1 },
    { id: 2, name: 'Самокат', price: 700, count: 1 },
    { id: 3, name: 'Ролики', price: 1300, count: 2 },
    { id: 4, name: 'Сноуборд', price: 19000, count: 4 },
  ];

  const [data, setData] = useState(initialData);

  const handleIncrement = (product) => {

    if (product.count < 25) {
         const updatedData = data.map((item) =>
        item.id === product.id ? { ...item, count:item.count + 1 } :  item
      );
      setData(updatedData);
    }
  };

   const handleDecrement = (product) => {
    if (product.count > 0) {
      const updatedData = data.map((item) =>
        item.id === product.id ? {  ...item, count: item.count - 1 } : item
      );
      setData(updatedData);
    }
  };

  const updatedData = data.filter((item) => item.count > 0);

  const handleAddProduct = () => {
     const name = prompt('Введите название товара:');
    const priceStr = prompt('Введите цену товара:');

    if (name && !isNaN(parseFloat(priceStr))) {
      const price = parseFloat(priceStr);



      const newProduct = {
        id: Date.now(),
        name,
        price,
        count: 1,
      };


      setData([...updatedData, newProduct]);
    }
  };

  return (

    <div className="App">
      <h1>Список товаров</h1>

      <div className='button-container'>
        <button onClick={handleAddProduct} className='add-button'>Добавить товар</button>
      </div>

      <div className="product-list">
        {updatedData.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
        ))}
        
      </div>
    </div>
  );
};

export default App;
