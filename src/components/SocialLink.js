import React from "react";
import styled from "styled-components";
import { FaFacebookSquare, FaInstagramSquare, FaHome } from "react-icons/fa";
function SocialLink() {
  return (
    <Wrapper>
      <a href="https://www.facebook.com/Sofm.Wam">
        <FaFacebookSquare />
      </a>
      <a href="https://huydeveloper98.netlify.app/">
        <FaHome />
      </a>
      <a href="https://www.instagram.com/chomchomishere_/">
        <FaInstagramSquare />
      </a>
    </Wrapper>
  );
}
const Wrapper = styled.div`

  display: grid;
  width: 300px;
  grid-template-columns: 1fr 1fr 1fr;
  padding-left : 1rem;
  padding-right : 1rem;
  margin-top: 1.5rem;
  @media (max-width: 856px) {
    
    margin: 1.5rem auto;
  }
 
  
  a {
    display: block;
    font-size: 2rem;
    color: var(--clr-grey-1);
    transition : var(--transition);
    
    &:hover {
      color : var(--clr-primary-5);
      transform:scale(1.2);
      cursor: pointer;
    }
  }
`;
export default SocialLink;
