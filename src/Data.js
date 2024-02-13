import React, { useState, useEffect } from 'react';
import { Timestamp, addDoc, collection, getDocs } from 'firebase/firestore';
import db from './firebaseConfig';
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";



function Data() {
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [dateDD, setDateDD] = useState("");
  const [dateMM, setDateMM] = useState("");
  const [dateYYYY, setDateYYYY] = useState("");

  const handlePushData = async () => {

    try {
      await addDoc(collection(db, "history"), {
        item: item, 
        price: price, 
        date: Timestamp.fromDate(new Date(dateYYYY, dateMM, dateDD))
      });

      setItem("");
      setPrice("");
      setDateDD("");
      setDateMM("");
      setDateYYYY("");
    } catch(error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={handlePushData}>Push Data to Firestore</button>
      <div>
        <input value={item} onChange={e => setItem(e.currentTarget.value)} placeholder='item' />
        <input value={price} type='number' onChange={e => setPrice(e.currentTarget.value)} placeholder='price' />
        
        <input value={dateDD} onChange={e => setDateDD(e.currentTarget.value)} placeholder='day' />
        <input value={dateMM} onChange={e => setDateMM(e.currentTarget.value)} placeholder='month' />
        <input value={dateYYYY} onChange={e => setDateYYYY(e.currentTarget.value)} placeholder='year' />
      </div>
    </div>
  );
}

export default Data;

