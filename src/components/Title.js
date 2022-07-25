import React from "react";
import styled from "styled-components";
function Title({ text }) {
  return (
    <Wrapper>
      <h2> {text}</h2>
      <div className="underline"></div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
 margin-bottom : 5rem;
  h2 {
    text-align:center;
    animation: 1s cubic-bezier(0.215, 0.61, 0.355, 1) 0s 1 normal both running tracking-in-expand;
  }
  .underline {
    width: 5rem;
    height: 0.25rem;
    margin-bottom: 1.25rem;
    background: var(--clr-primary-5);
    margin-left: auto;
    margin-right: auto;
  }
`;

export default Title;
