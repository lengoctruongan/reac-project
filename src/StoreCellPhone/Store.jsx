import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Detail from './Detail/Detail'
import Card from './Card/Card'
import Default from './Default/Default'
import Produclist from './ProductList/Produclist'

export default class Store extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Switch>
                        <Route exact path="/" component={Produclist} />
                        <Route path="/detail" component={Detail} />
                        <Route path="/card" component={Card} />
                        <Route component={Default} />
                </Switch>
            </>
        )
    }
}
