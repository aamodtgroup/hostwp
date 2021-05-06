import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import Logo from "../header/logo";

const Footer = ({ state }) => {
  const { mode } = state.theme;

  return (
    <>
      <Container>
        <hr className="divider div1" />
        <div className="footer-grid">
          <div className="footer-widget">
            <Logo />
          </div>
          <div className="footer-widget">
            <h4 className="widget-title">Tjenester</h4>
            <ul className="widget-list">
              {/* <li><Link className="widget-list-link" link="/tjenster/nettside/">Nettside</Link></li> */}
              {/* <li><Link className="widget-list-link" link="/tjenster/nettbutikk/">Nettbutikk</Link></li> */}
              <li><Link className="widget-list-link" link="/tjenester/delt-hosting">Delt hosting</Link></li>
              <li><Link className="widget-list-link" link="/tjenester/vps/">VPS</Link></li>
              <li><Link className="widget-list-link" link="/tjenester/dedikert-server/">Dedikert server</Link></li>
              <li><Link className="widget-list-link" link="/tjenester/domene/">Domene</Link></li>
            </ul>
          </div>
          <div className="footer-widget">
            <h4 className="widget-title">Sitemap</h4>
            <ul className="widget-list">
              <li><Link className="widget-list-link" link="/">Hjem</Link></li>
              <li><Link className="widget-list-link" link="/tjenester/">Tjenester</Link></li>
              <li><Link className="widget-list-link" link="/planer-og-priser/">Planer og priser</Link></li>
              <li><Link className="widget-list-link" link="/kontakt-oss/">Kontakt oss</Link></li>
            </ul>
          </div>
          <div className="footer-widget">
            <h4 className="widget-title">Teknologi</h4>
            <ul className="widget-list">
              <li><Link className="widget-list-link" target="_blank" rel="nofollow noopener" link="https://frontity.org/">Frontity</Link></li>
              <li><Link className="widget-list-link" target="_blank" rel="nofollow noopener" link="https://wordpress.org/">WordPress</Link></li>
              <li><Link className="widget-list-link" target="_blank" rel="nofollow noopener" link="https://github.com/aamodtgroup/">GitHub</Link></li>
            </ul>
          </div>
          <div className="footer-widget">
            <h4 className="widget-title">Følg oss</h4>
            <ul className="widget-list">
              <li><Link className="widget-list-link" target="_blank" rel="nofollow noopener" link="https://www.facebook.com/hostwp">Facebook</Link></li>
              <li><Link className="widget-list-link" target="_blank" rel="nofollow noopener" link="https://twitter.com/hostwp">Twitter</Link></li>
              <li><Link className="widget-list-link" target="_blank" rel="nofollow noopener" link="https://www.instagram.com/hostwp/">Instagram</Link></li>
            </ul>
          </div>
        </div>
        <hr className="divider div2" />
        <div className="copyright-grid">
          <div className="column1">
            <p className="copyright">© 2021 HostWP</p>
          </div>
          <div className="column2">
            <p className="copyright">
              <Link link="/personvern">Personvern</Link>
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default connect(Footer);

const Container = styled.footer`
  display: block;
  width: 100%;
  max-width: 1200px;
  justify-content: center;
  margin: 0 auto;
  padding: 0;
  margin-top: 2rem;
  margin-bottom: 2rem;
  .footer-grid {
    padding-top: 50px;
    padding-bottom: 50px;
    margin-bottom: 0;
    display: grid;
    grid-template-columns: 0.8fr repeat(4, auto);
  }
  .footer-widget {
    line-height: 24px;
    margin-bottom: 35px;
    :not(:first-of-type) {
      margin-left: 32px;
    }
    .widget-title {
      color: var(--title);
      margin-bottom: 0.5rem;
      font-size: var(--h6size);
      font-weight: 600;
    }
    p {
      font-size: var(--footerp);
    }
    .widget-list {
      list-style: none;
      padding-left: 0;
      li {
        margin: 0 !important;
        margin-bottom: 0.5rem;
        .widget-list-link {
          text-decoration: none;
          transition: all 0.3s ease;
          color: var(--text);
          font-size: var(--footerp);
          &:hover {
            color: #0077b5;
          }
        }
      }
    }
  }
  .divider {
    display: block;
    width: 100%;
    height: 1px;
    border: 0;
    margin: 0;
    border-top: 1px solid var(--border);
    padding: 0;
  }
  .copyright-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .column2 {
    text-align: right;
  }
  .copyright {
    font-size: var(--footerp);
    margin: 1rem 0;
    color: var(--text);
  }
  .copyright a {
    color: var(--text);
    font-size: var(--footerp);
  }
  @media screen and (max-width: 800px) {
    padding: 20px 15px;
    .footer-grid {
      display: grid;
      grid-template-rows: auto repeat(3, auto);
      grid-template-columns: 1fr 1fr;
      padding-top: 25px;
      padding-bottom: 0px;
      flex-wrap: wrap;
    }
    .footer-widget {
      :first-of-type {
        grid-column-start: 1;
        grid-column-end: 3;
      }
    }
    .footer-widget {
      :not(:first-of-type) {
        margin-left: 0;
      }
    }
  }
`;
