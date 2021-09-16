import React, { useState } from "react";
import styled from "styled-components";

import "./index.css";
import ANewWay from "./components/ANewWay";
import Benefit from "./components/Benefit";
import Footer from "./components/Footer";
import SolutionsDesigned from "./components/SolutionsDesigned";
import TheOneSpace from "./components/TheOneSpace";
import OurVision from "./components/OurVision";
import BecomeAMember from "./components/BecomeAMember";

function App () {
  return (
    <Wrapper>
      {/* Harvey */}
      <ANewWay />
      {/* Casey */}
      <SolutionsDesigned />
      <OurVision />
      <TheOneSpace />
      {/* Henry */}
      <Benefit />
      {/* Casey */}
      <BecomeAMember />
      {/* Henry */}
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 32px;
`;

export default App;