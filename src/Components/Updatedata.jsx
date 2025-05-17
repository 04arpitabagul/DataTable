import axios from 'axios';
import React, { useState } from 'react';

const Updatedata = () => {
  const initialState = {
    id: '',
    title: '',
    price: '',
    description: '',
    category: '',
    image: ''
  };
  const [postData, setpostData] = useState(initialState);

  const handleChange = (e) => {
    setpostData({ ...postData, [e.target.name]: e.target.value });
  };

  const { id, title, price, description, category, image } = postData;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/products/${id}`, postData)
      .then((res) => {
        alert('Product data updated successfully');
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        marginBottom: '20px'
      }}
    >
      <h3 style={{ textAlign: 'center', color: '#333' }}>Update Product</h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input
          type="text"
          name="id"
          value={id}
          onChange={handleChange}
          placeholder="Product ID"
          style={inputStyle}
        />
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
          placeholder="Title"
          style={inputStyle}
        />
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleChange}
          placeholder="Description"
          style={inputStyle}
        />
        <input
          type="text"
          name="image"
          value={image}
          onChange={handleChange}
          placeholder="Image URL"
          style={inputStyle}
        />
        <select name="category" value={category} onChange={handleChange} style={inputStyle}>
          <option value="select">Select Category</option>
          <option value="Male Cloths">Male</option>
          <option value="Women Cloths">Women</option>
          <option value="Electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
        </select>
        <input
          type="number"
          name="price"
          value={price}
          onChange={handleChange}
          placeholder="Price"
          style={inputStyle}
        />
        <input
          type="submit"
          value="Update"
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '10px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        />
      </form>
    </div>
  );
};

const inputStyle = {
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  fontSize: '16px'
};

export default Updatedata;
