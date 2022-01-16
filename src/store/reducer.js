const inistialState = {
    sliderOneId: 0
}

const reducer = (state = inistialState, action) => {
    switch (action.type) {
        case 'NEXT':
            if (state.sliderOneId === 3) {
                return {
                    sliderOneId: 0
                }
            } else {
                return {
                    sliderOneId: state.sliderOneId + 1
                }
            }
        case 'PREV':
            if (state.sliderOneId === 0) {
                return {
                    sliderOneId: 3
                }
            } else {
                return {
                    sliderOneId: state.sliderOneId - 1
                }
            }
        case 'CLICK':
            return{
                sliderOneId: action.id - 1
            }
        default:
            return state
    }
}

export default reducer