import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SocialLink from "./SocialLink";
function Introduction() {
  return (
    <Wrapper>
      <h1>I'm a Web Develop</h1>
      <p>I love building beautiful web experience</p>
      <div className="btn-container">
        <button className="btn btn-hero">
          <Link to="/about">About me</Link>
        </button>
        <button className="btn btn-hero">
          <Link to="/projects">Projects</Link>
        </button>
        <SocialLink />
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  text-align: center;
  animation: 2s ease 0s 1 normal none running slideInLeft;
  display: flex;
  flex-direction: column;
  justify-content:center;
  

  @media (min-width: 856px) {
    text-align: left;
  }
  p{
    color: var(--clr-grey-5);
    font-size: .875rem;
    font-weight: 700;
    letter-spacing: var(--spacing);
    line-height: 1.25;
    margin-bottom: 1.8rem;
    text-transform: capitalize;
    
  }
  .btn-hero{
    width: 120px!important;
    padding : 12px 12px;
    margin-right: 1rem;
  }
  .btn-hero a{
    color: var(--clr-grey-1)!important;
    font-size: 0.875rem!important;
    letter-spacing: 0.1rem;
   
  }
`;

export default Introduction;
