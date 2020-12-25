import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM } from './actionTypes'

export const changeInputValueAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value: value
})

export const handleClickAction = () => ({
    type: ADD_ITEM
})

export const handleDeleteAction = (index) => ({
    type: DELETE_ITEM,
    index
})