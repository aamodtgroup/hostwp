import { css } from "frontity";

const customStyle = css`
  .wp-block-group {
    margin-top: 80px;
    margin-bottom: 80px;
  }

  .wp-block-image img {
    filter: var(--imgfilter);
  }
  
  .wp-block-group.bluebg, .wp-block-group.greenbg, .wp-block-group.pinkbg {
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 80px;
    padding-bottom: 80px;
  }
  
  .wp-block-group .wp-block-columns {
    margin-bottom: 0;
  }

  .greenbg {
    background-color: var(--greenbg);

    p, h2, h3 {
      color: var(--darktext);
    }
  }

  .bluebg {
    background-color: var(--bluebg);

    p, h2, h3 {
      color: var(--darktext);
    }
  }

  .pinkbg {
    background-color: var(--pinkbg);

    p, h2, h3 {
      color: var(--darktext);
    }
  }

  .bigh2 {
    font-size: var(--bigh2);
  }

  .h2pricing {
    color: var(--title);
  }
  
  .color_group_2 img {
    border-radius: 15px;
    width: 475px;
    height: 475px; 
    object-fit: cover;
  }
  
  .icon img {
    height: 64px;
    width: 64px; 
  }
  
  .growth_buttons .wp-block-button__link {
    margin: 0px; 
    padding: 0px;
    padding-right: 35px; 
  }
  
  .included {
    margin-bottom: 0;
    font-weight: 600; 
  }
  
  .price_card {
    border-radius: 15px;
    border: 1px solid var(--border);
    background-color: var(--pricecard);
  }
  
  .price_card .wp-block-cover__inner-container {
    width: 100% !important;
    margin: 0;
    background-color: var(--pricecard);
  }
  
  .price_card.wp-block-cover {
    padding: 3rem; 
    align-items: flex-start;
    height: auto;
    min-height: 100px;
    width: 100%; 
    background-color: var(--pricecard);
  }
  
  .price_card ul {
    padding-inline-start: 20px; 
  }
  
  .price_card li {
    margin-bottom: .25rem;
    color: var(--text); 
  }
  
  .price_card .wp-block-cover__inner-container p {
    color: var(--text); 
  }
  
  .price_card .wp-block-buttons .wp-block-button .wp-block-button__link {
    width: 100%;
    background-color: transparent;
    color: var(--title) !important;
    border: solid var(--title);
    border-width: 2px;
    border-radius: 50px; 
  }
  
  .price_card .wp-block-buttons .wp-block-button.featured .wp-block-button__link {
    width: 100%;
    background-color: var(--title);
    color: var(--lighttext) !important;
    border: solid var(--title);
    border-width: 2px; 
  }
  
  .price_card .wp-block-buttons .wp-block-button {
    width: 100%; 
  }
  
  .wp-block-cover-image.has-background-dim::before, .wp-block-cover.has-background-dim::before {
    background-color: transparent !important; 
  }
  

  
  .pricing .wp-block-columns {
    margin-bottom: 32px; 
  }

  
  .wpcf7 input, textarea {
    border: none;
    margin-top: 5px;
    font-size: 16px;
    font-weight: 600;
    transition: border-color 0.5s ease-out;
    width: 100%;
    border-bottom: 2px solid #757575;
    color: var(--brand);
    background: transparent;
  }
  
  .wpcf7 input:invalid, textarea:invalid {
    border-bottom: 2px solid #757575;
    color: var(--placeholder);
    background: transparent;
    opacity: .5; 
  }
  
  .wpcf7 input:focus, textarea:focus {
    border-bottom: 2px solid var(--brand);
    color: var(--brand);
    opacity: 1; 
  }
  
  .wpcf7 ::placeholder {
    color: var(--placeholder);
    opacity: .75; 
  }
  
  .wpcf7 label {
    text-transform: uppercase;
    color: var(--placeholder);
    font-size: 14px;
    font-weight: 700; 
  }
  
  .wpcf7 .form-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;
    margin-bottom: 2rem;
  }
  
  .wpcf7 .send_button {
    margin: 2rem 0;
    text-align: center; 
  }
  
  .wpcf7-form-control.wpcf7-submit:hover {
    opacity: .85; 
  }
  
  .wp-block-contact-form-7-contact-form-selector {
    margin-bottom: 2rem; 
  }
  
  @media (max-width: 600px) {
    .hide_mobile {
      display: none; 
    } 
    .reverse_collapse {
      flex-direction: column-reverse; 
    } 
    .vh_gr_3 .wp-block-column img {
      width: 150px; 
      height: 150px; 
      padding-top: 20px; 
    } 
    .color_group_2 img {
      width: 285px;
      height: 285px; 
    } 
    .wp-block-column:not(:last-child) {
      margin-bottom: 2rem; 
    }
    .form-grid {
      grid-template-columns: repeat(1, 1fr); 
    }
    .wp-block-group .wp-block-columns, .wp-block-columns .wp-block-column {
      margin-bottom: 0; 
    }
    .pricing .wp-block-column {
      margin-bottom: 28px; 
    }
  }
`;
export default customStyle;