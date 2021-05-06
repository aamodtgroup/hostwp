import React from "react";
import { styled, connect, css } from "frontity";
import Link from "../link";
import facebook from "../../images/facebook.png";
import linkedin from "../../images/linkedin.png";
import email from "../../images/email.png";
import instagram from "../../images/instagram.png";
import twitter from "../../images/twitter.png";
import Logo from "./menu-logo";
import Toggle from "../toggle";

const MenuModal = ({ state }) => {
  const items = state.source.get(`/menu/${state.theme.menuUrl}/`).items;
  const { mode } = state.theme;

  return (
    <>
      <BigMenu>
        <div className="menu-header">
          <Logo />
        </div>
        <BigMenuInner>
          <MenuContent as="nav">
            {items.map((item) => {
              if (!item.child_items) {
                return (
                  <MenuLink key={item.ID} link={item.url}>
                    {item.title}
                  </MenuLink>
                );
              } else {
                const childItems = item.child_items;
                return (
                  <NavItemWithChildMobile key={item.ID}>
                    <MenuLink key={item.ID} link={item.url}>
                      {item.title}
                    </MenuLink>
                    <ChildMenuMobile className="submenu_mobile">
                      {childItems.map((childItem) => {
                        return (
                          <MenuLink key={childItem.ID} link={childItem.url}>
                            {childItem.title}
                          </MenuLink>
                        );
                      })}
                    </ChildMenuMobile>
                  </NavItemWithChildMobile>
                );
              }
            })}
          </MenuContent>
          <div className="small-menu">
            {/* <Link link="https://www.linkedin.com/company/aamodtgroup/" target="_blank"><img src={linkedin} /></Link> */}
            <Link link="https://www.facebook.com/hostwp/" target="_blank"><img src={facebook} /></Link>
            <Link link="https://www.instagram.com/hostwp/" target="_blank"><img src={instagram} /></Link>
            <Link link="https://www.twitter.com/hostwp/" target="_blank"><img src={twitter} /></Link>
            {/* <Link link="https://www.github.com/aamodtgroup/" target="_blank"><img src={github} /></Link> */}
            <Link link="mailto:kasper@aamodtgroup.com"><img src={email} /></Link>
          </div>
        </BigMenuInner>
        <div className="menu-footer">
          <p className="copyright">© 2021 HostWP</p>
          <p className="copyright align-right">
            <Link link="/personvern">Personvern</Link>
          </p>
        </div>
      </BigMenu>
    </>
  );
};

const onClick = () => {
  if (state.theme.isMobileMenuOpen) {
    actions.theme.closeMobileMenu();
  }
};

const BigMenu = styled.div`
  z-index: 1;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top:0;
  left:0;
  right:0;
  bottom: 0;
  background-color: var(--menubackground);
  box-sizing: border-box;

  .menu-header {
    width: 100%;
    max-width: 100%;
    height: 71px;
    display: flex;
    padding: 15px 50px;
    justify-content: space-between;
    align-items: center;

    img {
      width: 150px;
      height: 50px;
    }
    
    @media (max-width: 1230px) {
      padding: 15px;
    }
  }
  .menu-footer {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    height: 71px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .copyright {
      color: white !important;
      font-weight: 400;
      width: 100%;

      a {
        color: white;
        transition: color .2s ease;

        &:hover,
        &:focus {
          color: #cce4f0 !important;
        }
      }
    }
    .align-right {
      text-align: right;
    }
    @media (max-width: 600px) {
      flex-wrap: wrap;
      margin-top: 1rem;
      align-items: flex-start;
      height: auto;

      p {
        margin: 0;
      }
      .align-right {
        text-align: left;
      }
    }
    @media (max-width: 1230px) {
      padding: 0 15px;
    }
  }
`;

const BigMenuInner = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  height: calc(100% - 71px - 71px);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  .small-menu {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    img {
      height: 32px;
      width: 32px;
      margin: 5px 0;
      transition: 500ms;

      :hover {
        transform: rotate(360deg);
      }
    }
    @media (max-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
      img {
        margin: 5px;
      }
    }
  }

  @media (max-width: 600px) {
    flex-wrap: wrap;
    align-items: flex-start;
    height: auto;
  }
  @media (max-width: 1230px) {
    padding: 0 15px;
  }
`;

const MenuContent = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  text-align: left;
  width: 100%;
`;

const MenuLink = styled(Link)`
  width: 100%;
  outline: 0;
  font-size: 70px;
  line-height: 1;
  font-weight: 600;
  text-align: left;
  padding: 0.8rem 0;
  color: #fff;
  display: block;
  position: relative;
  z-index: 999;
  transition: color .2s ease;
  &:hover,
  &:focus {
    color: #cce4f0 !important;
  }
  @media (max-width: 600px) {
    font-size: 40px;
  }
`;

const NavItemWithChildMobile = styled.div`
  position: relative;
  display: block;

  @media (min-width: 1000px) {
    :hover .submenu_mobile {
      visibility: visible;
      opacity: 1;
    }
  }
`;

const ChildMenuMobile = styled.div`
  position: absolute;
  width: 100%;
  background-color: grey;
  font-size: 16px;
  z-index: 99;
  border-radius: 7px;
  visibility: hidden;
  opacity: 0;
`;

const SubMenu = styled.div`
`;

export default connect(MenuModal);