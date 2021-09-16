import React from "react";
import styled from "styled-components";
import googleImage from "../images/google.png";


const Wrapper = styled.div`
  max-width: 75%;
  margin: 0 auto;
  height: 100vh;
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

const ListGroup = styled.ul`
  display: flex;
  justify-content: space-content;
`;
const ListItem = styled.li`
  list-style-type: none;
  margin: 0 20px;
`;
const Body = styled.div`
  height: 80%;
`;
const Footer = styled.div`
  display: flex;
  width: 75%;
  margin: 0 auto;
`;
const Image = styled.img`
  margin: 0 40px;
`;
function A() {
  return (
    <Wrapper>
      <Header>
        <ListGroup>
          <ListItem>Home</ListItem>
          <ListItem>About</ListItem>
          <ListItem>Services</ListItem>
        </ListGroup>
        <ListGroup>
          <ListItem>Something</ListItem>
        </ListGroup>
        <ListGroup>
          <ListItem>Services</ListItem>
          <ListItem>Spaces</ListItem>
          <ListItem>Events</ListItem>
        </ListGroup>
      </Header>
      <Body>{/* <LeftAside></LeftAside> */}</Body>
      <Footer>
        <Image src={googleImage} alt="Google"></Image>
        <Image src={googleImage} alt="Google"></Image>
        <Image src={googleImage} alt="Google"></Image>
        <Image src={googleImage} alt="Google"></Image>
      </Footer>
    </Wrapper>
  );
}

export default A;
