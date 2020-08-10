import { FETCH_RESTAURENTS, SIGNUP, SIGNIN, FETCH_RESTAURENT_BYID, FETCH_MENU_BYID } from './types';
import axios from 'axios';


export const fetchRestaurents = () => dispatch => {

  axios.get("http://localhost:8081/restaurants/all")

    .then(restaurents => {
      
      dispatch({
        type: FETCH_RESTAURENTS,
        payload: restaurents.data
      })
    }
    );

};
export const UserSignup = newUser => dispatch => {
  axios.post("http://localhost:8081/user/signup", newUser)
    .then(user => {

      dispatch({
        type: SIGNUP,
        payload: user.data
      })

    })
};
export const UserSignIn = (mobile, password) => dispatch => {
  axios.request({
    url: "http://localhost:8081/user/signin",
    method: "post",
    auth: {
      username: mobile,
      password: password
    }
  }).then(res => {

    dispatch({
      type: SIGNIN,
      payload: res.data
    })

  })
};
export const fetchRestaurantbyid = (restaurantId) => dispatch => {
  axios.get("http://localhost:8081/restaurants/find/" + restaurantId)

    .then(res => {

      dispatch({
        type: FETCH_RESTAURENT_BYID,
        payload: res.data
      })
    })
};
export const fetchMenuById = restaurantId => dispatch => {
  axios.get("http://localhost:8081/menu/find/" + restaurantId)

    .then(menu => {

      dispatch({
        type: FETCH_MENU_BYID,
        payload: menu.data
      })

    })
};
