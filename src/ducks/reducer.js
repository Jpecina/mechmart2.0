import axios from "axios";

const GET_USERS = "GET_USERS";
const GET_FEATURED_PRODUCTS = "GET_FEATURED_PRODUCTS";
const GET_All_PRODUCTS = "GET_All_PRODUCTS";
const GET_PRODUCTS_BY_CATEGORY = "GET_PRODUCTS_BY_CATEGORY";
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

export function getProductsByCategory(category) {
  return {
    type: GET_PRODUCTS_BY_CATEGORY,
    payload: axios
      .get(`http://localhost:3001/api/products/${category}`)
      .then(response => {
        return response.data;
      })
      .catch(console.log)
  };
}
// INITIAL STATE

const initialState = {
  users: [],
  isLoading: false,
  didError: false,
  featuredProducts: [],
  allProducts: []
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
    case `${GET_PRODUCTS_BY_CATEGORY}_PENDING`:
      return Object.assign({}, state, { isLoading: true });

    case `${GET_PRODUCTS_BY_CATEGORY}_FULFILLED`:
      console.log("actions.payload", action.payload);
      return Object.assign({}, state, {
        isLoading: false,
        allProducts: action.payload
      });
    case `${GET_PRODUCTS_BY_CATEGORY}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didError: true
      });
    default:
      return state;
  }
}
