import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillGoogleSquare, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck, DiTravis, DiTrello } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
      <Div1>
          <Link href="/">
            <a style={{ display:"flex", alignItems:"center", color:"#fff", marginBottom:'0px', justifyContent:"center", marginLeft:"0.5em"}}>
              <DiTravis size="3rem"/><Span>amaniFolio</Span>
            </a>
          </Link>
      </Div1>
      <Div2>
        <li style={{alignItems:"center", justifyContent:"center", marginTop:"1rem"}}>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li style={{alignItems:"center", justifyContent:"center", marginTop:"1rem"}}>
          <Link href="#tech">
            <NavLink>Tech</NavLink>
          </Link>
        </li>
        <li style={{alignItems:"center", justifyContent:"center", marginTop:"1rem"}}>
          <Link href="#About">
            <NavLink>About</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/TamaniPhiri">
          <AiFillGithub size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/tamani-phiri-389b16256/">
          <AiFillLinkedin size="3rem"/>
        </SocialIcons>
        <SocialIcons href="mailto:tamanigabriel0@gmail.com">
          <AiFillGoogleSquare size="3rem"/>
        </SocialIcons>
      </Div3>
  </Container>
);

export default Header;
