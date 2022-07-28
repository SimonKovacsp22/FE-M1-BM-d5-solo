import { UPDATE,GET_SINGLE_PRODUCT } from "../actions"

const initialState ={
    updated:{}
}

const updateReducer=(state=initialState,action)=> {
     switch(action.type) {
        case GET_SINGLE_PRODUCT : 
        return {
            
            updated: action.payload
        }


        default: 
        return state

     }
}

export default updateReducer