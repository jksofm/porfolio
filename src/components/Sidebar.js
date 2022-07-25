import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../GlobalContext";
import SocialLink from "./SocialLink"
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaHome,
  FaWindowClose,
} from "react-icons/fa";

function Sidebar() {
  const { toggleSidebar, setToggleSidebar } = useGlobalContext();
  
 if(toggleSidebar){

   return (
     <Wrapper>
       <div onClick={()=>setToggleSidebar(false)} className="close">
         <FaWindowClose />
       </div>
       <div>
         <ul  className="sidebar-links">
           <li onClick={()=>setToggleSidebar(false)}>
             <Link to="/">01.Home</Link>
           </li>
           <li onClick={()=>setToggleSidebar(false)}>
             <Link to="/about">02.About</Link>
           </li>
           <li onClick={()=>setToggleSidebar(false)}>
             <Link to="/skills">03.Skills</Link>
           </li>
           <li onClick={()=>setToggleSidebar(false)}>
             <Link to="/projects">04.Projects</Link>
           </li>
           <li onClick={()=>setToggleSidebar(false)}>
             <Link to="/contact">05.Contact</Link>
           </li>
         </ul>
         {/* <footer>
           <a href="https://www.facebook.com/Sofm.Wam">
             <FaFacebookSquare />
           </a>
           <a href="https://www.facebook.com/Sofm.Wam">
             <FaHome />
           </a>
           <a href="https://www.instagram.com/chomchomishere_/">
             <FaInstagramSquare />
           </a>
         </footer> */}
         <SocialLink />
       </div>
     </Wrapper>
   );
 }
}
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  background: var(--clr-grey-10);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: scale-up-tr .5s cubic-bezier(.39,.575,.565,1) both;
  @media (min-width: 856px) {
    display: none;
  }
  .sidebar-links {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    /* justify-content: center; */
    /* align-items:center; */
  }
  li {
    a {
      color: var(--clr-grey-5);
      display: inline-block;
      font-size: 2rem;
      letter-spacing: var(--spacing);
      margin-bottom: 1.5rem;
      text-transform: capitalize;
      transition: var(--transition);
    }
    &:hover a {
      color: var(--clr-primary-7) !important;
      transform: scale(1.2);
    }
  }
  footer {
    display: flex;
    justify-content: space-between;
    a {
      display: block;
      font-size: 2rem;
      color: var(--clr-grey-5);
      &:hover {
        opacity: 0.7;
        cursor: pointer;
      }
    }
  }
  .close {
    position: absolute;
    top: 10%;
    right: 10%;
    font-size: 2rem;
    color: var(--clr-grey-5);
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export default Sidebar;
