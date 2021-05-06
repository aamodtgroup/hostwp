import { connect, css, Global } from "frontity";
import React from "react";

const DarkMode = ({ state }) => {
    const { mode, text } = state.theme;
    return (
        <>
            <Global 
                styles={css`
                :root {
                    --brand: #0077b5;
                    --white: #fff;
                    --black: #000;
                    --text: ${mode === 'light' ? '#212121': '#fff'};
                    --darktext: ${mode === 'light' ? '#fff': '#fff'};
                    --lighttext: ${mode === 'light' ? '#fff': '#121212'};
                    --background: ${mode === 'light' ? '#fff': '#121212'};
                    --menubackground: ${mode === 'light' ? '#0077b5': '#121212'};
                    --submenubackground: ${mode === 'light' ? '#fff': '#1E1E1E'};
                    --postbackground: ${mode === 'light' ? '#F2F3FC': '#1E1E1E'};
                    --darkbackground: ${mode === 'light' ? '#042a4e': '#1E1E1E'};
                    --border: ${mode === 'light' ? '#e0e0e0': '#333'};
                    --title: ${mode === 'light' ? '#0077b5': '#80bbda'};
                    --link: ${mode === 'light' ? '#0077b5': '#80bbda'};
                    --button: ${mode === 'light' ? '#0077b5': '#1E1E1E'};
                    --menutogglehover: ${mode === 'light' ? '#0077b5': '#80bbda'};
                    --menutogglehoverclose: ${mode === 'light' ? '#000': '#80bbda'};
                    --cookiebar: ${mode === 'light' ? '#fff': '#0077b5'};
                    --cookiebarbutton: ${mode === 'light' ? '#0077b5': '#fff'};
                    --cookiebartext: ${mode === 'light' ? '#fff': '#0077b5'};
                    --code: ${mode === 'light' ? '#121212': '#343434'};
                    --logocolor: ${mode === 'light' ? '#0077b5': '#fff'};
                    --browserbar: ${mode === 'light' ? '#f3f3f3': '#323232'};
                    --browserdots: ${mode === 'light' ? '#C5C8D6': '#C5C8D6'};
                    --pricecard: ${mode === 'light' ? '#fff': '#1e1e1e'};
                    --greenbg: ${mode === 'light' ? '#007e65': '#1e1e1e'};
                    --bluebg: ${mode === 'light' ? '#0a4b78': '#1e1e1e'};
                    --pinkbg: ${mode === 'light' ? '#CC81A1': '#1e1e1e'};
                    --placeholder: ${mode === 'light' ? '#757575': '#fefefe'};
                    --transition: 500ms ease;
                    --textsize: ${text === 'normal' ? '1.25rem' : '1.625rem'};
                    --asize: ${text === 'normal' ? '1.25rem' : '1.625rem'};
                    --h1size: ${text === 'normal' ? '2.5rem' : '3rem'};
                    --h1sizehero: ${text === 'normal' ? '3rem' : '3.5rem'};
                    --h2size: ${text === 'normal' ? '2rem' : '2.5rem'};
                    --h2sizecard: ${text === 'normal' ? '1.5rem' : '2rem'};
                    --bigh2: ${text === 'normal' ? '3.5rem' : '3.5rem'};
                    --h3size: ${text === 'normal' ? '1.75rem' : '2.25rem'};
                    --h4size: ${text === 'normal' ? '1.5rem' : '2rem'};
                    --h5size: ${text === 'normal' ? '1.375rem' : '1.875rem'};
                    --h6size: ${text === 'normal' ? '1.25rem' : '1.75rem'};
                    --footerp: ${text === 'normal' ? '16px' : '20px'};
                    --navlinks: ${text === 'normal' ? '18px' : '24px'};
                }
            `}
            />
        </>
    );
};

export default connect(DarkMode);