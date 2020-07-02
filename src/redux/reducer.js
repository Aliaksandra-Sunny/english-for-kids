let CHANGE_MODE = "CHANGE-MODE";
let START_GAME = "START-GAME";
let DO_ERROR = "DO-ERROR";
let DO_SUCCESS = "DO-SUCCESS";

let initialState = {
    mode: false,
    errors: 0,
    answers: 0,
    play: false,

};

const reducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case CHANGE_MODE:
            debugger
            return {...state, mode: !state.mode};
        case START_GAME:
            return {...state, play: true};
        case DO_ERROR:
            return {...state, errors: state.errors + 1};
        case DO_SUCCESS:
            return {...state, answers: state.answers + 1}
        default:
            return state;
    }
};

export let changeModeAC = () => {
    return {
        type: CHANGE_MODE
    }
};
export let startGameAC = () => {
    return {
        type: START_GAME
    }
};

export default reducer;