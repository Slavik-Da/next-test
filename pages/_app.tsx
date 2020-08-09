import React from "react";
import '../styles/globals.css'
import {compose, createStore} from "redux";
import {rootReducer} from './../redux/rootReducer'
import {Provider} from 'react-redux'

/*
const store = createStore(rootReducer, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))
*/

export default function MyApp({Component, pageProps}) {
    return (
        <Component {...pageProps}/>
    )
}
