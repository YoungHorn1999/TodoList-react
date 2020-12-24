import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_ITEM } from './actionTypes'

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value: value
})

export const btnClickAction = () => ({
    type: ADD_TODO_ITEM
} )

export const itemDeleteAction = (index) => ({
    type: DELETE_ITEM,
    index: index
})

