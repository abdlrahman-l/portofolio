import React from "react";
import tw from "twin.macro";
import { Content2Xl } from "components/misc/Layouts.js";
//eslint-disable-next-line
const Container = tw.div`grid md:grid-cols-2 gap-10 -mx-8 px-8`;

export default ({ leftSide, rightSide }) => {
  return (
    <>
    <Content2Xl>
      <Container>
        {leftSide}
        {rightSide}
      </Container>
    </Content2Xl>
    </>
  );
};
