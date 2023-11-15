// client/src/components/Page1.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Page1 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from API
    axios.get('/api/sender-search')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Page 1</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Page1;
