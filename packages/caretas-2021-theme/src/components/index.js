import React, { useEffect } from 'react';
import { connect, css, Global, Head, styled } from 'frontity';
import Switch from "@frontity/components/switch";
import Title from './title';
import Header from './header';
import Footer from './footer';
import Home from './home';
import Post from './post';
import List from './list';
import ImageModal from './image-modal'
import oswaldMediumTTF from '../assets/fonts/Oswald-Medium.ttf';
import ptSerifBoldTTF from '../assets/fonts/PTSerif-Bold.ttf';
import ptSerifBoldItalicTTF from '../assets/fonts/PTSerif-BoldItalic.ttf';
import ptSerifItalicTTF from '../assets/fonts/PTSerif-Italic.ttf';
import ptSerifRegularTTF from '../assets/fonts/PTSerif-Regular.ttf';

import { mainCategories } from './utility/config';

const Theme = ({ state, actions }) => {
    useEffect(() => {
        const attachExtraDataToState = async () => {
            await Promise.all(
                Object.values(mainCategories).map(
                    category => actions.source.fetch(
                        `/category/${category}`
                    )
                )
            )
        };
        attachExtraDataToState();
    });
    const data = state.source.get(state.router.link);
    return (
        <>
            <Title />
            <Head>
                <meta name="description" content={state.theme.description} />
                <html lang="es" />
            </Head>
            <Global styles={globalStyles} />
            <Main>
                <Header />
                {state.theme.isModalOpen && <ImageModal />}
                <Switch>
                    <Home when={data.isHome} />
                    <Post when={data.isPostType} />
                    <List when={data.isArchive} />
                </Switch>
            </Main>
            <Switch>
                <Footer when={!data.isPostType} />
            </Switch>
        </>
    );
};

export default connect(Theme);

const globalStyles = css`
    @font-face {
        font-family: "Oswald";
        src: url(${oswaldMediumTTF}) format("truetype");
        font-weight: 500;
        font-display: swap;
    }
    @font-face {
        font-family: "PT Serif";
        src: url(${ptSerifBoldTTF}) format("truetype");
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: "PT Serif";
        src: url(${ptSerifBoldItalicTTF}) format("truetype");
        font-weight: 700;
        font-style: italic;
        font-display: swap;
    }
    @font-face {
        font-family: "PT Serif";
        src: url(${ptSerifItalicTTF}) format("truetype");
        font-weight: 400;
        font-style: italic;
        font-display: swap;
    }
    @font-face {
        font-family: "PT Serif";
        src: url(${ptSerifRegularTTF}) format("truetype");
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }
    *, *:before, *:after {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 0;
        font-size: 1.0rem;
        line-height: 1.6;
        background: #efefef;
        font-family: "PT Serif", sans-serif;
    }
    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: "Oswald", Helvetica, Arial, sans-serif;
        font-weight: 400;
    }
    img {
        max-width: 100%;
        height: auto;
        vertical-align: bottom;
    }
    a {
        text-decoration: none;
        color: inherit;
        & :hover {
            color: #d00000;
        }
    }
`;

const Main = styled.div`
    width: 90%;
    max-width: 1220px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 0 20px 20px;
    overflow: hidden;
    background: #fff;
`;