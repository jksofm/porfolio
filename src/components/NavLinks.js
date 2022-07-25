import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"
function NavLinks() {
  return (
    <Wrapper  >
     <ul className="nav-links">
        <li>

        <Link className="link" to="/"><span>01.</span>Home</Link>
        </li>
        <li>

        <Link className="link" to="/about"><span>02.</span>About</Link>
        </li>
        <li>
        <Link className="link" to="/skills"><span>03.</span>Skills</Link>

        </li>
        <li>
        <Link className="link" to="/projects"><span>04.</span>Projects</Link>

        </li>
        <li>

        <Link className="link" to="/contact"><span>05.</span>Contact</Link>
        </li>


     </ul>

    </Wrapper>
  )
}

const Wrapper = styled.div`
 justify-content: center;
 align-items:center;
 display:none;

 .nav-links{
    display: flex;
    justify-content: space-between;
 }
li{
    margin-right: 2rem;
   a{
    font-family: var(--ff-secondary);
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    transition: var(--transition);
    color : var(--clr-grey-1);

   }
span{
    color: var(--clr-primary-5);
}
&:hover a{
    color: var(--clr-primary-5)!important;

}
}
@media (min-width: 856px) {
 display:flex;
 li{
    margin-right: 1.5rem;
    a{
        font-size: 1.2rem;
    }
 }

}

`
export default NavLinks