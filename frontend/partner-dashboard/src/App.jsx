import './App.css'
import Dashboard from './components/Dashboard'
import PartnersList from './components/PartnerList'
import AddPartner from './components/AddPartner'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [partners, setPartners] = useState([]);

  const fetchPartners = async () => {
    try {
      const response = await axios.get('http://localhost:4000/partners');
      setPartners(response.data);
    } catch (error) {
      console.error('Error fetching partners:', error);
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
        <PartnersList partners={partners} fetchPartners={fetchPartners} />
      </div>
    </div>
    </>
  );
}

export default App;
