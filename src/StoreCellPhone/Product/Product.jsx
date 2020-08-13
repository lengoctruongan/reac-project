import React, { Component } from 'react'
//import {connect} from 'react-redux'
import { ProductComsumer } from '../context'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


export default class Product extends Component {
 
    render() {
        let { stateProduct } = this.props;

        return (
            <div className="container">
                <h1 className="text-center text-success">OUT PRODUCT</h1>
                <div className="row">
                    {/* //{this.renderProduct(stateProduct)} */}
                    <ProductComsumer>
                        {value => {
                            return value.product.map((item, index) => {
                                return (
                                    <ProductWrapper className="col-9 col-lg-3 col-md-6 mx-auto my-3 content-product" key={index}>
                                        <div className="card" >
                                            <div onClick={()=>value.handleDetai(item)} className="img-container py-5">
                                                <Link to ='/detail'>
                                                <img className="card-img-top" src={item.img} alt />
                                                </Link>
                                                <button className="cart-button" disabled={item.inCart?true:false}>
                                                {item.inCart?(<p className="text-capitalize mb-0" disabled>In cart</p>):<i class="fa fa-cart-plus"></i>}
                                                </button>
                                               
                                            </div>
                                            <div className="card-footer d-flex justify-content-between">
                                                    <h5 style={{fontSize:"16px",color:"green"}}>{item.title }</h5>
                                                    <p className="text-right font-italic">{item.price}$</p>
                                            </div>
                                            
                                        </div>
                                    </ProductWrapper>
                                )
                            })

                        }}
                    </ProductComsumer>
                </div>
            </div>
        )
    }
}

const ProductWrapper=styled.div`

.card{
    border-color:transparent;
    transition:all 1s linear;

}
.card-footer{
    background:transparent;
    border-top:transparent;
    transition:all 1s linear;
}
&:hover{
    .card{
        border:0.04rem solid rgba(0,0,0,0.2);
        box-shadow:2px 2px 5px rgba(0,0,0,0.2);

    }
    .card-footer{
        background:rgba(247,247,247)
    }
    }
    .img-container{
        position:relative;
        overflow:hidden;
        

    }
    .card-img-top{
        transition: all 0.5s linear
    }
    .img-container:hover .card-img-top{
        transform: scale(1.1);
    }
    
    .cart-button{
        position: absolute;
        bottom:0;
        right:0;
        padding;0.2rem 0.4rem;
        background:var(--lightBlue);
        border:none;
        border-radius:0.5rem 0 0 0;
        transform: translate(100% 100%) !important;
    }
    .img-container:hover .cart-button{
        transform: translate(0,0);
    }
    .cart-button:hover{
        color:var(--mainBlue);
    }

}
`
//export default connect(state=>({stateProduct:state.StoreReducers.Product}),null)(Product)
