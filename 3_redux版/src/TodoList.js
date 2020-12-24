import React, { Component } from 'react'
import {Input, Button, List} from 'antd'
import store from './store/index'
import { getInputChangeAction, btnClickAction, itemDeleteAction } from './store/actionCreators'
import 'antd/dist/antd.css'


class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        store.subscribe(this.handleStoreChange)
    }

    render() {
        return (
            <div>
                <div style = {{marginTop: '10px', marginLeft: '10px'}}>
                    <Input 
                        value = {this.state.inputValue} 
                        placeholder="todo info" 
                        style = {{width: '300px', marginRight: '10px'}}
                        onChange = {this.handleInputChange}
                    />
                    <Button type="primary" onClick = {this.handleBtnClick}>提交</Button>
                </div>
                <List
                    style = {{marginTop: '10px', width: '300px', marginLeft: '10px'}}
                    bordered
                    dataSource = {this.state.list}
                    renderItem = {(item, index) => (
                        <List.Item onClick={this.handleItemDeleteClick.bind(this, index)}>
                            {item}
                        </List.Item>
                    )}
                />
            </div>

        )
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