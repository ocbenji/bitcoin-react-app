import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Main() {
    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:3001/api/data') 
  
        .then(response => {
          setData(response.data);
          console.log(response);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);
  
    return (
      <div>
        <h1>Images from The Booth</h1>
        <ul>
        {data.map(item => (
            <li key={item.ID}>{item.Name}<img src={item.Image_Thumb_Location} /></li>          
          ))}
        </ul>
      </div>
    );
  }

export default  Main;