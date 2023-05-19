import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  flex: 0.2;
  .widgets {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    background-color: #ffa60092;
    color: black;
    text-transform: uppercase;
    border-bottom: 0.1px solid gray;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  .two {
    background-color: lightcoral;
  }

  @media (max-width: 720px) {
    display: none;
  }
`;

const Widgets = () => {
  return (
    <Wrapper>
      <div className="widgets one">📰News?</div>
      <div className="widgets two">Events🗓️?</div>
    </Wrapper>
  );
};

export default Widgets;
