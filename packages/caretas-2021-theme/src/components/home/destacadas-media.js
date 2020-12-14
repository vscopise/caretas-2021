import React from 'react';
import { connect, styled } from 'frontity';
import Clearfix from '../utility/clearfix';
import PostBlock from '../post-block';
import { getPostsFromCategory } from '../utility/';
import HomeImageGallery from './home-image-gallery';


const DestacadasMedia = ({ state }) => {
    const data = state.source.get(state.router.link);
    const videoPost = getPostsFromCategory(
        state.source, data.homeData.cat_videos
    ).sort((a, b) => a.date < b.date ? 1 : -1)[0];

    return (
        <Container>
            <Clearfix>
                <Column first>
                    <PostBlock
                        postId={data.homeData.zones[3][0]}
                        title='Noticia destacada'
                        size='200'
                    />
                    <PostBlock
                        postId={videoPost.id}
                        title='Videos'
                        size='200'
                    />
                </Column>
                <Column>
                    <PostBlock
                        postId={data.homeData.zones[4][0]}
                        title='Noticia destacada'
                        size='200'
                    />
                    <HomeImageGallery
                        items={data.homeData.img_gallery_items}
                        title={data.homeData.img_gallery_title}
                        size='200'
                    />
                </Column>
            </Clearfix>
        </Container>
    );
}

export default connect(DestacadasMedia);

const Container = styled.div`
    margin-bottom: 20px;
    @media only screen and (min-width: 980px) {
        margin-bottom: 48px;
    } 
`;

const Column = styled.div`
    @media only screen and (min-width: 980px) {
        float: left;
        width: 49%;
        margin-left: ${props => props.first ? '0' : '2'}%;
    }
`;