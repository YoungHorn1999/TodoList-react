import React, { Component } from 'react'
import store from './store/index'
import TodoListUI from './todoListUI'
import axios from 'axios'
import { getInputChangeAction, btnClickAction, itemDeleteAction, initListAction } from './store/actionCreators'
import 'antd/dist/antd.css'


class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemDeleteClick = this.handleItemDeleteClick.bind(this)
        store.subscribe(this.handleStoreChange)
    }

    render() {
        return (
            <TodoListUI 
                inputValue = {this.state.inputValue}
                list = {this.state.list}
                handleInputChange = {this.handleInputChange}
                handleBtnClick = {this.handleBtnClick}
                handleItemDeleteClick = {this.handleItemDeleteClick}
            />
        )
    }

    componentDidMount() {
        axios.get('/list.json').then((res) => {
            const data = res.data
            const action = initListAction(data)
            store.dispatch(action)
        })
    }

    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }

    handleStoreChange() {
        this.setState(store.getState())
    }

    handleBtnClick() {
        const action = btnClickAction()
        store.dispatch(action)
    }

    handleItemDeleteClick(index) {
        const action = itemDeleteAction(index)
        store.dispatch(action)
    }
}

export default TodoList