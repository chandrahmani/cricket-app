import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="card text-center my-5">
        <div className="card-body">
          <h1>Counter</h1>
          <div className=" my-5">
            <h2>{count}</h2>

            <button
              className="btn btn-success mx-4"
              onClick={() => {
                setCount(count + 1);
              }}
              disabled={count === 20}
            >
              +
            </button>

            <button
              className="btn btn-danger mx-4"
              onClick={() => {
                setCount(0);
              }}
              disabled={count === 0}
            >
              Reset
            </button>

            <button
              className="btn btn-secondary mx-4"
              onClick={() => {
                setCount(count - 1);
              }}
              disabled={count === 0}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
