import React from 'react';
import { connect, styled } from 'frontity';
import Link from "../link";
import { getPostsGroupedByCategory } from '../utility/';
import { animated, useSpring } from 'react-spring';
import FeaturedMedia from '../featured-media';

const MegaMenu = ({ state }) => {
  const postsPerCategory = getPostsGroupedByCategory(state);
  const categoryPosts = postsPerCategory.filter(item => item.category.slug === state.theme.megaMenuCatName)[0];
  const settings = {
    position: 'absolute',
    left: '0',
    color: '#fff',
    background: '#222',
    width: '100%',
    padding: '20px 0',
    zIndex: '99',
  }
  const animateStyle = useSpring({
    opacity: '1',
    from: { ...settings, opacity: '0' }
  });

  return (
    <animated.div style={animateStyle}>
      <Row>
        {
          categoryPosts.posts.splice(0,4).map(post => (
            <BoxCategory key={post.id}>
              <Link link={post.link}>
                <ImageContainer>
                  <FeaturedMedia id={post.featured_media} />
                </ImageContainer>
                <PostTitle dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
              </Link>
            </BoxCategory>
          ))
        }
      </Row>
    </animated.div>
  );
};

export default connect(MegaMenu);

const Row = styled.div`
  padding: 0 10px;
`;

const PostTitle = styled.h3`
  text-transform: none;
`;

const BoxCategory = styled.div`
  display: inline-grid;
  width: 23.125%;
  margin-left: 2.5%;
  & :first-of-type {
    margin-left: 0;
  }
  & a {
    color: #fff;
  }
`;

const ImageContainer = styled.div`
  & > div {
    height: 150px;
  }
`;