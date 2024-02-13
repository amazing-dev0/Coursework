import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from './firebaseConfig';
const data = {
  labels: ["Spent"],
  datasets: [
      {
          label: "Total earned",
          data: [300,500,100,500,300,200,100],
          backgroundColor: ["#f44336", "#9c27b0", "#03a9f4", "#8bc34a", "#ffc107","#9cn45a","#05a7f4"],
          borderColor: "#f4436",
          borderWidth: 1,
      },
  ],
};
const Info = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'data'));
        const mfData = [];
        querySnapshot.forEach((doc) => {
          mfData.push({ id: doc.id, ...doc.data() });
        });
        setData(mfData);
      } catch (error) {
        console.error('Error getting data: ', error.message);
      }
    };

    fetchData();
  }, []);

  return(
    <div className="div 2">
    <ul>
      {data.map((data) => (
        <li key={data.id}>
          <h1> welcome {data.Nane}</h1>
          <p>Spent: {data.Ammountspent}</p>
          <p>Total: {data.Ammount}</p>
          
          

        
        </li>
      ))}
    </ul>
    </div>
  );
};

export default Info;