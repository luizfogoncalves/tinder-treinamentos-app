import actionsTypes from '../../actionsTypes/courses'

export function handleCourse() {
    return {
        type: actionsTypes.HANDLECOURSE,
    }
}

export function addCourse(course) {
    return {
        type: actionsTypes.ADDCOURSE,
        course
    }
}