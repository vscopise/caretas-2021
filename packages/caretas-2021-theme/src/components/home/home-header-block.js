import React, { useEffect } from 'react';
import { connect, styled, keyframes } from 'frontity';
import Link from '../link';
import LoadingImage from '../../assets/icons/loading-image';

const HomeHeaderBlock = ({ state, actions, postId, position }) => {

    useEffect(() => {
        actions.source.fetch(`/post/${postId}`);
    }, []);

    const post = state.source.post[postId];
    const sizes = [461, 261, 198, 198];
    const fontSizes = [30, 25, 20, 20];

    if (post) {
        const media = state.source.attachment[post.featured_media];
        if (!media) {
            actions.source.fetch(`/media/${post.featured_media}`);
        }
        return (
            <Link link={post.link}>
                <Container position={position} sizes={sizes} fontSizes={fontSizes}>
                    {!media && <LoadingImage size={sizes[position]} />}
                    <ImageContainer
                        style={media ? { backgroundSize: 'cover', backgroundImage: `url(${media.source_url})` } : null}
                    />
                    <Meta>
                        <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                        {
                            position === 0 &&
                            <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                        }
                    </Meta>
                </Container>
            </Link>
        );

    } else {
        return null
    }
}

export default connect(HomeHeaderBlock);


const Container = styled.div`
    height: unset;
    
    & h2 {
        font-size: 20px;
        font-weight: 400;
    }
    @media only screen and (min-width: 980px) {
        height: ${props => props.sizes[props.position]}px;
        position: relative;
        overflow: hidden;
        & h2 {
            font-size: ${props => props.fontSizes[props.position]}px;
            color: #fff;
        }
    }
`;

const ImageContainer = styled.div`
    position: relative;
    height: 200px;
    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    -moz-transform: scale(1,1);
    -webkit-transform: scale(1,1);
    transform: scale(1,1);
    ${Container}:hover & {
        -moz-transform: scale(1.1,1.1);
        -webkit-transform: scale(1.1,1.1);
        transform: scale(1.1,1.1);
    }
    
    @media only screen and (min-width: 980px) {
        height: -webkit-fill-available;
    }
`;

const Meta = styled.div`
    & p {
        display: none;
    }
    @media only screen and (min-width: 980px) {
        & p {
            display: block;
        }
        padding: 50px 7% 15px 8%;
        width: 100%;
        background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.65) 50%);
        color: #fff;
        position: absolute;
        bottom: 0;
    }
`;