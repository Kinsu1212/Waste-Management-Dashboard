import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const data = {
  labels: ['CSU', 'Caltrans', 'Community College', 'Fair', 'Park', 'Veteran', 'Correctional','GSA'],
  datasets: [
    {
      label: 'Disposal Tons',
      data: [0.12, 1.04, 0.09, 0.2, 0.2, 0.39, 0.18, 0.11],
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(255, 205, 86, 0.7)',
        'rgba(201, 203, 207, 0.7)',
        'rgba(54, 162, 235, 0.7)',
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
        'rgb(54, 162, 235)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 1,
        ticks: {
            stepSize: 0.2,  
            callback: function(value) {
            return value.toFixed(1)+"M";
          }
        }
      },
    },
  };

function PolarChart() {
  return (
    <div style={{ width: '300px', height: '300px' }}>
        <h5 style={{marginLeft: '50px',textAlign:'center'}}>Total Waste over Agency Types</h5>
      <PolarArea data={data} options={options} />
    </div>
  );
}

export default PolarChart;
