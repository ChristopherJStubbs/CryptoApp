// import React from 'react';
import styled from 'styled-components';

export const Tile = styled.div`
    background: #32316e;
    padding: 10px;
    text-align: center;
`

export const SelectableTile = styled(Tile)`
    &:hover {
        cursor: pointer;
        box-shadow: 0px 0px 5px 1px #fff;
    }
`

export const DeletableTile = styled(SelectableTile)`
    &:hover {
        cursor: pointer;
        box-shadow: 0px 0px 5px 1px #d87301;
    }
`

export const DisabledTile = styled(Tile)`
    pointer-events: none;
    opacity: 0.4;
`
