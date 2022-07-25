import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../assets/gidle.jpg";
import NavLinks from "./NavLinks";
import {useGlobalContext} from "../GlobalContext"
function Navbar() {
  const { toggleSidebar, setToggleSidebar,toggleTheme,theme } = useGlobalContext();

 useEffect(()=>{
  
    document.documentElement.className = theme;
    // localStorage.setItem('theme', theme);
},[theme])

  return (
    <Wrapper>
      <section className="section-center">
        <div className="header">
          <Link to="/">
            <h4>

            {`<HUY LE />`}
            </h4>
            {/* <img src={Logo} className="nav-logo" alt="logo" /> */}
          </Link>
        </div>

        <NavLinks />

        <div className="togglebtnContainer">
          <button onClick={()=>setToggleSidebar(true)} className="toggleSidebar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <button type="button" className="btn-theme" >
            <label  htmlFor="checkbox" className="toggler">
              <input
                type="checkbox"
                id="checkbox"
                onChange={()=>toggleTheme()}
                checked={theme === 'dark-theme'}
               
              />
              <span  className="ball"></span>
              <svg
                className="sun"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <svg
                className="moon"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </label>
          </button>
        </div>
      </section>
    </Wrapper>
  );
}

export default Navbar;

const Wrapper = styled.nav`
  background-color: var(--clr-white);
  padding : 1.7rem 1rem;
 
  .section-center {
    display: grid;
    grid-template-columns: 80% auto;
  }
  .header {
    display: flex;
    align-items: center;
    h4{
      font-size: 1.4rem;
      color : var(--clr-primary-5);
      margin-bottom: 0!important;

    }
    img {
      display: block;
      border: 2px solid var(--clr-primary-5);
    }
  }
  .nav-logo {
    width: 100px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
  }

  @media (min-width: 856px) {
    background-color: var(--clr-primary-10) !important;
    .section-center {
    display: grid;
    grid-template-columns: auto 1fr auto;
  }
    .toggleSidebar {
      display: none !important;
    }
  }
  @media (max-width: 596px) {
   
    .section-center {
    display: grid;
    grid-template-columns: 70% auto;
  }
    
  }
  
   
  
  //btn toggle
  .togglebtnContainer {
    display: flex;
    align-items: center;
  }
  #checkbox {
    display: none;
  }
  .toggleSidebar {
    border: none;
    background-color: transparent;
    color: var(--clr-primary-5);
    display: flex;
    align-items: center;
    cursor: pointer;
    svg {
      display: block;
    }
  }
  .btn-theme {
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    font-size: 2 rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 1rem;
  }

  .toggler {
    border: 2px solid var(--clr-primary-5);
    border-radius: 30px;
    width: 60px;
    height: 31px;
    cursor: pointer;
    /* display: block; */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      background-color: var(--clr-primary-1);
      border-radius: 50%;
      display: inline-block;
      height: 25px;
      width: 25px;
      background-color: var(--clr-primary-1);
      position: absolute;
      transition: var(--transition);
    }
  }

  input[type="checkbox"]:checked + span {
    transform: translateX(30px);
  }
`;
