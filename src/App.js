/* global gtag */
import { useReducer, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Dice from "react-dice-roll";
import "./App.css";
import "./dices.css";
import Rating from "./rating";
import Die from "./die";
import NumberSelector from "./number";

const pointsToWin = 7;

const initialState = {
  screen: "intro", // intro
  points: 0,
  dices: [],
  num: 0,
  checkState: "none",
};

function rnd() {
  return Math.round(Math.random() * 5 + 1);
}

function reducer(state, action) {
  gtag("event", "action", {
    type: action.type,
    value: action.value,
  });

  if (action.type === "again") {
    return {
      ...initialState,
      screen: "game",
    };
  }

  if (action.type === "start") {
    return {
      ...state,
      screen: "game",
    };
  }

  if (action.type === "numChange") {
    return {
      ...state,
      num: action.value,
    };
  }

  if (action.type === "check") {
    if (state.checkState !== "none" || state.dices.length === 0) {
      return state;
    }
    const correct = calcCorrect(state);

    const isCorrect = correct === state.num;
    const points = isCorrect ? state.points + 1 : 0;

    gtag("event", "check", { correct: isCorrect ? "yes" : "no" });

    if (points === pointsToWin) {
      gtag("event", "win");
      return {
        ...state,
        screen: "win",
      };
    }

    return {
      ...state,
      points,
      checkState: isCorrect ? "correct" : "incorrect",
    };
  }

  if (action.type === "roll") {
    return {
      ...state,
      dices: [rnd(), rnd(), rnd(), rnd(), rnd()],
      checkState: "none",
    };
  }

  return state;
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const run = (type, params = {}) => (event) =>
    dispatch({ ...params, type, value: event.target.value });

  useEffect(() => {
    const rollAll = (event) => {
      const b = document.querySelectorAll("button._space3d");
      const z = [...b];
      z.forEach((b) => {
        b.click();
      });
    };

    setTimeout(() => {
      rollAll();
    }, 30);
  }, [state.dices]);

  if (state.screen === "intro") {
    return (
      <div className="App app_main">
        <div>
          <h2>Petals around roses</h2>
          <Button size="lg" onClick={() => dispatch({ type: "start" })}>
            Start game
          </Button>
        </div>
      </div>
    );
  }

  if (state.screen === "win") {
    return (
      <div className="App">
        <div>
          <h2>You won!</h2>
          <b>You know the secret now!</b>
          <br />
          <br />
          <Button onClick={() => dispatch({ type: "again" })}>
            Play again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="App App_game">
      <Rating max={pointsToWin} current={state.points} />

      <div className="dices">
        {state.dices.map((d, i) => (
          <div key={i} className={"dice-" + i}>
            <Die number={d} />
          </div>
        ))}
      </div>

      <div className="check-state">
        {state.checkState === "correct" ? (
          <Alert variant="success">Correct</Alert>
        ) : null}
        {state.checkState === "incorrect" ? (
          <Alert variant="danger">
            Incorrect! Correct number is {calcCorrect(state)}
          </Alert>
        ) : null}
      </div>

      <div>
        <br />
        {state.dices.length > 0 ? (
          <NumberSelector
            onChange={(value) => dispatch({ type: "numChange", value })}
          />
        ) : null}
        <br />
        <div
          style={{
            display: "grid",
            gridGap: "1em",
            gridTemplateColumns: "1fr",
          }}
        >
          {state.checkState !== "none" || state.dices.length === 0 ? (
            <Button onClick={run("roll")} variant="success">
              Roll
            </Button>
          ) : (
            <Button
              onClick={run("check")}
              disabled={state.checkState !== "none" || state.dices.length === 0}
            >
              Check
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

function calcCorrect(state) {
  const correct = state.dices.reduce((acc, d) => {
    let n = 0;
    if (d === 3) {
      n = 2;
    }
    if (d === 5) {
      n = 4;
    }
    return acc + n;
  }, 0);

  return correct;
}
