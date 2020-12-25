import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_ITEM, INIT_LIST_ACTION, GET_INIT_LIST_ACTION } from './actionTypes'

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

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})

export const getInitListAction = () => ({
    type: GET_INIT_LIST_ACTION,
})