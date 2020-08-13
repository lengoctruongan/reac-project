import React, { Component } from 'react'
import {storeProducts,detailProduct} from '../data'
const ProductContext=React.createContext();

class ProductProvider extends Component {
    state={
        product:[],
        detailProduct:detailProduct
    }
    componentDidMount(){
        this.setProducts();
    }
    setProducts=()=>{
        let tempProduct=[];
        storeProducts.forEach(item=>{
            const singleItem={...item};
            tempProduct=[...tempProduct,singleItem]
        })
        this.setState(()=>{
            return {product:tempProduct}
        })
        }
            
    
    handleDetai=(phone)=>{
        this.setState({
            detailProduct:phone
        })
    }
    addToCart=()=>{
        console.log("thêm giỏ hàng")
    }
    render() {
        return (
            <ProductContext.Provider value={{...this.state,handleDetai:this.handleDetai,addToCart:this.addToCart}}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}
const ProductComsumer=ProductContext.Consumer;
export {ProductProvider,ProductComsumer}
//