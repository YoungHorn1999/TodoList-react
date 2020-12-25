import React from 'react'
import { connect } from 'react-redux'
import { changeInputValueAction, handleClickAction, handleDeleteAction } from './store/createActions'

const TodoList = (props) => {
    const { list, inputValue, changeInputValue, handleClick, handleDelete} = props
    return (
        <div>
            <div>
                <input value={inputValue} onChange={changeInputValue}/>
                <button onClick={handleClick}>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return <li key={index} onClick={handleDelete}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const value = e.target.value
            const action = changeInputValueAction(value)
            dispatch(action)
        },

        handleClick() {
            const action = handleClickAction()
            dispatch(action)
        },

        handleDelete(index) {
            const action = handleDeleteAction(index)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)