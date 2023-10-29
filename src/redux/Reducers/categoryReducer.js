import {
  CHANGE_CATEGORY,
  INCREMENT,
  DECREMENT,
} from "../Actions/categoryAction";

const count = localStorage.getItem("carts");
let parsedCarts = "";
let cartCount = 0;
if (count) {
  parsedCarts = JSON.parse(count);
  cartCount = parsedCarts.length;
}
const INITIAL_STATE = {
  count: cartCount,
  category: null,
};

const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_CATEGORY:
      return {
        ...state,
        category: 'Hi',
      };
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
};

export default categoryReducer;
