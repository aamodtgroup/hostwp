import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import LottiePlayer from "./lottie";

const Hero = ({ state }) => {
    return (
        <>
        <HeroContainer>
                <div className="col1">
                    <h1>Vi hoster verdens mest populære nettside plattform.</h1>
                    <p>39% av nettet er bygget på WordPress. Mange bloggere, små bedrifter og Fortune 500-selskaper bruker WordPress for sine nettsider. Bli med i gruppen med millioner av bedrifter og mennesker som kaller WordPress sitt hjem.</p>
                    <div className="buttons">
                    <Link link="/planer-og-priser/"><button className="wp-block-button__link">Se planer og priser</button></Link>
                        <Link link="/kontakt-oss/"><button className="wp-block-button__link">Kontakt oss</button></Link>
                    </div>
                </div>
                <div className="lottie">
                    <LottiePlayer />
                </div>
        </HeroContainer>
        </>
    );
};

export default connect(Hero);

const HeroContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: calc(100vh - 66px);
    min-height: calc(100vh - 66px);
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1500px;
    margin: 0 auto;
    padding-left: 15px;
    padding-right: 15px;
    .col1 {
        width: 600px;
    }
    p {
        margin-bottom: 2rem;
    }
        
    .buttons .wp-block-button__link {
        margin-right: 1rem;
        margin-bottom: 1rem;
    }

    @media (max-width: 1500px) {
        width: auto;
    }

    @media (max-width: 600px) {
        p {
            width: auto;
        }
        .col1 {
            width: auto;
        }
    }

    img {
        object-fit: contain;
    }

    @media (max-width: 1229px) {
        align-items: flex-start;
        justify-content: center;
        height: auto;
        padding-top: 2rem;
    }
`;