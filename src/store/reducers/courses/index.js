import actionsTypes from '../../actionsTypes/courses'

const INITIAL_STATE = {
    courses: [{
        name: 'React',
        description: 'Curso de React'
    }],
}

function courses(state = INITIAL_STATE, action) {
    switch (action.type) {
        case actionsTypes.HANDLECOURSE:
            return {
                ...state,
                courses: [{
                    name: 'React',
                    description: 'Curso de React'
                }]
            }
        case actionsTypes.ADDCOURSE:
            return {
                ...state,
                courses: [...state.courses, action.course]
            }
        default:
            return state;
    }
}

export default courses;
