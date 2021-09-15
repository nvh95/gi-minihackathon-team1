import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0.5rem 1rem;
  background-color: #fd5b2f;
  color: white;
  border-radius: 4px;
  display: inline-block;
`;

export default function Button({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
