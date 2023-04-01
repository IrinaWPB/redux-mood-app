const INITIAL_STATE = { face: "◙‿◙"}
const countReducer = (state=INITIAL_STATE, action) => {
    return { ...state, face: action.payload }
}

const store = Redux.createStore(countReducer)