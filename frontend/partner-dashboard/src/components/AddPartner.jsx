import React, { useState } from 'react';
import axios from 'axios';
import { set } from 'mongoose';

const AddPartner = ({ fetchPartners }) => {
  const [partner, setPartner] = useState({
    name: '',
    logoURL: '',
    description: '',
    active: true
  });

  const [isVisible, setVisible] = useState(false);

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    setPartner(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/partners', partner);
      fetchPartners(); // Refresh the list of partners
      setPartner({ name: '', logoURL: '', description: '', active: true }); // Reset form to initial state
      setVisible(false); // Hide the form
    } catch (error) {
      console.error('Error adding partner:', error);
    }
  };

  const toggleVisibility = () => {
    setVisible(!isVisible);
  };

  return (
    <>
      <button className='minimize-button' onClick={toggleVisibility}>
        {isVisible ? '— Minimize Form' : '+ Add Partner'}
      </button>
      {isVisible && (
        <div className='form-group' style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1001, backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}>
          <h1>Add New Partner</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input className="input-field" name="name" type="text" value={partner.name} onChange={handleChange} required />
            </div>
            <div>
              <label>Logo URL:</label>
              <input className="input-field" name="logoURL" type="text" value={partner.logoURL} onChange={handleChange} required />
            </div>
            <div>
              <label>Description:</label>
              <textarea className="input-field" name="description" value={partner.description} onChange={handleChange} required />
            </div>
            <div>
              <label>Active:</label>
              <input className="input-field" name="active" type="checkbox" checked={partner.active} onChange={handleChange} />
            </div>
            <button type="submit" className="add-partner-button">Add Partner</button>
          </form>
        </div>
      )}
    </>
  );
};

export default AddPartner;
