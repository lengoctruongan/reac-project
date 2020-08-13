import React, { Component } from 'react'
import {Link} from  'react-router-dom'
import {ButtonContainer} from '../Button'
import {ProductComsumer} from '../context'
export default class Detail extends Component {
    render() {
        return (
            <ProductComsumer>
                {
                 value=>{
                     const{id,company,img,info,price, title,inCart}=value.detailProduct;
                     return(
                         <div className="container py-5">
                             <div className="row">
                                 <div className="col-10 mx-auto text-center text-blue my-5">
                                     <h1>{title}</h1>
                                 </div>
                             </div>
                             <div className="row">
                                 <div className="col-10 mx-auto col-md-6 my-3">
                                     <img src={img} className="img-fluid" alt="Product"/>
                                 </div>

                             </div>
                             <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <h2>
                                    Model: {title}
                                </h2>
                                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                    <strong>
                                        Price: <span>$</span>
                                        {price}
                                    </strong>
                                </h4>
                                <p>
                                    Some infro about Product:

                                </p>
                                <p className="text-muted lead">
                                    {info}
                                </p>
                                <div>
                                    <Link to='/'>
                                        <ButtonContainer>
                                            Back to Product
                                        </ButtonContainer>
                                    </Link>
                                </div>
                             </div>
                         </div>
                     )
                 }
                }
            </ProductComsumer>
        )
    }
}
