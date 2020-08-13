import React from 'react'
import Product from './Product'
import './index.scss'
import Header from './Header'
import {Switch,Route} from 'react-router-dom'
import Detail from './Details'
import Card from './Card'
import Default from './Default'
export default function TheGioiDiDong() {
    return (
        <div className="store-phone">
            <Header/>
            <Switch>
                        <Route exact path="/" component={Product} />
                        <Route path="/detail" component={Detail} />
                        <Route path="/card" component={Card} />
                        <Route component={Default} />
                        
            </Switch>
        </div>
    )
}
