import { calcTM } from "../lib/helpers";
import Save from "./Save"
// import { useState, useEffect } from "react";

export default function TMCalc({ oneRM, setOneRM, TM, setTM }) {
  function handleChange(event) {
    const { name, value } = event.target;
    setOneRM((prevState) => ({
      ...prevState,
      [name]: Math.floor(value),
    }));
    setTM((prevState) => ({
      ...prevState,
      [name]: calcTM(value * 0.9, 2.5),
    }));
    // console.log({ oneRM, TM });
    // localStorage.setItem("oneRM", JSON.stringify(oneRM));
    // localStorage.setItem("TM", JSON.stringify(TM));
    // console.log("boop");
  }

  return (
    <div className="flex flex-col">
      <h2>TMCalc</h2>
      <div>
        <label htmlFor="bench">
          Bench 1RM
          <input
            type="number"
            value={oneRM.bench}
            id="bench"
            name="bench"
            tabIndex={1}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <p>TM: {TM.bench}</p>
      </div>
      <div>
        <label htmlFor="squat">
          Squat 1RM
          <input
            type="number"
            value={oneRM.squat}
            id="squat"
            name="squat"
            tabIndex={2}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <p>TM: {TM.squat}</p>
      </div>
      <div>
        <label htmlFor="deadlift">
          Deadlift 1RM
          <input
            type="number"
            value={oneRM.deadlift}
            id="deadlift"
            name="deadlift"
            tabIndex={3}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <p>TM: {TM.deadlift}</p>
      </div>
      <div>
        <label htmlFor="overhead">
          Overhead Press 1RM
          <input
            type="number"
            value={oneRM.overhead}
            id="overhead"
            name="overhead"
            tabIndex={4}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <p>TM: {TM.overhead}</p>
      </div>
      <Save cookieName="oneRM" cookieData={oneRM} />
    </div>
  );
}
