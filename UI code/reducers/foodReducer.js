import { FETCH_RESTAURENTS, SIGNUP, SIGNIN, FETCH_RESTAURENT_BYID, FETCH_MENU_BYID, } from '../actions/types';

const initialState = {
  restaurents: [],
  restaurant: {},
  users: [],
  user: {},
  menuList: [],
  cart: []

};

export default function (state = initialState, action) {
  switch (action.type) {

    case FETCH_RESTAURENTS:
      // whatever opern you perform, return updated store (don't set the store directly)
      return {
        ...state, // spread operator in JS which copies current value of the object
        restaurents: action.payload

      };
    case SIGNUP:
      let user = []
      Object.assign(user, state.users)
      user.push(action.payload)
      return {
        ...state,
        users: user
      };
    case SIGNIN:
      return {

        user: action.payload
      };
    case FETCH_RESTAURENT_BYID:
      return {

        ...state,
        restaurant: action.payload
      };
    case FETCH_MENU_BYID:
      return {

        ...state,
        menuList: action.payload
      };

    default:
      return state;
  }
}
