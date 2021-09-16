import React from "react";
import styled from "styled-components";


import google from "../images/google.png";
import shopify from "../images/shopify.png";
import slack from "../images/slack.png";
import bitmap from "../images/Bitmap.png";
import dropbox from "../images/dropbox.png";
import Logo50 from "../images/image 50.png";
import ellipse1 from "../images/Ellipse 1.png";
import ellipse2 from "../images/Ellipse 2.png";
import ellipse3 from "../images/Ellipse 3.png";
import vector from "../images/Vector.png"
import vector1 from "../images/Vector 1.png"


const Wrapper = styled.div`
  max-width: 75%;
  margin: 0 auto;
  height: 100vh;
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
`;

const ListGroup = styled.ul`
  display: flex;
  justify-content: space-content;
`;
const ListItem = styled.li`
  font-size: 1rem;
  color: #686C75;
  list-style-type: none;
  margin: 0 1.5rem;
`;
const Body = styled.div`
  height: 80%;
  display: flex;
  position: relative;
`;
const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75%;
  margin: 0 auto;
`;
const Logo = styled.img`
  /* display: flex;
  justify-content: space-between; */
`;
const LeftAside = styled.div`
  /* width: 50%; */
`
const RightAside = styled.div`
  /* width: 50%; */
`
const BlurBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(243, 243, 243, 0.6);;
  width: 777px;
  height: 100px;
  z-index: 1;
  margin-top: 2rem;
`
const Slogan = styled.div`
  width: 475px;
  font-weight: bold;
  font-size: 58.5056px;
  margin-top: 10rem;
`
const Button = styled.button`
  background-color: #FD5B2F;
  padding: 8px 10px;
  border-radius: 5px;
  border: 0px;
  color: white;
`
const City = styled.div`
  display: flex;
  justify-content: space-between;
`
const Content = styled.div`
  color: #989898;
`
const Image = styled.img`
  border-radius: 50% 50% 0 0;
  height: 85%;
  position: relative;
  right: 14rem;
  margin-top: 2rem;
  z-index: 0;
`
const RoundImage = styled.img`
  border-radius: 50%;
  position: absolute;
  width: ${(props) => `${props.size}px`};
  top: ${(props) => `${props.top}px`};
  right: ${(props) => `${props.right}px`};
`
function A() {
  return (
    <Wrapper>
      <Header>
        <ListGroup>
          <ListItem>Home</ListItem>
          <ListItem>About</ListItem>
          <ListItem>Services</ListItem>
        </ListGroup>
        <h3>1-Space</h3>
        <ListGroup>
          <ListItem>Services</ListItem>
          <ListItem>Spaces</ListItem>
          <ListItem>Events</ListItem>
        </ListGroup>
      </Header>
      <Body>
        <LeftAside>
          <img src={vector1} alt=''></img>
          <Slogan>A new way to revolutionise your workspace to yourself</Slogan>
          <BlurBar>
            <City>
              <img src={vector} alt="vector"/>
              <Content>City</Content>
            </City>
            <Content>Location</Content>
            <Button>Schedule Visit</Button>
          </BlurBar>
        </LeftAside>
        <RightAside>
          <Image src={Logo50}></Image>
          <RoundImage src={ellipse1} size={250} right={50}/>
          <RoundImage src={ellipse2} size={141} right={150} top={300}/>
          <RoundImage src={ellipse3} size={74} right={60}/>
        </RightAside>
      </Body>
      <Footer>
        <Logo src={google} alt="Google"></Logo>
        <Logo src={slack} alt="Google"></Logo>
        <Logo src={bitmap} alt="Google"></Logo>
        <Logo src={dropbox} alt="Google"></Logo>
        <Logo src={shopify} alt="Google"></Logo>
      </Footer>
    </Wrapper>
  );
}

export default A;
