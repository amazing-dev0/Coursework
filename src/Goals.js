import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from './firebaseConfig';
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
const data = {
  labels: ["January", "Febuary", "March", "April", "May","June","July"],
  datasets: [
      {
          label: "Amount saved each month",
          data: [300,500,100,500,300,200,100],
          backgroundColor: ["#f44336", "#9c27b0", "#03a9f4", "#8bc34a", "#ffc107","#9cn45a","#05a7f4"],
          borderColor: "#f4436",
          borderWidth: 1,
      },
  ],
};
const Goals = () => {
  const [Mygoal, setGoal] = useState([]);

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'goals'));
        const mfData = [];
        querySnapshot.forEach((doc) => {
          mfData.push({ id: doc.id, ...doc.data() });
        
        });
        setGoal(mfData);
      } catch (error) {
        console.error('Error getting data: ', error.message);
      }
    };
    

    fetchGoals();
  
   }, []);




  return(
    <div className="div 2">
    <ul>
      {Mygoal.map((Mygoal) => (
        <li key={Mygoal.id}>
          <h1> Goal: {Mygoal.nane}</h1>
          <p>Total: {Mygoal.cost}</p>
          <p>Saved: {Mygoal.paid}</p>
        </li>
      ))}
      <Bar data={data} />
    </ul>
    

    </div>
  );
};

export default Goals;

