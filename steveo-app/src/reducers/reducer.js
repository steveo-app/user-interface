import {
    REGISTERING_USER,
    REGISTERED_USER,
    FAILED_REGISTER,
    ADD_LOCATION,
    ADD_HOLES,
    ADD_PLAYERS,
    SCORES_STORE
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
        holes: 0,
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

        case ADD_LOCATION: {
            return {
                ...state,
                game: {
                    ...state.game,
                    location: action.payload
                }
            }
        }

        case ADD_HOLES: {
            return {
                ...state,
                game: {
                    ...state.game,
                    holes: action.payload
                }
            }
        }

        case ADD_PLAYERS: {
            
            return {
                ...state,
                game: {
                    ...state.game,
                    players: action.payload
                }
            }
        }

        case SCORES_STORE: {
            
            return {
                ...state,
                game: {
                    ...state.game,
                    players: action.payload
                }
            }
        }

        default: {
            return state;
        }
    }
}

export default reducer;
