import React from "react";
import styled from "styled-components";
import { Title, SingleProject } from "../components";
import project1 from "../assets/project1.gif";
import project2 from "../assets/project2.gif";
import project3 from "../assets/project3.gif";
import project4 from "../assets/project4.gif";


function Projects() {
  return (
    <Wrapper>
      <div className="section section-center">
        <Title text="Projects" />
        <div className="content">
          <SingleProject
            data={{
              imgProject: project1,
              urlProject: "https://comfyfurniture98.netlify.app/",
              name: "Comfy Store Website",
              info: "An E-commerce website built using React, Context API, Styled Components, Stripe & Auth0. The key features of this project are: fully responsive, authentication with Auth0, payment with Stripe... ",
              projectList: [
                "REACT",
                "CONTEXTAPI",
                "STYLED COMPONENT",
                "STRIPE",
                "AUTH0",
              ],
              sourceLink: "https://github.com/jksofm/ComfyStore",
              imageFirst: true,
            }}
          />

          <SingleProject
            data={{
              imgProject: project2,
              urlProject: "https://reactusergithub.netlify.app/",
              name: "Github User Website",
              info: "An website is built using React, Context API, Styled Components that allows the visitor to search GitHub users and display some useful info aobut the Github user.",
              projectList: ["REACT", "CONTEXTAPI", "STYLED COMPONENT"],
              sourceLink: "https://github.com/jksofm/reactGithubUser",
              imageFirst: false,
            }}
          />

          <SingleProject
            data={{
              imgProject: project4,
              urlProject: "https://huydeveloper98.netlify.app/",
              name: "Porfolio Website",
              info: "An website is built using Context API,React, Styled Components that help you to know more about me",
              projectList: ["REACT", "CONTEXT APIT", "STYLED COMPONENT"],
              sourceLink: "https://github.com/jksofm/porfolio",
              imageFirst: true,
            }}
          />

          <SingleProject
            data={{
              imgProject: project3,
              urlProject: "https://papaya-choux-6103b7.netlify.app/",
              name: "Jobster Website",
              info: "An website is built using Redux, React, Styled Components that allows the visitor to track job application progress.",
              projectList: ["REACT", "REDUX", "STYLED COMPONENT"],
              sourceLink: "https://github.com/jksofm/JobsterRedux",
              imageFirst: true,
            }}
          />
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: auto;
  .content {
    height: 100%;
  }
`;

export default Projects;
