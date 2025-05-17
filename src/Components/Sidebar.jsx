import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Sidebar = () => {
  // multilevel filtering
  const [searchparams, setsearchparams] = useSearchParams();

  const [gender, setgender] = useState(searchparams.getAll("category") || []);
  console.log(gender);

  const handlechange = (e) => {
    const { value } = e.target;

    let newarray = [...gender];

    if (gender.includes(value)) {
      newarray = gender.filter((el) => el !== value);
    } else {
      newarray.push(value);
    }
    setgender(newarray);
  };

  useEffect(() => {
    setsearchparams({ category: gender });
  }, [gender]);

  return (
    <div style={sidebarStyle}>
      <h3 style={headerStyle}>Filter Products Here..</h3>
      <div style={checkboxContainerStyle}>
        <label style={labelStyle}>
          <input
            type="checkbox"
            value={"men's clothing"}
            onChange={(e) => handlechange(e)}
            checked={gender.includes("men's clothing")}
            style={checkboxStyle}
          />
          Men's Clothing
        </label>
      </div>
      <div style={checkboxContainerStyle}>
        <label style={labelStyle}>
          <input
            type="checkbox"
            value={"women's clothing"}
            onChange={(e) => handlechange(e)}
            checked={gender.includes("women's clothing")}
            style={checkboxStyle}
          />
          Women's Clothing
        </label>
      </div>
      <div style={checkboxContainerStyle}>
        <label style={labelStyle}>
          <input
            type="checkbox"
            value={"electronics"}
            onChange={(e) => handlechange(e)}
            checked={gender.includes("electronics")}
            style={checkboxStyle}
          />
          Electronics
        </label>
      </div>
      <div style={checkboxContainerStyle}>
        <label style={labelStyle}>
          <input
            type="checkbox"
            value={"jewelery"}
            onChange={(e) => handlechange(e)}
            checked={gender.includes("jewelery")}
            style={checkboxStyle}
          />
          Jewelry
        </label>
      </div>
    </div>
  );
};

const sidebarStyle = {
  padding: "20px",
  backgroundColor: "#f8f9fa",
  border: "1px solid #dcdcdc",
  borderRadius: "8px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  width: "250px",
  margin: "20px 0",
};

const headerStyle = {
  fontSize: "1.5em",
  color: "#2c3e50",
  marginBottom: "15px",
  fontFamily: "'Merriweather', serif",
};

const checkboxContainerStyle = {
  marginBottom: "10px",
};

const labelStyle = {
  fontSize: "1.1em",
  color: "#34495e",
  fontFamily: "'Lora', serif",
  cursor: "pointer",
};

const checkboxStyle = {
  marginRight: "10px",
};

export default Sidebar;
