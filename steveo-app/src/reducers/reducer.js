import {
    REGISTERING_USER,
    REGISTERED_USER,
    FAILED_REGISTER
} from '../actions/index';


let initialState = {
    user: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        },
    game: {
        location: '',
        players: []
    },
    token: '',
}

/* persistent storage */

// const persistedState = localStorage.getItem('reduxState');

// if (persistedState) {
//     initialState = JSON.parse(persistedState)
// }

/* reducer */

const reducer = (state = initialState, action) => {
    switch(action.type) {

        case REGISTERING_USER: {
            return {
                ...state
            }
        }

        case REGISTERED_USER: {
            return {
                ...state,
                user: {
                    ...state.user,
                    firstname: action.payload.user.firstname,
                    lastname: action.payload.user.lastname,
                    email: action.payload.user.email,
                    password: action.payload.user.password
                },
                game: {
                    ...state.game
                },
                token: action.payload.token
            }
        }

        case FAILED_REGISTER: {
            return {
                ...state,
                error: action.payload.error
            }
        }

        default: {
            return state;
        }
    }
}

export default reducer;
