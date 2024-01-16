import React from "react";

function PersonalInfo({ onChange }) {

  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ [name]: value });
  };

  return (
    <div>
      <h4>Personal Info</h4>
      <label htmlFor="firstName">Name 1:</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="lastName">Name 2:</label>
      <input 
        type="text"
        name="lastName" 
        onChange={handleChange} 
        className="form-control"
        />
         <label htmlFor="Email">Name 3:</label>
        <input 
        type="text"
        name="email" 
        onChange={handleChange} 
        className="form-control"
        />
    </div>
  );
}

export default PersonalInfo;