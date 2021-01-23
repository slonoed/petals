import { useState, useEffect, useRef } from "react";
import "./number.css";

const cellSize = 50;
const maxPos = cellSize * 2.5;
const minPos = -cellSize * 16.5;

const minmax = (min, max) => (n) => Math.max(min, Math.min(max, n));

const minmaxPos = minmax(minPos, maxPos);

export default function NumberSelector({ onChange }) {
  const nums = [];
  for (var i = 0, len = 20; i < len; i++) {
    nums.push(<div className="num">{i * 2}</div>);
  }

  const prevX = useRef(null);

  const [position, setPosition] = useState(cellSize * 3);
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
        event.preventDefault();
        const clientX = event.touches
          ? event.touches[0].clientX
          : event.clientX;
        if (typeof prevX.current !== "number") {
          prevX.current = clientX;
          return;
        }

        const diff = clientX - prevX.current;
        prevX.current = clientX;

        setPosition((pos) => minmaxPos(pos + diff));
      };
      document.addEventListener("touchmove", handler, { passive: false });
      document.addEventListener("mousemove", handler, { passive: false });
      return () => {
        prevX.current = null;
        document.removeEventListener("touchmove", handler);
        document.removeEventListener("mousemove", handler);
      };
    }

    setPosition(
      (position) =>
        minmaxPos(
          (Math.round((position + cellSize / 2) / cellSize) - 0.5) * cellSize
        )
      //                        get current cell     conv to px     move to cell center
    );
  }, [moving]);

  useEffect(() => {
    if (!moving) {
      const num = ((maxPos - position) / cellSize) * 2;
      if (Number.isInteger(num)) {
        onChange(num);
      }
    }
  }, [position, moving]);

  return (
    <div
      className="number"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onMouseDown={onTouchStart}
      onMouseUp={onTouchEnd}
    >
      <div
        style={{ transform: `translate(${position}px, 0px)` }}
        className="ninternal"
      >
        {nums}
      </div>
      <div className="nframe"></div>
    </div>
  );
}
