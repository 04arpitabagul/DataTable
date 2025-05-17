import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Productdetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Error fetching product");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h2 style={loadingStyle}>Loading...</h2>;
  if (error) return <h2 style={errorStyle}>{error}</h2>;

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>{product.title}</h1>
      <img src={product.image} alt={product.title} style={imageStyle} />
      <p style={descriptionStyle}>{product.description}</p>
      <h3 style={priceStyle}>${product.price}</h3>
    </div>
  );
};

const containerStyle = {
  padding: "30px",
  textAlign: "center",
  width: "70%",
  margin: "auto",
  border: "1px solid #dcdcdc", 
  borderRadius: "8px", 
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", 
  backgroundColor: "#ffffff", 
};

const titleStyle = {
  fontSize: "2.5em",
  color: "#2c3e50", 
  marginBottom: "15px",
  fontFamily: "'Merriweather', serif", 
};

const imageStyle = {
  width: "300px",
  borderRadius: "8px", 
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)", 
  marginBottom: "20px",
};

const descriptionStyle = {
  fontSize: "1.2em",
  color: "#34495e", 
  lineHeight: "1.6",
  marginBottom: "20px",
  fontFamily: "'Lora', serif", 
};

const priceStyle = {
  fontSize: "1.5em",
  color: "#d4af37", 
  fontWeight: "bold",
};

const loadingStyle = {
  textAlign: "center",
  fontSize: "1.5em",
  color: "#2c3e50",
};

const errorStyle = {
  textAlign: "center",
  fontSize: "1.5em",
  color: "red",
};

export default Productdetail;
