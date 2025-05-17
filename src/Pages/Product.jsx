import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Updatedata from "../Components/Updatedata";
import Sidebar from "../Components/Sidebar";
import Pagination from "../Components/Pagination";

const Product = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Pagination
  const [page, setpage] = useState(1);
  const [totalPages, settotalPages] = useState(1);

  // Sorting & Search
  const [order, setOrder] = useState(null);
  const [search, setSearch] = useState("");
  const [searchParam, setsearchParam] = useSearchParams();

  const paramaObj = {
    category: searchParam.getAll("category"),
    _sort: "price",
    _order: order,
    q: search,
    _page: page,
    _limit: 8,
  };

  const fetchData = () => {
    setLoading(true);
    axios
      .get("http://localhost:3000/products", {
        params: paramaObj,
      })
      .then((res) => {
        setData(res.data);
        settotalPages(Math.ceil(res.headers["x-total-count"] / 8));
        setLoading(false);
      })
      .catch(() => {
        setError("Something went wrong");
        setLoading(false);
      });
  };

  useEffect(() => {
    const id = setTimeout(() => {
      fetchData(paramaObj);
    }, 800);

    return () => {
      clearTimeout(id);
    };
  }, [order, search, searchParam, page]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/products/${id}`)
      .then(() => {
        alert("Data Deleted Successfully");
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (loading) return <h1 style={{ textAlign: "center" }}>Loading...</h1>;
  if (error) return <h1 style={{ textAlign: "center", color: "red" }}>{error}</h1>;

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f4f6f8", minHeight: "100vh", paddingBottom: "40px" }}>
      {/* Search and Sort */}
      <div
        style={{
          display: "flex",
          width: "60%",
          margin: "30px auto",
          justifyContent: "space-between",
          padding: "10px 20px",
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <input
          type="text"
          placeholder="Search product here..."
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            width: "60%",
            fontSize: "16px",
          }}
        />
        <div>
          <button
            onClick={() => setOrder("desc")}
            style={buttonStyle}
          >
            High to Low
          </button>
          <button
            onClick={() => setOrder("asc")}
            style={{ ...buttonStyle, marginLeft: "15px" }}
          >
            Low to High
          </button>
        </div>
      </div>

      {/* Product List */}
      <div style={{ display: "flex", marginTop: "30px" }}>
        <div style={{ width: "23%", paddingLeft: "20px" }}>
          <Updatedata />
          <Sidebar />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            textAlign: "center",
            margin: "20px auto",
            width: "75%",
          }}
        >
          {data.map((el) => (
            <div
              key={el.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "15px",
                backgroundColor: "#fff",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <h3 style={{ fontSize: "18px", color: "#333" }}>{el.title}</h3>
              <Link to={`/product/${el.id}`}>
                <img
                  src={el.image}
                  alt={el.title}
                  height="200px"
                  style={{ objectFit: "contain", maxWidth: "100%", borderRadius: "5px" }}
                />
              </Link>
              <h4 style={{ color: "#777" }}>{el.category}</h4>
              <p style={{ fontSize: "14px", color: "#444", height: "60px", overflow: "hidden", textOverflow: "ellipsis" }}>
                <b>{el.description}</b>
              </p>
              <h3 style={{ color: "#0b8457" }}>${el.price}</h3>
              <button
                onClick={() => handleDelete(el.id)}
                style={{
                  marginTop: "10px",
                  backgroundColor: "#ff4d4d",
                  color: "white",
                  border: "none",
                  padding: "8px 16px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div style={{ margin: "auto", width: "30%", textAlign: "center" }}>
        <Pagination
          current={page}
          total={totalPages}
          onChange={(newpage) => setpage(newpage)}
        />
      </div>
    </div>
  );
};

const buttonStyle = {
  padding: "10px 15px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  fontSize: "14px",
  cursor: "pointer",
  fontWeight: "bold",
};

export default Product;
