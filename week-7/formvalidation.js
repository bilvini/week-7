import React, { useState } from 'react';

function ValidatedForm() {
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

  // ... (handleChange, isValidEmail functions)

  return (
    <form onSubmit={handleSubmit}>
      {/* ... (form fields with error messages) */}
    </form>
  );
}

export default ValidatedForm;