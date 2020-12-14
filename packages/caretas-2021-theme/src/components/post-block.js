import React, { useEffect } from 'react';
import { connect, styled } from 'frontity';
import Link from './link';
import FeaturedMedia from './featured-media';
import WidgetTitle from './widget-title';
import { VideoIcon } from '../assets/icons/video-icon';
import Loading from '../assets/icons/loading';

const PostBlock = ({ postId, state, actions, title, size, padding, background, excerpt }) => {

    useEffect(() => {
        actions.source.fetch(`/post/${postId}`);
    }, []);


    const post = state.source.post[postId];

    if (post) {
        const isVideo = post.format === 'video' && post.video !== '';
        return (
            <Container padding={padding} background={background}>
                <Link link={post.link}>
                    {title && <WidgetTitle title={title} />}
                    <ImageContainer >
                        <Image size={size}>
                            <FeaturedMedia id={post.featured_media} size={size} />
                        </Image>
                        {isVideo && <Icon><VideoIcon size='28px' color='white' /></Icon>}
                    </ImageContainer>
                    <Title size={size} dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                    {excerpt && <Excerpt dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />}
                </Link>
            </Container>
        )
    } else {
        return (<Loading size={size}/>);
    }
}

export default connect(PostBlock);

const Container = styled.div`
    padding: ${props => props.padding ? props.padding : 0}px;
    background: ${props => props.background ? props.background : '#ffffff'};
    margin-bottom: 20px;
`;

const ImageContainer = styled.div`
    margin-bottom: 5px;
    position: relative;
`;

const Image = styled.div`
    & > div {
        height: 200px;
    }
    @media only screen and (min-width: 980px) {
        & > div {
            height: ${props => props.size}px;
        }
    }
`;

const Title = styled.h2`
    font-size: ${props => 10 + 0.05 * props.size}px;
    line-height: 1.3;
`;

const Excerpt = styled.div`
    padding-top: 10px;
`;

const Icon = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 24px;
    height: 24px;
    -webkit-transition: 0.43s cubic-bezier(0.47, 0.13, 0.16, 0.72) 0s;
    -moz-transition: 0.43s cubic-bezier(0.47, 0.13, 0.16, 0.72) 0s;
    -o-transition: 0.43s cubic-bezier(0.47, 0.13, 0.16, 0.72) 0s;
    transition: 0.43s cubic-bezier(0.47, 0.13, 0.16, 0.72) 0s;
    ${Container}:hover & {
        top: 50%;
        right: 50%;
        margin-top: -12px;
        margin-right: -12px;
        -webkit-transform: scale(1.5);
        -moz-transform: scale(1.5);
        transform: scale(1.5);
        -webkit-transition: 0.43s cubic-bezier(0.47, 0.13, 0.16, 0.72) 0s;
        -moz-transition: 0.43s cubic-bezier(0.47, 0.13, 0.16, 0.72) 0s;
        -o-transition: 0.43s cubic-bezier(0.47, 0.13, 0.16, 0.72) 0s;
        transition: 0.43s cubic-bezier(0.47, 0.13, 0.16, 0.72) 0s;
    }
`;