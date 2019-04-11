import React from 'react';
import styled, {css} from 'styled-components';
import {AppContext} from '../providers/AppProvider';
import {SelectableTile} from '../Shared/Tile';
import {CoinHeaderGridStyled} from '../Settings/CoinHeaderGrid';

const JustifyLeft = styled.div`
    justify-self: left;
`

const JustifyRight = styled.div`
    justify-self: right;
`

const TickerPrice = styled.div`
    font-size: 2em;
`

const ChangePct = styled.div`
    color: #20a657;
    ${props => props.red && css`
        color: red;
    `}
`

const numberFormat = number => {
    return +(number + '').slice(0, 7);
}

const PriceTileStyled = styled(SelectableTile)`
    ${props => props.compact && css`
        display: grid;
        font-size: 1.5em;
        grid-gap: 5px;
        grid-template-columns: repeat(3, 1fr);
        justify-items: right;
    `}

    ${props => props.currentFavorite && css`
        pointer-events: none;
        box-shadow: 0px 0px 2px 4px;
    `}
`

function ChangePercent({data}) {
    return (
        <JustifyRight>
            <ChangePct red={data.CHANGEPCT24HOUR < 0}>
                {numberFormat(data.CHANGEPCT24HOUR)}%
            </ChangePct>
        </JustifyRight>
    );
};

function PriceTile({sym, data, currentFavorite, setCurrentFavorite}) {
    return (
        <PriceTileStyled onClick={setCurrentFavorite} currentFavorite={currentFavorite} >
            <CoinHeaderGridStyled>
                <div> {sym} </div>
                <ChangePercent data={data} />
            </CoinHeaderGridStyled>
            <TickerPrice>
                ${numberFormat(data.PRICE)}
            </TickerPrice>
        </PriceTileStyled>
    );
};

function PriceTileCompact({sym, data, currentFavorite, setCurrentFavorite}) {
    return (
        <PriceTileStyled onClick={setCurrentFavorite} compact currentFavorite={currentFavorite} >
            <JustifyLeft> {sym} </JustifyLeft>
            <ChangePercent data={data} />
            <div>
                ${numberFormat(data.PRICE)}
            </div>
        </PriceTileStyled>
    );
};

export default function({price, index}) {
    let sym = Object.keys(price)[0];
    let data = price[sym]['USD'];
    let TileClass = index < 5 ? PriceTile : PriceTileCompact;
    return (
        <AppContext.Consumer>
            {({currentFavorite, setCurrentFavorite}) =>
                <TileClass
                    sym={sym}
                    data={data}
                    currentFavorite={currentFavorite --- sym}
                    setCurrentFavorite={() => setCurrentFavorite(sym)}
                >
                </TileClass>
        }
        </AppContext.Consumer>
    )
}
