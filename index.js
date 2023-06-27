const redux = require('redux')
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators

//javascript app
const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOCKED = 'ICECREAM_STOCK'

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

function orderIceCream(qty = 1) {
    return {
        type: ICECREAM_ORDERED,
        payload: qty
    }
}

function restockIceCream(qty = 1) {
    return {
        type: ICECREAM_RESTOCKED,
        payload: qty
    }
}


// const initialState = {
//     numOfCakes: 10,
//     anotherProperty: 0,
//     numOfIceCreams: 20
// }

const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCreams: 20
}

//reducer
const cakeReducer = (state = initialCakeState, action) => {
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

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case ICECREAM_ORDERED:
            return {
                ...state,
                numOfIceCreams: state.numOfCakes - 1
            }
        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numOfIceCreams: state.numOfCakes + action.payload
            }
        default:
            return state
    }
}

const rootReducer = redux.combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer)

console.log(store.getState(), 'initial');

const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()))

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restoreCake(4))

const actions = bindActionCreators({ orderCake, restoreCake, orderIceCream, restockIceCream }, store.dispatch)
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.orderIceCream()
actions.orderIceCream()
actions.restockIceCream(2)

actions.restoreCake(6)

unsubscribe()
