//createContext will be used to instantiate a new Context object
//useContext is another react hook that will allow us to use the state created from the createContext function
import React, { createContext, useContext } from 'react'
import { useProductReducer } from './reducers'

const storeContext = createContext();
//every context object comes with two components, a provider and consumer
//the provider is a special type of React component that we wrap our application in so it can make the state data that's passed into it as a prop available to all other components
//the consumer is our means of grabbing and using the data that the provider holds for us
const { Provider } = storeContext

//we instantiate our initial global state with the useProductReducer() function, because it has useReducer(), every time we run this function we receive state and dispatch
//we then return the storeContext's provider component with our state object and dispatch the function provided as data for the value prop
const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
        products: [],
        cart: [],
        cartOpen: false,
        categories: [],
        currentCategory: ''
    });
    //use this to confirm it works
    console.log(state);
    //the value opens us up to pass in more data for state if we need to.
    return <Provider value={[state, dispatch]} {...props} />
}

//custom react hook
//when we execute this function, we will receive the [state, dispatch] data. 
//this means that any component that has access to our StoreProvider component can use any data in our global state container or update it using the dispatch function
const useStoreContext = () => {
    return useContext(storeContext)
}

export { StoreProvider, useStoreContext };