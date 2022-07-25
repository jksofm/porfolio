import React from "react";
import styled from "styled-components";
function EachSkill({ data }) {
  return (
    <Wrapper>
        <p className="icon">

      {data.icon}
        </p>
      <p>{data.text}</p>
    </Wrapper>
  );
}
const Wrapper = styled.div`
display: flex;
flex-direction : column;
align-items: center;
justify-content:center;
animation: 1s ease 0s 1 normal none running slideInLeft;

p{
    margin-bottom : 0.5rem!important;
}
.icon{
    font-size: 3rem;
    svg{
       width: 50px;
       transition: var(--transition);
       fill: var(--clr-primary-1)!important;

       &:hover {
       
        cursor: pointer;
        transform: scale(1.2);
       }
    }
}
`;

export default EachSkill;
