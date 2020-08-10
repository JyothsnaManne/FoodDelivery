import React, { Component } from 'react';
import { fetchRestaurents } from '../actions/foodActions';
import { connect } from 'react-redux';
import {
    NavLink
} from 'react-router-dom';
class ViewRestaurents extends Component {

    componentDidMount() {
        this.props.fetchRestaurents()
    }
    getRestaurents() {
        const rest = this.props.reducer.map(
            (restaurant, index) =>

                <div className="col-sm-3 my-3" key={index}>
                    <div className="card mb-4">
                        <img src={restaurant.restaurantImg} className="card-img-top" style={{ height: 193 }} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{restaurant.restaurantName}</h5>
                            <p className="card-text text-secondary font-italic">
                                {restaurant.restaurantSpeciality}
                            </p>
                            <NavLink to={"/restaurent/" + restaurant.restaurantId} className="card-link">View Menu</NavLink>
                        </div>
                    </div>
                </div>

        )
        return rest
    }

    render() {
        return (
            <div>
                <div className="mb-5">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner mt-2">
                            <div className="carousel-item active">
                                <div className="row">

                                    <img src="https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/09/15/Pictures/_22d8284c-b8b1-11e8-ab60-f008577e130d.jpg" className="img-fluid col-6 col-md-4" alt="..." />
                                    <img src="http://www.shudhrestaurant.com/images/photo-gallery/big/img30_big.jpg" className="img-fluid col-6 col-md-4" alt="..." />
                                    <img src="https://blog.dineout-cdn.co.in/blog/wp-content/uploads/2018/05/Kolkata-Blog-Banner-1030x538.png" className="img-fluid col-6 col-md-4" alt="..." />

                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">

                                    <img src="https://etimg.etb2bimg.com/photo/65115255.cms" className="img-fluid col-6 col-md-4" alt="..." />
                                    <img src="https://i2.wp.com/cdn1.bostonmagazine.com/wp-content/uploads/sites/2/2017/07/ice-cream-boston.jpg" className="img-fluid col-6 col-md-4" alt="..." />
                                    <img src="https://images7.alphacoders.com/421/421534.jpg" className="img-fluid col-6 col-md-4" alt="..." />

                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">

                                    <img src="https://www.wearegurgaon.com/wp-content/uploads/2019/06/best-shakes-gurgaon.jpg" className="img-fluid col-6 col-md-4" alt="..." />
                                    <img src="https://cdn.shortpixel.ai/spai/w_375+q_lossy+ret_img+to_webp/https://bariatricsurgeryco.org/wp-content/uploads/2019/11/Weight-Loss-Shakes-V2.jpg" className="img-fluid col-6 col-md-4" alt="..." />
                                    <img src="https://images-gmi-pmc.edge-generalmills.com/af74c121-a481-4bc6-96d5-b7bef27b7381.jpg" className="img-fluid col-6 col-md-4" alt="..." />

                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div className="container">
                    <div >
                        <div className="mb-4 ">
                            <h3>Details of All Restaurents!!!</h3>
                        </div>
                        <div className="row">{this.getRestaurents()}</div>

                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    reducer: state.reducer.restaurents
})
export default connect(mapStateToProps, { fetchRestaurents })(ViewRestaurents);