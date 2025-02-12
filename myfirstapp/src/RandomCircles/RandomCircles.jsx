import { useState } from "react";

function RandomCircle() {
  const [circle, setCircle] = useState([]);
  const [color, setColor] = useState("white");

  function handleClick(e) {
    const { clientX, clientY } = e;
    const radius = Math.floor(Math.random() * 181) + 20;
    const newCircle = { x: clientX, y: clientY, radius };

    let newCircles = [...circle, newCircle];

    if (newCircles.length > 2) {
      newCircles = []
    }

    setCircle(newCircles);
    checkIntersection(newCircles);
  }

  const checkIntersection = (circles) => {
    if (circles.length < 2) {
      setColor("white");
      return;
    }

    const [c1, c2] = circles;
    const distance = Math.sqrt((c2.x - c1.x) ** 2 + (c2.y - c1.y) ** 2);

    if (distance < c1.radius + c2.radius) {
      setColor("green");
    } else {
      setColor("white");
    }
  };

  return (
    <div
      onClick={handleClick}
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: color,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {circle.map((circle, index) => (
        <div
          key={index}
          style={{
            width: circle.radius * 2,
            height: circle.radius * 2,
            borderRadius: "50%",
            backgroundColor: "aqua",
            position: "absolute",
            left: circle.x - circle.radius,
            top: circle.y - circle.radius,
          }}
        ></div>
      ))}
    </div>
  );
}

export default RandomCircle;
