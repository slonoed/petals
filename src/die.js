import { useRef, useEffect } from "react";

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function Die({ number }) {
  const die = useRef(null);

  useEffect(() => {
    die.current.classList.toggle("odd-roll");
    die.current.classList.toggle("even-roll");
    die.current.dataset.roll = number;
  }, [number]);

  return (
    <ol ref={die} className="die-list even-roll" data-roll="1" id="die-1">
      <li className="die-item" data-side="1">
        <span className="dot"></span>
      </li>
      <li className="die-item" data-side="2">
        <span className="dot"></span>
        <span className="dot"></span>
      </li>
      <li className="die-item" data-side="3">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </li>
      <li className="die-item" data-side="4">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </li>
      <li className="die-item" data-side="5">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </li>
      <li className="die-item" data-side="6">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </li>
    </ol>
  );
}
