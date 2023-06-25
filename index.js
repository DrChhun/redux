const redux = require('redux')
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators

//javascript app
const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'

//action
function orderCake() {
    return {
        type: CAKE_ORDERED,
        payload: 1
    }

}

function restoreCake(qty = 1) {
    return {
        type: CAKE_RESTOCKED,
        payload: qty
    }
}

const initialState = {
    numOfCakes: 10,
    anotherProperty: 0
}

//reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload
            }
        default:
            return state
    }
}

const store = createStore(reducer)

console.log(store.getState(), 'initial');

const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()))

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restoreCake(4))

const actions = bindActionCreators({ orderCake, restoreCake }, store.dispatch)
actions.orderCake()
actions.orderCake()
actions.orderCake()

actions.restoreCake(6)

unsubscribe()
