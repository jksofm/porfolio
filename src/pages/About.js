import React from "react";
import styled from "styled-components";
import { Title } from "../components";
function About() {
  return (
    <Wrapper>
      <div className="section section-center about">
        <Title text="About" />
        <div className="content">
          <div className="know-me">
            <h3>Get To Know Me!</h3>
            <p>
              My name is Huy Le. I started learning how to code in February
              2022 and spent most of my day experimenting with HTML, CSS and
              JavaScript, React.
              
            </p>
            <p>I love coding and the feeling of learning something new
              everyday. My goal is to pursue a career in the field of front-end
              development.</p>
          </div>

          <div className="education">
            <h3>Education</h3>
            <p>2016-2021</p>
            <h4>Bachelor Of Civil Engineering - University Of Architecture</h4>
            <p>2021-2022</p>
            <h4>Aptech Computer Education</h4>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
 background-color: var(--clr-primary-10);
  .about {
    display: flex;
    align-items: center;
    /* justify-content: center; */
    flex-direction: column;
  }
  h3{
    margin-bottom: 2rem!important;
  }
  .know-me{
    animation: 2s ease 0s 1 normal none running slideInLeft;
  }
  .education{
    animation: 2s ease 0s 1 normal none running slideInRight;
  }
  @media (min-width: 856px){
    .content{

      display: grid;
  
      grid-template-columns: 1fr 1fr;
      
    }

  }
  .content {
    display: grid;
    grid-gap: 2rem;
 
   
    
  }
 
`;

export default About;
