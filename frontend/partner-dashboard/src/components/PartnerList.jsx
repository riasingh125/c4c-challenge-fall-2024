// src/components/PartnerList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PartnerTile from './PartnerTile';
import Grid from '@mui/material/Grid';


/*
  Component to display a list of partners
*/
const PartnerList = ({partners, deletePartner}) => {

  if(!Array.isArray(partners)) {
    return <p>No partners available</p>;
  }

  return (
    <div>
      <ul>
        <Grid container justify = "center" alignItems = "flex-start" spacing={2}>
        {partners.map((partner) => (
          <PartnerTile key={partner._id} partnerData={partner} deletePartner={deletePartner} />
        ))}
        </Grid>
      </ul>
    </div>
  );
};

export default PartnerList;
