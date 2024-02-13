import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from './firebaseConfig';
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";



function Data() {
  const handlePushData = () => {

    // Add data to a collection
    db.collection('history').add({
      // Data to push
      key: 'value',
      // Add more fields as needed
    })
    .then(() => {
      console.log('Data pushed to Firestore successfully');
    })
    .catch((error) => {
      console.error('Error pushing data to Firestore: ', error);
    });
  };

  return (
    <div>
      <button onClick={handlePushData}>Push Data to Firestore</button>
    </div>
  );
}

export default Data;

