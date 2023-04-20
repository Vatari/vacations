import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>Our Vacations</h2>
        <div className="underline"></div>
        <div>
          {Object.values(tours).map((v) => {
            return <Tour key={v.id} {...v} removeTour={removeTour} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Tours;
