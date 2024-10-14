import React, { useRef, useState, useEffect } from "react";
import { DndContext } from "@dnd-kit/core";
import { Droppable } from "./Droppable.jsx";
import Draggable from "./Draggable.jsx";
import axios from "axios";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "bootstrap/dist/css/bootstrap.min.css";

function DragTest() {
  useEffect(() => {
    axios
      .get("https://bitcoinbenji.com/api/Backgrounds.php")
      .then((response) => {
        setData(response.data);
        //console.log(response);
      });
  });

  const [parent, setParent] = useState(null);
  const draggableMarkup = (
    <Draggable id="draggable">
      <CardGroup>
        <Card
          bg="light"
          border="dark"
          style={{ width: "18rem" }}
          className="mb-2"
          text="dark"
        >
          <Card.Img
            variant="top"
            src="https://theboothmke.com/menumaker/Backgrounds/Vegas/Thumbnails/0.jpg"
          />
          <Card.Body>
            <Card.Title>Test</Card.Title>
            <Card.Text>This is the Text</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Card Footer</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </Draggable>
  );

  const [data, setData] = useState([]);

  const containerRef = useRef(null);

  return (
    <div>
      <div ref={containerRef} className="container">
        <DndContext onDragEnd={handleDragEnd}>
          {parent === null ? draggableMarkup : null}
          {data.map((item) => (
            <Droppable key={item.ID} id={item.ID}>
              <CardGroup>
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
              {parent === item.id ? draggableMarkup : "Drop here"}
            </Droppable>
          ))}
        </DndContext>
      </div>
    </div>
  );

  function handleDragEnd({ over }) {
    setParent(over ? over.id : null);
  }
}

export default DragTest;
