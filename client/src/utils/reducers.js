import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
    ADD_TO_CART,
    ADD_MULTIPLE_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART_QUANTITY,
    CLEAR_CART,
    TOGGLE_CART
} from './actions';
import { useReducer } from 'react'

export const reducer = (state, action) => {
    switch (action.type) {
        //if action type value is the value of `UPDATE_PRODUCTS`, return a new state object with an updated products array
        case UPDATE_PRODUCTS:
            return {
                //if this case, return a copy of state argument using the spread ... operator and then set the products key to a value of a new array with the action.products value spread across it.
                ...state,
                products: [...action.products],
            }

        case UPDATE_CATEGORIES:
            return {
                ...state,
                categories: [...action.categories]
            }

        case UPDATE_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory
            }
        
        case ADD_TO_CART:
            return {
                ...state,
                cartOpen: true,
                cart: [...state.cart, action.product]
            }

        case ADD_MULTIPLE_TO_CART:
            return {
                ...state,
                cart: [...state.cart, ...action.products],
            };

        case REMOVE_FROM_CART:
            //filter() method only keeps the items that don't match the provided _id property
            let newState = state.cart.filter(product => {
                //We check the length of the array to set cartOpen to false when the array is empty
                return product._id !== action._id;
            })

            return {
                ...state,
                cartOpen: newState.length > 0,
                cart: newState
            }

        case UPDATE_CART_QUANTITY:
            return {
                ...state,
                cartOpen: true,
                //We used map() instead of state.cart because the original state should be treated as immutable
                cart: state.cart.map(product => {
                if (action._id === product._id) {
                    product.purchaseQuantity = action.purchaseQuantity;
                }
                return product;
                })
            };

        case CLEAR_CART:
            return {
                ...state,
                cartOpen: false,
                cart: []
            };

        case TOGGLE_CART:
            return {
                ...state,
                cartOpen: !state.cartOpen
            };

        //if it's none of these actions, do not update state at all and keep things the same!
        default:
            return state;
    }
}

//function will be used to help initialize our global state object and then provide us with the functionality for updating that state by automatically running it through our custom reducer() function
//think of it as a more in-depth way of using the useState() hook
//useReducer() is meant for managing a greater level of state than useState()
export function useProductReducer(initialState) {
    return useReducer(reducer, initialState)
}