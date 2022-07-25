import React from "react";
import styled from "styled-components";
import { Introduction } from "../components";
import image from "../assets/portrait.jpg";
import About from "./About"
function Home() {
  return (
    
    <Wrapper>
      <section className="section section-center">
        <div className="home">
          <Introduction />
          <div className="imageContainer">
            <div className="image-box">
              <img src={image} />
            </div>
            <span className="line"></span>
          </div>
        </div>
      </section>
    </Wrapper>
  
    
  );
}

const Wrapper = styled.div`
  background-color: var(--clr-primary-10);

  .home {
    display: grid;
    text-align: center;
  }
  @media (min-width: 856px) {
    .home {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: 856px) {
    .line {
      display: none;
    }
  }

  //home-image
  .imageContainer {
    animation: 2s ease 0s 1 normal none running slideInRight;
    text-align: center;
    position: relative;
    .line {
      position: absolute;
      width: 80%;
      height: 100%;

      border: 4px solid var(--clr-primary-7);

      top: 5%;
      left: 15%;
      border-radius: 10px;
      z-index: 0;
    }
    .image-box {
      z-index: 1000;
      display: flex;
      justify-content: center;
    }
    img {
      z-index: 100;

      width: 80%;
      display: block;
      border-radius: 10px;
      border: 3px solid var(--clr-primary-5);
    }
  }
`;
export default Home;
