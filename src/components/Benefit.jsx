import React, { useState } from "react";
import styled from "styled-components";

import { COLORS, FONT_SIZES } from "../constants";
import eventImage from "../images/event.png";
import dumbbell from "../images/dumbbell.png";
import wifi1 from "../images/wifi1.png";
import internet from "../images/internet.png";
import armChair from "../images/armchair.png";

function Benefit() {
  return (
    <Wrapper>
      <Title>Why Choose Us?</Title>
      <Content>The benefits that will make you comfort</Content>
      <ItemList>
        <Item>
          <IconWrapper>
            <Icon src={eventImage} />
          </IconWrapper>
          <IconTitle>Community Events</IconTitle>
          <IconContent>
            Allowing cost savings and convenience through the use of common
            infrastructures.
          </IconContent>
        </Item>

        <Item>
          <IconWrapper>
            <Icon src={dumbbell} />
          </IconWrapper>
          <IconTitle>Community Events</IconTitle>
          <IconContent>
            Allowing cost savings and convenience through the use of common
            infrastructures.
          </IconContent>
        </Item>

        <Item>
          <IconWrapper>
            <Icon src={wifi1} />
          </IconWrapper>
          <IconTitle>Community Events</IconTitle>
          <IconContent>
            Allowing cost savings and convenience through the use of common
            infrastructures.
          </IconContent>
        </Item>

        <Item>
          <IconWrapper>
            <Icon src={internet} />
          </IconWrapper>
          <IconTitle>Community Events</IconTitle>
          <IconContent>
            Allowing cost savings and convenience through the use of common
            infrastructures.
          </IconContent>
        </Item>

        <Item>
          <IconWrapper>
            <Icon src={armChair} />
          </IconWrapper>
          <IconTitle>Community Events</IconTitle>
          <IconContent>
            Allowing cost savings and convenience through the use of common
            infrastructures.
          </IconContent>
        </Item>
      </ItemList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  color: ${COLORS.PRIMARY};
  display: flex;
  justify-content: center;
  text-transform: uppercase;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  font-size: ${FONT_SIZES.LARGE};
  padding: 16px 0 32px;
`;

const ItemList = styled.div`
  display: flex;
  gap: 16px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
`;

const Icon = styled.img`
  width: 100%;
  height: 100%;
`;

const IconTitle = styled.div`
  font-weight: 600;
`;

const IconContent = styled.div`
  display: flex;
  text-align: center;
`;

export default Benefit;
