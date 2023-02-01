import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
 
  },
};

const labels = ['a', 'b', 'c','d'];

export const data = {
  labels,
  datasets: [
    {
      label: '',
      data: [4,9,6,16],
      backgroundColor: '#7661E2',
    },

  ],
};

export function Chart() {
  return <Bar options={options} data={data} />;
}
