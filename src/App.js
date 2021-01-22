import { useReducer, useEffect } from "react";
import Dice from "react-dice-roll";
import "./App.css";

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
    const str = action.value.trim();
    return {
      ...state,
      num: str ? Number.parseInt(action.value, 10) : -1,
    };
  }

  if (action.type === "check") {
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

    const isCorrect = correct === state.num;
    const points = isCorrect ? state.points + 1 : 0;

    if (points === 7) {
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
      <div className="App">
        <div>
          <h2>Petals around roses</h2>
          <button onClick={() => dispatch({ type: "start" })}>
            Start game
          </button>
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
          <button onClick={() => dispatch({ type: "again" })}>
            Play again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="App App_game">
      <div className="points">Points: {state.points}</div>

      <div className="dices">
        {state.dices.map((d, i) => (
          <div key={i}>
            <Dice
              rollingTime={300}
              size={50}
              onRoll={(value) => console.log(value)}
              cheatValue={d}
            />
          </div>
        ))}
      </div>

      <div className="check-state">
        {state.checkState === "none" ? "" : state.checkState}
      </div>

      <div>
        <br />
        <br />
        <div style={{ fontSize: "30px" }}>{state.num}</div>
        <input
          style={{ width: "100%" }}
          value={state.num === -1 ? "" : state.num}
          onChange={run("numChange")}
          type="range"
          min="0"
          max="40"
          step="2"
        />
        <br />
        <button onClick={run("check")}>Check</button>{" "}
        <button onClick={run("roll")}>Roll</button>
      </div>
    </div>
  );
}

export default App;
