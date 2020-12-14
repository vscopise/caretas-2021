import React, { useState, useEffect } from 'react';
import { connect, styled } from 'frontity';
import Link from '../link';

const NewsTicker = ({ state }) => {
    const [tickerItems] = useState(
        Object.keys(state.source.post).slice(0, 5)
    );
    const [count, setcount] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setcount(count => (5 > count + 1 ? count + 1 : 0));
        }, 4000);
    }, []);

    const tickerItem = state.source.post[tickerItems[count]];

    return (
        <Container>
            <Title>Ultimas Noticias</Title>
            <TickerContent>
                <Link link={tickerItem.link}>
                    {tickerItem.title.rendered}
                </Link>
            </TickerContent>
        </Container>
    )
}

export default connect(NewsTicker);

const Container = styled.div`
    display: none;
    @media only screen and (min-width: 980px) {
        float: left;
        height: 33px;
        font-size: 12px;
        line-height: 33px;
        width: 60%;
        display: block;
    }
`;

const Title = styled.span`
    background: #dd0000;
    color: #fff;
    padding: 5px 10px;
    margin-right: 10px;
`;

const TickerContent = styled.div`
    display: inline-grid;
    & a {
        color: #222;
    }
`;