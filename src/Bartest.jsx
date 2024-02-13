import React from "react";
import { Bar } from "react-chartjs-2";
import {Chart as ChartsJS } from "chart.js/auto";
const data = {
    labels: ["cats", "dogs", "fish", "birds", "hamsters"],
    datasets: [
        {
            label: "popularity",
            data: [50,15,20,15,10],
            backgroundColor: ["#f44336", "#9c27b0", "#03a9f4", "#8bc34a", "#ffc107"],
            borderColor: "#f4436",
            borderWidth: 1,
        },
    ],
};

export const Bartest = () => {
    return (
        <div>
            <Bar data={data} />
        </div>
    );
};