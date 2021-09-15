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

export default () => {
  return (
    <div>
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
    </div>
  );
};

const Wrapper = styled.div`
  background-color: red;
`;
