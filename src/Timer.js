import { useEffect, useState } from "react";
import "./styles.css";

export default function Timer() {
  const [time, setTime] = useState(0);
  const [startTimer, setStartTimer] = useState(false);
  const [timerId, setTimerId] = useState(0);
  useEffect(() => {
    let intervalId = null;
    if (startTimer) {
      intervalId = setInterval(() => {
        setTime((prev) => (prev += 1));
      }, 1000);
      setTimerId(intervalId);
    } else {
      clearInterval(timerId);
    }
  }, [startTimer]);
  return (
    <div className="App">
      <h1>{time}</h1>
      <button onClick={() => setStartTimer(true)}>start</button>
      <button onClick={() => setStartTimer(false)}>stop</button>
    </div>
  );
}
