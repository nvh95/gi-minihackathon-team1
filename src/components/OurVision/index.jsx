import React from "react";
import styled from "styled-components";
import Button from "../common/Button";
import SectionLayout from "../common/SectionLayout";
import Image from "./Image";

const ImageSectionWrapper = styled.div`
  height: 600px;
  text-align: center;
  position: relative;
`;

const ImageWrapper = styled.div`
  width: ${(props) => `${props.size || 48}px`};
  height: ${(props) => `${props.size || 48}px`};
  position: absolute;
  top: ${(props) => `${props.top}`};
  left: ${(props) => `${props.left}`};
  right: ${(props) => `${props.right}`};
  bottom: ${(props) => `${props.bottom}`};
`;

export default function OurVision() {
  return (
    <SectionLayout
      swap={true}
      category="Services"
      title="Our vision in 1-space to make something"
      content="Coworking is an arrangement in which workers of different companies share an office space, allowing cost savings and convenience through the use of common infrastructures services."
      image={
        <ImageSectionWrapper>
          <ImageWrapper size={88} top={0} left="335px">
            <Image />
          </ImageWrapper>
          <ImageWrapper size={250} top="10px" right="180px">
            <Image />
          </ImageWrapper>
          <ImageWrapper size={208} top="150px" left="335px">
            <Image />
          </ImageWrapper>
          <ImageWrapper size={335} bottom={0} right="180px">
            <Image />
          </ImageWrapper>
        </ImageSectionWrapper>
      }
      footer={
        <React.Fragment>
          <Button>View Availability</Button>
        </React.Fragment>
      }
    />
  );
}
