import { useState } from "react";

const Credit = () => {
  const [credit, setCredit] = useState(50);

  return (
    <div className="container">
      <h2>Current Credit : {credit}</h2> <p>Playing</p>
      <div>
        <button
          onClick={() => {
            setCredit(credit - 10);
          }}
          disabled={credit === 0}
        >
          Play
        </button>
        {credit === 0 && <h3>You Dont Have Credit</h3>}

        {credit === 50 || credit === 0 ? null : (
          <div
            style={{ height: "100px", width: "200px", background: "yellow" }}
          >
            {" "}
          </div>
        )}
        <hr />
        <button
          onClick={() => {
            setCredit(credit + 50);
          }}
        >
          add
        </button>
      </div>
    </div>
  );
};

export default Credit;
