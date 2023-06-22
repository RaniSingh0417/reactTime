import { useState } from "react";

let Timer = () => {
  const [currtime, settime] = useState(new Date().toLocaleTimeString());
  return (
    <>
      <div className="container">
        <h1>{currtime}</h1>
        <br />
        <button
          className="btn"
          onClick={() => {
            settime(new Date().toLocaleTimeString());
          }}
        >
          Current Time
        </button>
      </div>
    </>
  );
};
export default Timer;
