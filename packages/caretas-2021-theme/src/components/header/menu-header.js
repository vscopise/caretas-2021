import React from 'react';
import { connect, styled } from 'frontity';
import Link from '../link';
import MegaMenu from './mega-menu';
import {HamburgerIcon, CloseIcon} from '../menu-icon';
import MenuModal from '../menu-modal';

const MenuHeader = ({ state, actions }) => {
    const hideMobileMenu = state.theme.isMobileMenuOpen ? null : 'hide-mobile-menu';
    return (
        <Container>
            <NavContainer hideMobileMenu>
                {
                    state.theme.menu.map(item => {
                        const isCat = item.link.split('/')[1] === 'categoria';
                        const catName = isCat ? item.link.split('/')[2] : '';
                        const showMegaMenu = state.theme.showMegaMenu && catName === state.theme.megaMenuCatName;
                        return (
                            <NavItem 
                                key={item.name}
                                onMouseEnter={isCat ? () => actions.theme.showMegaMenu(`${catName}`) : null}
                                onMouseLeave={isCat ? actions.theme.hideMegaMenu : null}
                                showMegaMenu={showMegaMenu}
                            >
                                <Link link={item.link}>
                                    {item.name}
                                </Link>
                                {showMegaMenu && <MegaMenu />}
                            </NavItem>
                        )
                    })
                }
            </NavContainer>
            <ToggleMenu onClick={actions.theme.toggleMobileMenu}>
                {!state.theme.isMobileMenuOpen && <HamburgerIcon size={32} />}
                {state.theme.isMobileMenuOpen && <CloseIcon size={32} />}
            </ToggleMenu>            
        </Container>
    );
}
export default connect(MenuHeader);

const Container = styled.div`
    background: #dd0008;
    text-transform: uppercase;
    font-family: "Oswald", Helvetica, sans-serif;
    position: relative;
    height: 44px;
`;

const NavContainer = styled.div`
    position: absolute;
    display: ${props => props.hideMobileMenu ? 'none': 'block'};
    left: 0;
    top: 44px;
    width: 100%;
    z-index: 99;
    background: #dd0008;
    @media only screen and (min-width: 980px) {
        top: 0;
        display: block;
    }
`;

const NavItem = styled.span`
    float: none;
    & > a {
        color: #fff;
        display: block;
        position: relative;
        padding: 0.625rem 0.5rem;
    }
    & > a:hover {
        color: #ccc;
    }
    & a:after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: 0;
        margin-left: -12px;
        border-width: 0 12px 12px;
        border-style: solid;
        border-color: transparent transparent #222;
        display: ${props => props.showMegaMenu ? 'block' : 'none'};
        width: 0;
        z-index: 999;
    }
    @media only screen and (min-width: 980px) {
        float: left;
        & > a {
            display: inline-block;
        }
    }
`;

const ToggleMenu = styled.div`
    position: absolute;
    right: 0;
    float: right;
    width: 10%;
    font-size: 1.5em;
    margin: 0 10px;
    color: #fff;
    & svg {
        height: 44px;
    }
    @media only screen and (min-width: 980px) {
        display: none;
    }
`;