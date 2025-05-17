import axios from "axios";
import React, { useState } from "react";

const Postdata = () => {
  const initialState = {
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  };
  const [postData, setpostData] = useState(initialState);

  const handleChange = (e) => {
    setpostData({ ...postData, [e.target.name]: e.target.value });
  };

  const { title, price, description, category, image } = postData;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/products", postData)
      .then((res) => {
        alert("Product data added successfully");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      style={{
        width: "30%",
        margin: "60px auto",
        textAlign: "center",
        border: "1px solid #ccc",
        padding: "30px",
        borderRadius: "15px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ marginBottom: "30px", color: "#333" }}>Add Product</h2>

      <form onSubmit={(e) => handleSubmit(e)}>
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
          name="image"
          value={image}
          onChange={handleChange}
          placeholder="Image URL"
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
        <select
          name="category"
          value={category}
          onChange={handleChange}
          style={{ ...inputStyle, cursor: "pointer" }}
        >
          <option value="select">Select category</option>
          <option value="Male Cloths">Male Cloths</option>
          <option value="Women Cloths">Women Cloths</option>
          <option value="Electronics">Electronics</option>
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
          value="Submit"
          style={{
            marginTop: "15px",
            padding: "10px 20px",
            borderRadius: "5px",
            backgroundColor: "#007bff",
            color: "white",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
          }}
        />
      </form>
    </div>
  );
};

// Shared input style
const inputStyle = {
  width: "90%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "15px",
};

export default Postdata;
