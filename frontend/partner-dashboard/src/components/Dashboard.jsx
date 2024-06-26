import { useState, useEffect } from 'react';
import PartnerTile from './PartnerTile';

/*
  The top-level component containing everything relevant to the dashboard,
  including information on each partner
*/
function Dashboard() {

  const [partners, setPartners] = useState({});

  // Load all partners on initial page load 
  useEffect(() => {
    fetch('http://localhost:4000/partners', {
      method: 'GET',
    })
    .then((res) => res.json())
    .then(data => {
      console.log("FETCHED: ", data)
      setPartners(data)
    })
    .catch((error) => console.error('Error fetching partners:', error))
  }, [])

  return (
    <div id="main-content">
      <div id="main-partners-grid">
      {Array.isArray(partners) ? partners.map(partner => (
          <PartnerTile key={partner._id} partnerData={partner} />
       )) : <p>No partners available</p>}
      </div>
    </div>
  )
}

export default Dashboard;