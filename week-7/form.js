import React, { useState } from 'react';

function ValidatedFormComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email || !isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email';
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // ... (isValidEmail function)

  return (
    <form onSubmit={handleSubmit}>
      {/* ... (form fields with error messages) */}
    </form>
  );
}

export default ValidatedFormComponent;