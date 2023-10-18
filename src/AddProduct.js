import React, { useState } from 'react';

function AddProduct() {
  const [product, setProduct] = useState({ name: '', description: '', category: '', quantity: '', price: '' });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(product));
    console.log(product);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} placeholder="Name" />
      <input name="description" onChange={handleChange} placeholder="Description" />
      <input name="category" onChange={handleChange} placeholder="Category" />
      <input name="quantity" onChange={handleChange} placeholder="Quantity" />
      <input name="price" onChange={handleChange} placeholder="Price" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddProduct;