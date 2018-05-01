import axios from "axios";

const GET_USERS = "GET_USERS";
const GET_FEATURED_PRODUCTS = "GET_FEATURED_PRODUCTS";
const GET_All_PRODUCTS = "GET_All_PRODUCTS";
const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";
// ACTION CREATORS

export function getUsers() {
  return {
    type: GET_USERS,
    payload: axios
      .get("/api/getusers")
      .then(response => {
        return response.data;
      })
      .catch(err => console.log(err))
  };
}
export function getAllProducts() {
  return {
    type: GET_All_PRODUCTS,
    payload: axios
      .get("http://localhost:3001/api/allProducts")
      .then(response => {
        return response.data;
      })
      .catch(console.log)
  };
}

export function getFeaturedProducts() {
  return {
    type: GET_FEATURED_PRODUCTS,
    payload: axios
      .get("http://localhost:3001/api/featuredProducts")
      .then(response => {
        console.log("this is the response", response.data);
        return response.data;
      })
      .catch(err => console.log)
  };
}
export function getProductById(id) {
  return {
    type: GET_PRODUCT_BY_ID,
    payload: axios
      .get(`http://localhost:3001/api/product/${id}`)
      .then(response => {
        return response.data;
      })
      .catch(err => console.log)
  };
}

// INITIAL STATE

const initialState = {
  users: [],
  isLoading: false,
  didError: false,
  featuredProducts: [],
  allProducts: [],
  productById: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_USERS}_PENDING`:
      return Object.assign({}, state, { isLoading: true });

    case `${GET_USERS}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        users: action.payload
      });
    case `${GET_USERS}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didError: true
      });
    case `${GET_All_PRODUCTS}_PENDING`:
      return Object.assign({}, state, { isLoading: true });

    case `${GET_All_PRODUCTS}_FULFILLED`:
      console.log("actions.payload", action.payload);
      return Object.assign({}, state, {
        isLoading: false,
        allProducts: action.payload
      });
    case `${GET_All_PRODUCTS}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didError: true
      });
    case `${GET_FEATURED_PRODUCTS}_PENDING`:
      return Object.assign({}, state, { isLoading: true });

    case `${GET_FEATURED_PRODUCTS}_FULFILLED`:
      console.log("actions.payload", action.payload);
      return Object.assign({}, state, {
        isLoading: false,
        featuredProducts: action.payload
      });
    case `${GET_FEATURED_PRODUCTS}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didError: true
      });
    case `${GET_PRODUCT_BY_ID}_PENDING`:
      return Object.assign({}, state, { isLoading: true });

    case `${GET_PRODUCT_BY_ID}_FULFILLED`:
      console.log("actions.payload", action.payload);
      return Object.assign({}, state, {
        isLoading: false,
        productById: action.payload
      });
    case `${GET_PRODUCT_BY_ID}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didError: true
      });
    default:
      return state;
  }
}
