const INITIAL_STATE = {
    products: [],
    currentUser : {},
    currentProduct: {},
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SETUSER':
        return ({
            ...state,
            currentUser:  action.payload
        })
        case 'SETPRODUCT' :
            return ({
                ...state,
                products:  [...state.products, action.payload]
            })

        case 'SIGNOUT' :
            return ({
                ...state,
                currentUser:  {}
            })
        default:
            return state
}
}