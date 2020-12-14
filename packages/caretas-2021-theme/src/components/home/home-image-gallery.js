import React, { useState, useEffect } from 'react';
import { styled, connect } from 'frontity';
import { useTransition, animated, config } from 'react-spring';
import WidgetTitle from '../widget-title';

const Slides = ({ state, actions, items }) => {
    const [count, setcount] = useState(0);



    const transitions = useTransition(items[count], item => item, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.molasses,
    })

    useEffect(() => void setInterval(() => setcount(count => (count + 1) % 4), 4000), []);

    return transitions.map(({ item, props, key }) => (
        <animated.div
            onClick={() => actions.theme.toggleModal(item)}
            key={key}
            style={{ ...props, backgroundImage: `url(${state.source.attachment[item].source_url})` }}
        />
    ))

}

const HomeImageGallery = ({ state, actions, items, title, size }) => {
    return (
        <Container>
            <WidgetTitle title='Galería de fotos' />
            <SlidesContainer>
                <Slides state={state} actions={actions} items={items} />
            </SlidesContainer>
            <Title size={size} dangerouslySetInnerHTML={{ __html: title }} />
        </Container>
    )
}

export default connect(HomeImageGallery);

const Container = styled.div`
    margin-bottom: 20px;
`;

const Title = styled.h2`
    font-size: ${props => 10 + 0.05 * props.size}px;
    line-height: 1.3;
`;

const SlidesContainer = styled.div`
    position: relative;
    height: 200px;
    margin-bottom: 5px;
    & > div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 200px;
        background-size: cover;
        background-position: center;
        will-change: opacity;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const Modal = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
`;