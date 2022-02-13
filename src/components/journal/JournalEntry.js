import React from "react";

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://ripio-cms-us.s3.amazonaws.com/filer_public/be/64/be6450a8-f219-452b-a45a-052d2b266e03/icon-landing-mkt-eth-white-v2.svg)",
        }}
      ></div>

      <div className="journal__entry-body">
          <p className="journal__entry-title">
              New Day
          </p>
          <p className="journal__entry-content">
            lorem ipsum dolor sit amet, consectetur
          </p>
      </div>
      <div className="journal__entry-date">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};
