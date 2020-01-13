import React, {Component} from 'react';
import {MSG_ADD_TO_CAST_SUCCESS} from "../constants/Messages";

class ProductItem extends Component {
    onHandleAddCart  = (product) => {
        this.props.onAddToCart(product);
        this.props.onChangeMessage(MSG_ADD_TO_CAST_SUCCESS);
    };
    showRating = (rating) => {
        let result = [];
        if(rating > 0){
            for(let i = 1 ; i <= rating ; i++){
                result.push(<i className="fa fa-star"></i>)
            }
        }
        for(let j = 1 ; j <= (5 - rating) ; j++){
            result.push(<i className="fa fa-star-o"></i>)
        }

        return result;
    };
    render() {
        const {product} = this.props;
        return (
            <div className="col-lg-3 col-md-4 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={product.image}  className="img-fluid" alt=""/>
                        <a>
                            <div className="mask waves-light waves-effect waves-light"/>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong> <a>{product.name}</a>  </strong>
                        </h4>

                        <ul className="rating">
                            <li>
                               {this.showRating(product.rating)}
                            </li>

                        </ul>
                        <p className="card-text">
                            {product.desc}
                        </p>
                        <div className="card-footer">
                            <span className="left price">${product.price}</span>
                            <span className="right">
                                <a className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top"  data-original-title="Add to Cart" onClick={() => this.onHandleAddCart(product)}>
                                  <i className="fa fa-shopping-cart"/>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductItem;