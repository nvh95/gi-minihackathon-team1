import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  background-color: #ffffffe5;
  display: flex;
  align-items: center;
  padding-left: 10%;
  padding-right: 10%;
  gap: 16px;
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const TextContainer = styled.div`
  flex: 1;
`;

const Title = styled.div`
  font-size: calc(52 / 16 * 1rem);
  font-family: Gilroy-Medium, sans-serif;
  line-height: 71px;
  letter-spacing: 0em;
  text-align: left;
`;

const Category = styled.div`
  color: #fd5b2f;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-family: Gilroy-SemiBold, sans-serif;
`;

const Content = styled.div`
  padding-bottom: 1rem;
`;
const Footer = styled.div``;

export default function SectionLayout({
  title,
  content,
  category,
  image,
  footer
}) {
  return (
    <Wrapper>
      <ImageContainer>{image}</ImageContainer>
      <TextContainer>
        <Category>{category}</Category>
        <Title>{title}</Title>
        <Content>{content}</Content>
        <Footer>{footer}</Footer>
      </TextContainer>
    </Wrapper>
  );
}
