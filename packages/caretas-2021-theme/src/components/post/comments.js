import React, { useEffect } from 'react';
import { styled, connect } from 'frontity';
import post from '.';

const Comments = ({ state, actions, postId }) => {
    useEffect(() => {
        actions.source.fetch(`@comments/${postId}`);
      }, []);
      const data = state.source.get(`@comments/${postId}`);
    

    return (
        data.isReady &&
        <>
        <div>CommentForm</div>
        <div>Comments</div>
        </>
    );
}

export default connect(Comments);