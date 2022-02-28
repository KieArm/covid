import React from 'react';
import { Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({ data: { confirmed, deaths }, country }) => {
  
  const barChart = (
    confirmed ? (
      <Bar
        data={{
          labels: ['Totals'],
          datasets: [
            {
              label: 'Infected',
              backgroundColor: ['rgba(0, 0, 255, 0.5)'],
              data: [confirmed.value],
            },
            {
              label: 'Deaths',
              backgroundColor: ['rgba(255, 0, 0, 0.5)'],
              data: [deaths.value],
            },
          ],
        }}
        options={{
          legend: { display: true },
          title: { display: true, text: `Current state in ${country}` },
        }}
      />
    ) : null
  );

  return (
    <div className={styles.container}>
      {barChart}
    </div>
  );
};

export default Chart;