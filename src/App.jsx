import React from "react";
import styled from "styled-components";
import ANewWay from "./components/ANewWay";
import BecomeAMember from "./components/BecomeAMember";
import Benefit from "./components/Benefit";
import Footer from "./components/Footer";
import OurVision from "./components/OurVision";
import SolutionsDesigned from "./components/SolutionsDesigned";
import TheOneSpace from "./components/TheOneSpace";
import "./index.css";


const App = () => {
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
  padding: 96px;
`;

export default App;
