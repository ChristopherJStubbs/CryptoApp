import React from 'react';
import styled, {css} from 'styled-components';
import {AppContext} from '../providers/AppProvider';

const Logo = styled.div`
    font-size: 1.5em;
`

const Bar = styled.div`
    display: grid;
    grid-template-columns: 3fr auto 0.5fr 0.5fr;
    margin-bottom: 2%;
`

const NavItemElement = styled.div`
    cursor: pointer;
    ${props => props.active && css`
        text-shadow: 0px 0px 30px #d87344;
    `}
    ${props => props.hidden && css`
        display: none;
    `}
`

function NavItem({name, active}) {
    return (
        <AppContext.Consumer>
            {({firstVisit, page, setPage}) => (
                <NavItemElement
                    active={page === name}
                    onClick={() => setPage(name)}
                    hidden={firstVisit && name === 'Dashboard'}
                >
                    {name}
                </NavItemElement>
            )}
        </AppContext.Consumer>
    )
}

export default function() {
    return (
        <Bar className="text__Secondary">
            <Logo>Crytpo<span className="text__Primary">Dash</span></Logo>
            <div/>
            <NavItem active name="Dashboard"></NavItem>
            <NavItem active name="Settings"></NavItem>
        </Bar>
    );
};
