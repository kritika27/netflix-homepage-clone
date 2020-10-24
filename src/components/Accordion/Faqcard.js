import React from "react";

function Faqcard({ faq, index, toggleFAQ }) {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq">
        <div className="faq-question">
          <p
            style={{
              display: "flex",
              justifyContent: "space-between",
              cursor: "pointer",
              marginBottom: "1px",
              fontSize: " 26px",
              fontWeight: "normal",
              background: "#303030",
              padding: "0.8em 1.2em 0.8em 1.2em",
              userSelect: " none",
              alignItems: " center",
            }}
          >
            {faq.header}
          </p>
        </div>
        <div className="faq-answer">
          <p
            style={{
              maxWidth: "1200px",
              transition: "max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1)",
              fontSize: "26px",
              fontWeight: " normal",
              lineHeight: "normal",
              background: " #303030",
              padding: " 0.8em 1.2em 0.8em 1.2em",
              userSelect: "none",
              alignItems: " center",
              textAlign: "left",
            }}
          >
            {faq.body}
          </p>
        </div>
      </div>
      <br></br>
    </div>
  );
}

export default Faqcard;
