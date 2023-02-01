import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {Line} from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
    },
  },
};

const labels = ['Oct 2021', 'Nov 2021', 'Dec 2021', 'Jan 2022', 'Feb 2022', 'Mar 2022'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Achieved',
      data: [6,7,6.5,6,7,5.8],
      borderColor: '#FB896B',
      backgroundColor: '#FB896B',
    },
    {
      label: 'Target',
      data: [4,5,4.4,3.5,5,4,6,5.1],
      borderColor: '#6956E5',
      backgroundColor: '#6956E5',
    },
        
  ],
};

export function LineChar() {
  return <Line options={options} data={data} />;
}
