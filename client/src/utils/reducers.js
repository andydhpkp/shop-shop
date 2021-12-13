import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
} from "./actions"
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