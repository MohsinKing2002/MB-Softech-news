import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Box({ img, heading, body }) {
  const [toggle, setToggle] = useState(true);
  return (
    <Card className="box">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title className="mt-2">{heading}</Card.Title>
        <br />
        <Card.Text style={{ padding: "8px", textAlign: "justify" }}>
          {toggle ? body?.slice(0, 200) + "...." : body}
        </Card.Text>
        {toggle ? (
          <Button onClick={() => setToggle(false)} variant="primary">
            Read More..
          </Button>
        ) : (
          <Button onClick={() => setToggle(true)} variant="primary">
            Read less..
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default Box;
