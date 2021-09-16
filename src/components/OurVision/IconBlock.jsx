import React from "react";
import styled from "styled-components";

export default function IconBlock({ title, content, icon }) {
  return (
    <Wrapper>
      <Icon>{icon || "🏠"}</Icon>
      <div>
        <Title>{title}</Title>
        <Content>{content}</Content>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 200px;
  max-width: 50%;
  gap: 1rem;
  line-height: 1.3rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Icon = styled.div`
  flex-basis: 30px;
`;

const Title = styled.div``;

const Content = styled.div`
  font-size: calc(14 / 16 * 1rem);
`;
