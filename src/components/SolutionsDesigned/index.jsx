import React from "react";
import SectionLayout from "../common/SectionLayout";
import Button from "../common/Button";
import LeftImage from "./LeftImage";
import styled from "styled-components";

const ImageWrapper = styled.div`
  border-left: 1px solid #fd5b2f;
  height: 100%;
  text-align: center;
`;

const Decorator = styled.div`
  height: 50%;
  border-radius: 50% 50% 0 0;
  width: 100%;
  background-color: white;
`;

export default function SolutionsDesigned() {
  return (
    <SectionLayout
      category="Services"
      title="Solutions designed for 
all your needs"
      content="Coworking is an arrangement in which workers of different companies share an office space, allowing cost savings and convenience through the use of common infrastructures, such as equipment, utilities, and receptionist and custodial services, and in some cases refreshments and parcel acceptance services."
      image={
        <ImageWrapper>
          {/* <Decorator /> */}
          <LeftImage />
        </ImageWrapper>
      }
      footer={
        <React.Fragment>
          <Button>View Availability</Button>
        </React.Fragment>
      }
    />
  );
}
