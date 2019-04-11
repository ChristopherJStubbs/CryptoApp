import React from 'react';
import styled from 'styled-components';
import {AppContext} from '../providers/AppProvider';

const ConfirmButtonStyled = styled.div`
    margin: 20px;
    color: #d87344;
    cursor: pointer;
    font-size: 1.5rem;
    border: .5px solid white;
    padding: 5px;
        &:hover {
            box-shadow: 0px 0px 4px 2px #d87329;
        }
`

export const CenterDiv = styled.div`
    display: grid;
    justify-content: center;
`

export default function() {
    return (
        <AppContext.Consumer>
            {({confirmFavorites}) =>
            <CenterDiv>
                <ConfirmButtonStyled onClick={confirmFavorites}>
                    Confirm Favorites
                </ConfirmButtonStyled>
            </CenterDiv>
            }
        </AppContext.Consumer>
    )
}
