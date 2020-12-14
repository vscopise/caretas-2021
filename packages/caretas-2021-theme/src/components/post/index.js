import React from 'react';
import { styled, connect } from 'frontity';
import { SocialIcon } from 'react-social-icons';
import FeaturedMedia from '../featured-media';
import Comments from './comments';
import Sidebar from '../sidebar';

const Post = ({ state, actions, libraries }) => {
    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(post.date).toLocaleDateString('es-ES', options);

    const author = state.source.author[post.author];
    const Html2React = libraries.html2react.Component;

    return data.isReady ? (
        <>
            <Main>
                <Title dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                <Excerpt dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                <Featured>
                    <FeaturedMedia id={post.featured_media} size={437} />
                </Featured>
                <EntryMeta>
                    Por: {author.name} - {date}
                    {
                        state.theme.socialShare.map(
                            network => <Icon 
                                url={network.url + state.frontity.url + state.router.link} 
                                network={network.id} 
                                key={network.id} 
                                style={{ height: 20, width: 20 }} 
                            />
                        )
                    }
                </EntryMeta>
                <Content>
                    <Html2React html={post.content.rendered} />
                </Content>
                <Comments postId={post.id} />
            </Main>
            <Side />
        </>
    ) : null;
};

export default connect(Post);

const Title = styled.h1`
    @media only screen and (min-width: 980px) {
        font-size: 35px;
        margin-bottom: 20px;
    }
`;

const Featured = styled.div`
    margin-bottom: 20px;
`;

const Excerpt = styled.div`
    border-top: 1px solid #888;
    border-bottom: 1px solid #888;
    padding: 8px 0 10px;
    margin: 15px 0;
    & p {
        font-size: 20px;
    }
`;

const Icon = styled(SocialIcon)`
    margin-left: 5px;
`;

const EntryMeta = styled.div`
    text-transform: uppercase;
    border-bottom: 1px solid #888;
    margin-bottom: 15px;
    padding-bottom: 15px;
    font-size: 0.75rem;
`;

const Main = styled.div`
    float: left;
    width: 100%;
    @media only screen and (min-width: 980px) {
        width: 65.83%;
        margin-right: 2.5%;
    }
`;

const Side = styled(Sidebar)`
    float: left;
    width: 100%;
    @media only screen and (min-width: 980px) {
        width: 31.66%;
    }
`;

const Content = styled.div`
    p {
        font-size: 19px;
        margin-bottom: 20px;
    }
`;