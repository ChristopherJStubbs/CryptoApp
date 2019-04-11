import React from 'react';
import styled from 'styled-components';
import {Tile} from '../Shared/Tile';
import {AppContext} from '../providers/AppProvider';
import CoinImage from '../Shared/CoinImage';

const SpotlightName = styled.div`
    text-align: center;
`

export default function () {
    return (
        <AppContext.Consumer>
            {({currentFavorite, coinList}) =>
                <Tile>
                    <SpotlightName> <h2>{coinList[currentFavorite].CoinName} </h2> </SpotlightName>
                    <CoinImage spotlight coin={coinList[currentFavorite]} />
                </Tile>
        }
    </AppContext.Consumer>
    )
}
