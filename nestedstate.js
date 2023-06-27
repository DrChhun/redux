const redux = require('redux')
const produce = require('immer').produce

const initialState = {
    name: 'Chhun',
    address: {
        street: '123 Main st',
        city: 'Phnompenh',
        state: 'MA'
    }
}

const STREET_UPDATED = 'SREET_UPDATED'

const updateSteet = street => {
    return {
        type: STREET_UPDATED,
        payload: street
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STREET_UPDATED:
        // return {
        //     ...state,
        //     address: {
        //         ...state.address,
        //         street: action.payload
        //     }
        // }
        default: {
            return state
        }
    }
}

const store = redux.createStore(reducer)
console.log('Initial State', store.getState())
const unsubscribe = store.subscribe(() => {
    console.log('Updated State', store.getState())
})
store.dispatch(updateSteet('456 Main st'))
unsubscribe()