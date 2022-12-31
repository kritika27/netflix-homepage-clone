import React from "react";
import styled from "styled-components";
import "../App.css";
import { Link } from "react-router-dom";
import Jumboitem from "../components/Jumbotron/Jumboitem";
import Accordion from "../components/Accordion/Accordion";
import Footer from "../components/Footer/Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
  text-align: center;
  padding: 165px 45px;
`;

const Title = styled.h1`
  color: #fff;
  max-width: 640px;
  font-size: 50px;
  font-weight: bold;
  margin: auto;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

const SubTitle = styled.h2`
  color: #fff;
  font-size: 26px;
  font-weight: 400;
  margin: 16px auto;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const Input = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 70px;
  box-sizing: border-box;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  height: 70px;
  background: #e50914;
  text-transform:none;
  color: white;
  padding: 0 32px;
  font-size: 26px;
  border: 0;
  cursor: pointer;

  &:hover {
    background: #f40612;
  }

  @media (max-width: 1000px) {
    height: 50px;
    font-size: 16px;
    margin-top: 20px;
    font-weight: bold;
  }
`;

const Text = styled.p`
  font-size: 19px;
  color: white;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default function Home() {
  return (
    <div>
      <header> 
        <div className="showcase-top">
          
          <img src="https://i.ibb.co/r5krrdz/logo.png" alt="" />
          <Link
            to="/"
            className="btn btn-rounded"
            style={{ textDecoration: "none" }}
          >
            Sign In
          </Link>
        </div>
        <Container>
          <Title>Unlimited movies, TV shows and more.</Title>
          <SubTitle>Watch anywhere. Cancel anytime.</SubTitle>
          <Text>
            Ready to watch? Enter your email to create or restart your
            membership.
          </Text>
          <Box>
            <Input placeholder="Email Address" />
            <Button>Get Started  {" "}<span><i className="fa fa-chevron-right"></i></span></Button>
          </Box>
        </Container>
      </header>
      <br></br>
      <Jumboitem />
      <Accordion />
      <Footer />
    </div>
  );
}
