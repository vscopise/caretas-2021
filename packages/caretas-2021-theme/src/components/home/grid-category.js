import React from 'react';
import { connect, styled } from 'frontity';
import WidgetTitle from '../widget-title';
import PostBlock from '../post-block';
import { getPostsGroupedByCategory } from '../utility/';


const GridCategory = ({ state, category, excerpt, right }) => {

    const postsPerCategory = getPostsGroupedByCategory(state, 5);

    const categoryPosts = postsPerCategory.filter(item => item.category.slug === category)[0];

    const categoryName = state.source.category[
        Object.keys(state.source.category).find(
            item => state.source.category[item].slug === category
        )
    ].name;


    return (
        <Container>
            <WidgetTitle title={categoryName} />
            <Column first>
                <PostBlock
                    postId={categoryPosts.posts.slice(0, 1)[0].id}
                    size='200'
                    excerpt
                />
            </Column>
            <Column>
                {categoryPosts.posts.slice(1, 5).map((post, index) => {
                    return (
                        <Item key={index} index={index}>
                            <PostBlock
                                postId={post.id}
                                size='100'
                            />
                        </Item>
                    );
                })}
            </Column>
        </Container>
    );
};

export default connect(GridCategory);

const Container = styled.div`
    @media only screen and (min-width: 980px) {
        float: left;
        margin-bottom: 48px;
    }
`
const Column = styled.div`
    @media only screen and (min-width: 980px) {
        float: ${props => props.right ? 'right' : 'left'};
        width: 49%;
        margin-left: ${props => props.first ? '0' : '2'}%;
    }
`;

const Item = styled.div`
    @media only screen and (min-width: 980px) {
        width: 50%;
        display: inline-grid;
        padding-right: ${props => props.index % 2 === 0 ? '10' : '0'}px;
    }
`;