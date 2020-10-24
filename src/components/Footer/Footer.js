import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p
        style={{
          color: "#757575",
          fontSize: "16px",
          marginBottom: "40px",
          textAlign: "left",
        }}
      >
        Questions? Call 1-866-579-7172
      </p>
      <div className="row">
        <ul>
          <li>FAQs</li>
          <li>Investor Relations</li>
          <li>Privacy</li>
          <li>Speed Test</li>
          <li>Netflix India</li>
        </ul>
        <ul>
          <li>Help Centre</li>
          <li>Jobs</li>
          <li>Cookie Preferences</li>
          <li>Legal Notices</li>
        </ul>
        <ul>
          <li>Account</li>
          <li>Ways to Watch</li>
          <li>Corporate Information</li>
          <li>Netflix Originals</li>
        </ul>
        <ul>
          <li>Media Centre</li>
          <li>Terms of Use</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
