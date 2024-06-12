import React from 'react';

/*
  A block for a single partner, containing information for them
  along with any tools to manage said information
*/


function PartnerTile({ partnerData, deletePartner }) {

  return (
    <div className="partner-tile">
      <img className="partner-thumbnail" src={partnerData.logoURL} alt="" />
      <hr />
      <div className="partner-info">
        <h3> {partnerData.name}</h3>
        <p style={{color: 'red'}}> 
          {partnerData.active ? 'Active': 'Inactive'} 
          </p>
        <p>{partnerData.description}</p>
        <button className='delete-button'
        onClick={() => deletePartner(partnerData._id)}>Delete</button>
      </div>
    </div>
  )
}

export default PartnerTile;

