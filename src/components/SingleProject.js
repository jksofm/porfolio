import React from "react";
import styled from "styled-components";
import project1 from "../assets/project1.gif";
function SingleProject({data}) {
    
  return (
    <Wrapper>
      {data.imageFirst? (
        <>
 <div className="project-image">
 <a target="_blank" rel="noopener noreferrer" href={data.urlProject}>
   <img src={data.imgProject} />
 </a>
</div>

<div className="project-content">
 <h3>
   <a target="_blank" rel="noopener noreferrer" href={data.urlProject}>
     {data.name}
   </a>
 </h3>
 <p>
  {data.info}
 </p>
 <ul className="project-list">
   {data.projectList.map((item,index)=>{
     return <li key={index}> {item}</li>
   })}
 </ul>
 <div className="btn-container">
       

   <a target="_blank" rel="noopener noreferrer" href={data.urlProject}>

 <button className="btn btn-project">Live
 </button>
   </a>
   <a target="_blank" rel="noopener noreferrer" href={data.sourceLink}>
   
 <button className="btn btn-project">Source
 </button>
   </a>
 
 </div>
 
</div>
<span className="dash"></span>
        </>
      )
      :(
        <>
      
       <div className="project-content">
        <h3>
          <a target="_blank" rel="noopener noreferrer" href={data.urlProject}>
            {data.name}
          </a>
        </h3>
        <p>
         {data.info}
        </p>
        <ul className="project-list">
          {data.projectList.map((item,index)=>{
            return <li key={index}> {item}</li>
          })}
        </ul>
        <div className="btn-container">
              
       
        
          <a target="_blank" rel="noopener noreferrer" href={data.urlProject}><button className="btn btn-project">
             Live
        </button>
          </a>
          <a target="_blank" rel="noopener noreferrer" href={data.sourceLink}>


        <button className="btn btn-project">Source
        </button>
          </a>
        
        </div>
        
       </div>

       <div className="project-image">
        <a target="_blank" rel="noopener noreferrer" href={data.urlProject}>
          <img src={data.imgProject} />
        </a>
       </div>
       <span className="dash"></span>
               </>
      )}
     
      
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: grid;
  grid-gap: 2rem;
  min-height: 380px;
  position: relative;
  margin-bottom: 200px;
  /* border-bottom: 1.5px dashed var(--clr-grey-1); */
  @media (min-width: 856px) {
    grid-template-columns: 1fr 1fr;
    .dash{
      display: block;
    }

  }

  
  .dash{
    position:absolute;
    width: 100%;
    border : 1px dashed var(--clr-grey-1);
     bottom: -100px;
  }
 
  .project-image {
    width: 100%;
    animation: 2s ease 0s 1 normal none running slideInLeft;
    display: block;
    height: 100%;
    /* margin-bottom: 200px; */
    img{
        height: 100%;
        border: 2px solid var(--clr-primary-7);
        display: block;
    }
  }
  .project-content{
    animation: 2s ease 0s 1 normal none running slideInRight;
    /* margin-bottom: 200px; */

    h3 a{
    font-size: 2rem;
    color :var(--clr-grey-1)!important;
  }
  p{
    color :var(--clr-grey-1)!important;
    font-size: 1.25rem;
    line-height: 135%;
  }
  ul{
    margin-left: 1.1rem;
    list-style: square;
    margin-bottom: 2rem;
    li{
        font-size: 0.7rem;
        letter-spacing: 0.15rem;

    }
    
  }
  .btn-container{
   margin-top: 0.5rem;
   display: flex;
   flex-direction: column;
   .btn-project{
    width: 100%;
    margin-bottom: 0.8rem;
    a{
    color : var(--clr-grey-1)!important;

    }
   }
  }
  }
`;

export default SingleProject;
