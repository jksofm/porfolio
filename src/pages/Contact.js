import React from 'react'
import styled from 'styled-components'
import {Title} from '../components'
function Contact() {
  return (
    <Wrapper>
      <div className="section section-center">
        <Title text="Contact" />
        <div className="content">
          <div className="info">
            <h3>Contact Info</h3>
            <ul className="contact-list">
              <li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/></svg>
              <span>Address: Ho Chi Minh City, Vietnam</span>
              </li>
              <li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"/></svg>
              <span>Phone: +84 935403364</span>
              </li>
              <li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"/></svg>
              <span>Email: lequochuypy1998@gmail.com</span>
              </li>
              <li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.6 483.2 483.9 512 448.5 512H128.1C92.75 512 64.09 483.3 64.09 448V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5H575.8zM288 160C252.7 160 224 188.7 224 224C224 259.3 252.7 288 288 288C323.3 288 352 259.3 352 224C352 188.7 323.3 160 288 160zM256 320C211.8 320 176 355.8 176 400C176 408.8 183.2 416 192 416H384C392.8 416 400 408.8 400 400C400 355.8 364.2 320 320 320H256z"/></svg>
              <span>Website: <a href="https://huydeveloper98.netlify.app/">https://huydeveloper98.netlify.com</a></span>
              </li>
              
            </ul>
          </div>
          <div className="form" >
            <h3>Contact Form</h3>
            <form className="contact-form" action="https://formspree.io/f/xzbonygw" method="post" >
              <div className="form-control">
              
               <input name="name" type="text" className='form-input' placeholder='Name: ' />
              </div>
              <div className="form-control">
               
               <input name="email" type="email" className='form-input' placeholder='Email:  ' />
              </div>
              <div className="form-control">
          
               <input name="subject" className='form-input' placeholder='Subject(optional): ' />
              </div>
              <div className="form-control">
                <textarea name="message" className="form-input" rows= "17" placeholder="Message: " ></textarea>
              
              </div>
              <button type="submit" className="btn btn-form">Send</button>
            </form>
           
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
background: var(--clr-grey-10);

.content{
  display:grid;
}
@media (min-width: 856px) {
  .content{
    grid-template-columns: 1fr 1fr;
  }
}
.content h3{
  margin-bottom: 2rem;
}
.info{
  animation: 2s ease 0s 1 normal none running slideInLeft;
  li{
    margin-bottom: 2rem;
    svg{
      width: 20px;
      fill: var(--clr-primary-1);
      margin-right: 1.2rem;
    }
  }
}

.form{
  animation: 2s ease 0s 1 normal none running slideInRight;
  .form-control{
    margin-bottom: 2rem;
  }
  .form-input{
    width: 80%;
    padding: 0.8rem 1rem;
    transition: var(--transition);
    &:hover{
      border-color: var(--clr-primary-5)
    }
  }

}

.btn-form{
  font-size: 1rem!important;

}
`

export default Contact