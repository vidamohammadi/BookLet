const inistialState = {
    sliderOneId: 0,
    sliderTwoId: 0,
    sliderTnterval: '',
    userName: '',
    password: '',
    auth: '',
    purchased: true,
    startScroll: 0,
    endScroll: 4
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
            return {
                ...state,
                sliderOneId: action.id - 1
            }
        case 'CLICKTWO':
            return {
                ...state,
                sliderTwoId: action.id - 1
            }
        case 'TRUE':
            return {
                ...state,
                auth: true
            }
        case 'FALSE':
            return {
                ...state,
                auth: false
            }
        case 'PURCHASED':
            return {
                ...state,
                purchased: false
            }
        case 'USERNAME':
            return {
                ...state,
                userName: action.username
            }
        case 'PASSWORD':
            return {
                ...state,
                password: action.password
            }
        case 'NEXTSCROLL':
            if (state.startScroll === 4) {
                return {
                    ...state,
                    startScroll: state.startScroll - 4,
                    endScroll: state.endScroll - 4
                }
            } else {
                return {
                    ...state,
                    startScroll: state.startScroll + 4,
                    endScroll: state.endScroll + 4
                }
            }
        case 'PREVSCROLL':
            if (state.startScroll === 0) {
                return {
                    ...state,
                    startScroll: state.startScroll + 4,
                    endScroll: state.endScroll + 4
                }
            } else {
                return {
                    ...state,
                    startScroll: state.startScroll - 4,
                    endScroll: state.endScroll - 4
                }
            }
        default:
            return state
    }
}

export default reducer