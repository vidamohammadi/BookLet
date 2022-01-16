const inistialState = {
    sliderOneId: 0,
    sliderTwoId:0
}

const reducer = (state = inistialState, action) => {
    switch (action.type) {
        case 'NEXT':
            if (state.sliderOneId === 3) {
                return {
                    ...state,
                    sliderOneId: 0
                }
            } else {
                return {
                    ...state,
                    sliderOneId: state.sliderOneId + 1
                }
            }
        case 'PREV':
            if (state.sliderOneId === 0) {
                return {
                    ...state,
                    sliderOneId: 3
                }
            } else {
                return {
                    ...state,
                    sliderOneId: state.sliderOneId - 1
                }
            }
        case 'CLICK':
            return{
                ...state,
                sliderOneId: action.id - 1
            }
        case 'CLICKTWO':
            return{
                ...state,
                sliderTwoId: action.id - 1
            }
        default:
            return state
    }
}

export default reducer