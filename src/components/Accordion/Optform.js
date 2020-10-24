import React from "react";
import "./Optform.css";

const Optform = () => {
  return (
    <div className="box">
      <p>
        Ready to watch? Enter your email to create or restart your membership.
      </p>

      <input type="text" placeholder="Email Address" />

      <button>Get Started</button>
    </div>
  );
};

export default Optform;
