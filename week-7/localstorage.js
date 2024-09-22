import React, { useState, useEffect } from 'react';

function FormWithLocalStorage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form>
      <input type="text" name="name" value={formData.name} onChange={handleChange} />
      <input type="email" name="email" value={formData.email} onChange={handleChange} />
    </form>
  );
}

export default FormWithLocalStorage;