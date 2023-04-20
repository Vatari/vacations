import React from "react";
import Tour from "./Tour";
const Tours = ({ tours }) => {
  return (
    <section>
      <div className="title">
        <h2>Our Vacations</h2>
        <div className="underline"></div>
        <div>
          {tours.map((v) => {
            return <Tour key={v.id} {...v} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Tours;
