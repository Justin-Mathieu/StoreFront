

let initialState = {
    products: [],
    quantity: 0,
};


function cartReducer(state=initialState, action){
switch(action.type){

    case 'ADD':
    return {
        ...state,
    products:action.payload,
    quantity: + 1,
    }
   

default:
    return state;
}

}


export default cartReducer;