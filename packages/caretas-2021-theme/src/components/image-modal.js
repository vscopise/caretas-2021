import React from 'react';
import { styled, connect } from 'frontity';

const ImageModal = ({ state, actions }) => {
    const imgUrl = state.source.attachment[state.theme.modalContent].source_url;
    return (
        <Overlay onClick={actions.theme.toggleModal}>
            <Image src={imgUrl} />
        </Overlay>
    )
}

export default connect(ImageModal);

const Overlay = styled.div`
    background-color: rgba(0,0,0,0.5);
    width: 100vw;
    height: 100vh;
    overflow: hidden auto;
    position: fixed;
    z-index: 99999;
    top: 0;
    left: 0;
`;

const Image = styled.img`
    display: block;
    width: 80%;
    max-width: 60%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;