import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const MyPerformance = () => {
  const [series, setSeries] = useState([]);
  const [options, setOptions] = useState({
    title: { text: "Student Performance" },
    
    labels: ['Math',
      'English',
      'Accounting',
      'Economics',
      'Mechanics'
      ],
  });

  useEffect(() => {
    
    const Data = [
      { id: 1, marks: 85 },
      { id: 2, marks: 72 },
      { id: 3, marks: 91 },
      { id: 4, marks: 63 },
      { id: 5, marks: 79 },
    ];

    const series = Data.map(item => item.marks);
    setSeries(series);
  }, []);

  return (
    <div className="container mb-3">
     
      <Chart
        options={options}
        series={series}
        type="pie" 
        width={1000}
        height={400}
      />
    </div>
  );
};

export default MyPerformance;
