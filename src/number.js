import { useState, useEffect, useRef } from "react";
import "./number.css";

export default function Number() {
  const nums = [];
  for (var i = 0, len = 40; i < len; i++) {
    nums.push(<div className="num">{i}</div>);
  }

  const prevX = useRef(null);

  const [position, setPosition] = useState(100);
  const [moving, setMoving] = useState(false);

  const onTouchStart = () => {
    setMoving(true);
  };
  const onTouchEnd = () => {
    setMoving(false);
  };

  useEffect(() => {
    if (moving) {
      const handler = (event) => {
        const touch = event.touches[0];
        if (typeof prevX.current !== "number") {
          prevX.current = touch.clientX;
          return;
        }

        const diff = touch.clientX - prevX.current;
        prevX.current = touch.clientX;

        setPosition((pos) => pos + diff);
      };
      document.addEventListener("touchmove", handler);
      return () => {
        prevX.current = null;
        document.removeEventListener("touchmove", handler);
      };
    }

    setPosition((position) => Math.round(position / 50) * 50);
  }, [moving]);

  return (
    <div className="number" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <div
        style={{ transform: `translate(${position}px, 0px)` }}
        className="ninternal"
      >
        {nums}
      </div>
    </div>
  );
}
