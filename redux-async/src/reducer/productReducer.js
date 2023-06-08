const initialState = {
    loading: false,
    error: null,
    products: []
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case "REQUEST":
            return { ...state, loading: true, error: null }
        case "SUCCESS":
            return { ...state, loading: false, products: action.payload }
        case "ERROR":
            return { ...state, loading: false, error: action.payload }
        default:
            return state;
    }
}

export default productReducer;