import React, { useState } from 'react';

function ControlledForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    termsAgreed: false,
    language: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleCheckboxChange = (event) => {
    setFormData({
      ...formData,
      termsAgreed: event.target.checked,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} />
      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} />
      <label>Terms and Conditions:</label>
      <input type="checkbox" name="termsAgreed" checked={formData.termsAgreed} onChange={handleCheckboxChange} />
      <label>Language:</label>
      <select name="language" value={formData.language} onChange={handleChange}>
        <option value="">Select Language</option>
        <option value="English">English</option>
        <option value="Spanish">Spanish</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledForm;