import React from 'react'
import { useSelector } from 'react-redux'

export default function Product() {
    const mangDT = useSelector(state => state.StoreReducers.Product);
    function renderDT() {
        return mangDT.map((dt, index) => {
            return (
                <div className="col-3" key={index}>
                    <div className="card">
                        <img className="img-fluid" src={dt.img} alt={dt.img} />
                        <div className="card-body">
                            <h4 className="card-title">{dt.title}</h4>
                            <p className="card-text">{dt.price}</p>
                        </div>
                    </div>
                </div>


            )
        })
    }
    return (
        <div className="container">
             <div className="row">
            {renderDT()}
        </div>
        </div>
       
    )
}
