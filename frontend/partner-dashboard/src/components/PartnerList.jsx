// src/components/PartnerList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PartnerTile from './PartnerTile';
import Grid from '@mui/material/Grid';

const PartnerList = ({partners, fetchPartners}) => {


  const deletePartner = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/partners/${id}`);
      fetchPartners();
    } catch (error) {
      console.error('Error deleting partner:', error);
    }
  };

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
