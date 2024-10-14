import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "bootstrap/dist/css/bootstrap.min.css";

function Main() {
  const [data, setData] = useState([]);

  const containerRef = useRef(null);

  useEffect(() => {
    axios
      .get("https://bitcoinbenji.com/api/Backgrounds.php")

      .then((response) => {
        setData(response.data);
        //console.log(response);
      });
  });

  return (
    <div>
      <div ref={containerRef} className="container">
        {data.map((item) => (
          <div key={item.ID} className="pic">
            {item.Name}
            <br />
            <img height={240} width={320} src={item.Image_Thumb_Location} />
          </div>
        ))}
      </div>
      <h1>Images from The Booth</h1>
      <ul>
        {data.map((item) => (
          <CardGroup key={item.ID}>
            <Card
              bg="light"
              border="dark"
              style={{ width: "18rem" }}
              className="mb-2"
              text="dark"
            >
              <Card.Img variant="top" src={item.Image_Thumb_Location} />
              <Card.Body>
                <Card.Title>{item.Category}</Card.Title>
                <Card.Text>{item.Name}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  {item.Local_Image_Location}
                </small>
              </Card.Footer>
            </Card>
          </CardGroup>
        ))}
      </ul>
    </div>
  );
}

export default Main;
