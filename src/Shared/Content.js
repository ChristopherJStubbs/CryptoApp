import React from 'react';
import {AppContext} from '../providers/AppProvider';

export default function(props) {
    return (
        <AppContext.Consumer>
            {({coinList, prices, firstVisit}) => {
                if (!coinList) {
                    return (
                        <div className="text__Center">
                            <img                                                     src="https://cdn2.scratch.mit.edu/get_image/gallery/1115204_170x100.png" alt="Loading"/>
                            <br/> <br/>
                            <span className="text__Primary text__Center">Loading Coins...</span>
                        </div>
                    )
                } if (!firstVisit && !prices) {
                    return (
                        <div className="text__Center">
                            <img                                                     src="https://cdn2.scratch.mit.edu/get_image/gallery/1115204_170x100.png" alt="Loading"/>
                            <br/> <br/>
                            <span className="text__Primary text__Center">Loading Coins...</span>
                        </div>
                    )
                } else {
                    return (
                        <div>
                            {props.children}
                        </div>
                    )
                }
            }}
        </AppContext.Consumer>
    )
}
