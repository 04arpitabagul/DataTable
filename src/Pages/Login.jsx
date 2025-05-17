import React from 'react';

const Login = () => {
  return (
    <div
      style={{
        width: '350px',
        margin: '80px auto',
        padding: '30px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
      }}
    >
      <form>
        <h2 style={{ marginBottom: '30px', color: '#333' }}>Sign In</h2>

        <input
          type="email"
          placeholder="Email"
          required
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          required
          style={inputStyle}
        />
        <input
          type="submit"
          value="Login"
          style={{
            width: '100%',
            padding: '10px',
            marginTop: '20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        />
      </form>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '15px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  fontSize: '16px',
  boxSizing: 'border-box'
};

export default Login;
