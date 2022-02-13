import { types } from "../types/types";

/* const initialState = {
    uid: 123,
    name: 'Martin',
    dir:{
        b:14
    }
} */

export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:
            return{
                uid: action.payload.uid,
                name: action.payload.displayName
            }

        case types.logout:
            return {}

        default:
            return state;
    }

}