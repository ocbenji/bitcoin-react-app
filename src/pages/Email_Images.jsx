import React, { useState, useEffect } from "react";
import axios from "axios";

function Email_Images() {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://bitcoinbenji.com/api/AccountImages.php?email=${email}`
      );
      setData(response.data);
      console.log(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <div>
        <h1>Images from The Booth</h1>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={fetchData}>Check for Images</button>
      </div>
      <div>
        <ul>
          {data.map((item) => (
            <li key={item.ID}>
              <br />
              <img height={240} width={320} src={item.Image_Link} />{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Email_Images;
