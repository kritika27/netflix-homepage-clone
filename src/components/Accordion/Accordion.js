import React, { useState } from "react";
import Faqcard from "./Faqcard";
import Optform from "./Optform";
import "./Optform.css";
import "./faq.css";

function Accordion() {
  const [faqs, setfaqs] = useState([
    {
      id: 1,
      header: "What is Netflix?",
      body:
        "Netflix is a streaming service that offers a wide variety of award-winning TV programmes, films, anime, documentaries and more – on thousands of internet-connected devices.\n\nYou can watch as much as you want, whenever you want, without a single advert – all for one low monthly price. There's always something new to discover, and new TV programmes and films are added every week!",
      open: false,
    },
    {
      id: 2,
      header: "How much does Netflix cost?",
      body:
        "Watch Netflix on your smartphone, tablet, smart TV, laptop or streaming device, all for one low fixed monthly fee. Plans start from £5.99 a month. No extra costs or contracts.",
      open: false,
    },
    {
      id: 3,
      header: "Where can I watch?",
      body:
        "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.\n\nYou can also download your favourite programmes with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
      open: false,
    },
    {
      id: 4,
      header: "How do I cancel?",
      body:
        "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account at any time.",
      open: false,
    },
    {
      id: 5,
      header: "What can I watch on Netflix?",
      body:
        "Netflix has an extensive library of feature films, documentaries, TV programmes, anime, award-winning Netflix originals, and more. Watch as much as you want, any time you want.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          paddingTop: "60px",
          paddingBottom: "25px",
        }}
      >
        Frequently Asked Questions
      </h1>
      <br></br>
      <div className="faqs">
        {faqs.map((faq, i) => (
          <Faqcard key={i} faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
      <Optform />
    </div>
  );
}

export default Accordion;
