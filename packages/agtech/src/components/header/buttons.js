import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const NavButton = ({ state }) => (
  <ButtonContainer>
    <Button><Link link="/logg-inn/">Logg inn</Link></Button>
  </ButtonContainer>
);

export default connect(NavButton);

const ButtonContainer = styled.div`
  box-sizing: border-box;
  width: 100px;
  margin-top: 3px;
  @media (max-width: 900px) {
    display: none;
  }
`;

const Button = styled.div`
  box-sizing: content-box;
  border: solid var(--black);
  border-width: thin;
  text-align: center;
  height: 1.8em;
  line-height: 1.8em;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 6px;
  margin: auto 0;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  a {
    color: #043959;
  }
  :hover {
    opacity: .85;
  }
`;