import './App.css'
import Dashboard from './components/Dashboard'
import PartnersList from './components/PartnerList'
import AddPartner from './components/AddPartner'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';

function App() {
  const [partners, setPartners] = useState([]);
  const [filteredPartners, setFilteredPartners] = useState([]);

  const fetchPartners = async () => {
    try {
      const response = await axios.get('http://localhost:4000/partners');
      const partnerData = Array.isArray(response.data) ? response.data : [];
      setPartners(partnerData);
      setFilteredPartners(partnerData); // Initialize with all partners
    } catch (error) {
      console.error('Error fetching partners:', error);
      setPartners([]);
      setFilteredPartners([]);
    }
  };

  const deletePartner = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/partners/${id}`);
      fetchPartners(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting partner:', error);
    }
  };

  useEffect(() => {
    fetchPartners();
  }, []);


  return (
    <>
    <div>
      <h1 className="title">
        C4C: Projects
      </h1>
      <div className="App">
        <AddPartner fetchPartners={fetchPartners} />
        <h1 className='title'>
          Partner Organizations
          </h1>
        <SearchBar partners={partners} setFilteredPartners={setFilteredPartners}/>
        <PartnersList partners={filteredPartners} deletePartner={deletePartner}/>
      </div>
    </div>
    </>
  );
}

export default App;
