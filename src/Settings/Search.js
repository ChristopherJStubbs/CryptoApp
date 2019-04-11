import React from 'react';
import styled from 'styled-components';
import '../App.css';
import {AppContext} from '../providers/AppProvider';
import _ from 'lodash';
import fuzzy from 'fuzzy';

const SearchGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 4fr;
`

const SearchInput = styled.input`
    background-color: #d87344;
    color: black;
    height: 1.75em;
    font-size: 1.5em;
    place-self: center left;
`

const handleFilter = _.debounce((inputValue, coinList, setFilteredCoins) => {
    let coinSymbols = Object.keys(coinList);

    let coinNames = coinSymbols.map(sym => coinList[sym].CoinName)
    let allStringToSearch = coinSymbols.concat(coinNames);
    let fuzzyResults = fuzzy
        .filter(inputValue, allStringToSearch, {})
        .map(result => result.string);

    let filteredCoins = _.pickBy(coinList, (result, symKey) => {
        let coinName = result.CoinName;
        return (_.includes(fuzzyResults, symKey) || _.includes(fuzzyResults, coinName))
    });
    setFilteredCoins(filteredCoins);
}, 500);

function filterCoins(e, setFilteredCoins, coinList) {
    let inputValue = e.target.value;
    if(!inputValue) {
        setFilteredCoins(null);
        return;
    }
    handleFilter(inputValue, coinList, setFilteredCoins)
}

export default function() {
    return (
        <AppContext.Consumer>
            {({setFilteredCoins, coinList}) =>
            <SearchGrid>
                <h3 className="text__Primary">Seach Coins:</h3>
                <SearchInput onKeyUp={(e) => filterCoins(e, setFilteredCoins, coinList)} />
            </SearchGrid>
            }
        </AppContext.Consumer>
    )
};
