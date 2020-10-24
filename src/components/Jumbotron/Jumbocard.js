import React from "react";
import styled from "styled-components";
import "../../App.css";

const Jumbocard = ({ id, title, subTitle, image, alt, direction }) => {
  const Card = styled.div`
    display: flex;
    border-bottom: 8px solid #222;
    padding: 50px 5%;
    color: white;
    overflow: hidden;
    background-color: black;
    flex-direction: ${direction};

    @media (max-width: 600px) {
      flex-direction: column;
      text-align: center;
    }
  `;

  return (
    <>
      <Card>
        <div className="item">
          <h1>{title}</h1>
          <h2>{subTitle}</h2>
        </div>
        <img src={image} alt={alt} />
      </Card>
    </>
  );
};
export default Jumbocard;
