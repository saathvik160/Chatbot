import { createStore } from 'redux'


//------Store------


const initialState = {
    person: {
        name: "",
        age: "",
        phone: "",
        email: "",
        city: ""
    }
}

const store = createStore(chatbotApp, initialState)

export default store;


//------Reducers------


function chatbotApp (state=initialState, action) {
    switch(action.type) {
        case 'UPDATE_NAME': {
            return Object.assign({}, state, {
                ...state,
                person: {
                    ...state.person,
                    name: action.payload.name
                }
            })
        }
        case 'UPDATE_AGE': {
            return Object.assign({}, state, {
                ...state,
                person: {
                    ...state.person,
                    age: action.payload.age
                }
            })
        }
        case 'UPDATE_PHONE': {
            return Object.assign({}, state, {
                ...state,
                person: {
                    ...state.person,
                    phone: action.payload.phone
                }
            })
        }
        case 'UPDATE_EMAIL': {
            return Object.assign({}, state, {
                ...state,
                person: {
                    ...state.person,
                    email: action.payload.email
                }
            })
        }
        case 'UPDATE_CITY': {
            return Object.assign({}, state, {
                ...state,
                person: {
                    ...state.person,
                    city: action.payload.city
                }
            })
        }
        default: {
            return state
        }
    }
}
