import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #ffffffe5;
  display: flex;
  align-items: center;
  padding-left: 10%;
  padding-right: 10%;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

const ImageContainer = styled.div`
  flex: 1;
  flex-basis: 300px;
`;

const TextContainer = styled.div`
  flex: 1;
  flex-basis: 300px;
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
  contentMeta,
  category,
  image,
  footer,
  swap = false,
}) {
  return (
    <Wrapper>
      {swap ? (
        <>
          <TextContainer>
            <Category>{category}</Category>
            <Title>{title}</Title>
            <Content>{content}</Content>
            {contentMeta && contentMeta}
            <Footer>{footer}</Footer>
          </TextContainer>
          <ImageContainer>{image}</ImageContainer>
        </>
      ) : (
        <>
          <ImageContainer>{image}</ImageContainer>
          <TextContainer>
            <Category>{category}</Category>
            <Title>{title}</Title>
            <Content>{content}</Content>
            {contentMeta && contentMeta}
            <Footer>{footer}</Footer>
          </TextContainer>
        </>
      )}
    </Wrapper>
  );
}
