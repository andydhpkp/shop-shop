//import our actions
import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
} from '../utils/actions'
import { reducer } from '../utils/reducers'

//create a sample of what our global state will look like
const initialState = {
    products: [],
    categories: [{ name: 'Food' }],
    currentCategory: '1',
}

//newState object will be the result of what comes from a function that we haven't created yet, called reducer()
test('UPDATE_PRODUCTS', () => {
    let newState = reducer(initialState, {
        //type of action we are performing, should be one of the predefined actions
        type: UPDATE_PRODUCTS,
        //won't always have the name value (duh, look), but it is a name representative of the new data we want to use with the action
        products: [{}, {}]
    })

    expect(newState.products.length).toBe(2)
    expect(initialState.products.length).toBe(0)
})

test('UPDATE_CATEGORIES', () => {
    let newState = reducer(initialState, {
        type: UPDATE_CATEGORIES,
        categories: [{}, {}]
    })

    expect(newState.categories.length).toBe(2);
    expect(initialState.categories.length).toBe(1);
})

test('UPDATE_CURRENT_CATEGORY', () => {
    let newState = reducer(initialState, {
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: '2'
    });
  
    expect(newState.currentCategory).toBe('2');
    expect(initialState.currentCategory).toBe('1');
});