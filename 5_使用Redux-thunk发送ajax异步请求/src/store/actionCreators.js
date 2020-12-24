import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_ITEM, INIT_LIST_ACTION } from './actionTypes'
import axios from 'axios'

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

export const getTodoList = () => {
    return (dispatch) => {
        axios.get('/list.json').then((res) => {
            const data = res.data
            const action = initListAction(data)
            dispatch(action)
        })
    }
}

