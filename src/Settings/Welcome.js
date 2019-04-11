import React from 'react';
import {AppContext} from '../providers/AppProvider';

export default function Welcome() {
    return (
        <AppContext.Consumer>
            {({firstVisit}) =>
                firstVisit ?
                    <div className="text__Secondary text__Center">
                        Welcome to Crypto<span className="text__Primary">Dash</span>, please select your favorite coins to begin.{' '}
                    </div>
                :null
            }
        </AppContext.Consumer>
    );
};
