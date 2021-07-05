const INITIAL_STATE = {
    products: [],
    currentUser : {},
    filterCategory: []
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
                products:  action.payload,
                filterCategory:  action.payload
            })

        case 'SETFILTERCATEGORY' :
            return {
                ...state,
                filterCategory:  action.payload
            }

        case 'SIGNOUT' :
            return ({
                ...state,
                currentUser:  {}
            })
        default:
            return state
}
}