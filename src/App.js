import React from 'react'

import {Blog,Features,Footers,Headers,Possibility,WhatTrocaki} from './containers'
import {CTA,Brand,Navbar} from './components'
import './app.css';

const App = () => {
    return (
        <div className = 'App'>
            <div className = 'gradient__bg'>
                <Navbar/>
                <Headers/>
            </div>
            <Brand/>
            <WhatTrocaki/>
            <Features/>
            <Possibility/>
            <CTA/>
            <Blog/>
            <Footers/>
        </div>
    )
}

export default App

