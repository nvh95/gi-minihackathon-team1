import React, { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../constants";
import facebook from '../images/Facebook.png';

function Footer() {
  return (
    <Wrapper>
      <Info>
        <Name>
          1-Space
        </Name>
        <Slogan>
          Men cannot not live by exchanging articles, but producing them. They live by work not trade.
        </Slogan>
      </Info>

      <Column>
        <Title>Company</Title>
        <Item>Missions</Item>
        <Item>Missions</Item>
        <Item>Missions</Item>
        <Item>Missions</Item>
        <Item>Missions</Item>
      </Column>

      <Column>
        <Title>Partnership</Title>
        <Item>Task</Item>
        <Item>Profile</Item>
        <Item>Events</Item>
        <Item>Services</Item>
      </Column>

      <FollowUs>
        <Title>Follow us</Title>
        <IconList>
          <IconWrapper>
            <Icon src={facebook} />
          </IconWrapper>
          <IconWrapper>
            <Icon src={facebook} />
          </IconWrapper>
          <IconWrapper>
            <Icon src={facebook} />
          </IconWrapper>
          <IconWrapper>
            <Icon src={facebook} />
          </IconWrapper>
        </IconList>
      </FollowUs>
    </Wrapper>
  );

}

const Wrapper = styled.div`
  padding: 256px 0px 32px;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  /* background-image: linear-gradient(red, yellow); */
`;

const Info = styled.div`
  flex-basis: 300px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Name = styled.div`
  font-size: 1.5em;
`;

const Slogan = styled.div`
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Title = styled.div`
  color: ${COLORS.PRIMARY}
`;

const Item = styled.div`
`;

const FollowUs = styled.div`
`;

const IconList = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: -10px;
`

const IconWrapper = styled.div`
`;

const Icon = styled.img`
`;


export default Footer;
