import React, { Component, Fragment } from 'react'
import Todoitem from './Todoitem'
import './style.css'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="inputArea">输入内容</label>
                    <input
                        id = "inputArea" 
                        value = {this.state.inputValue}
                        onChange = {this.handleInputChange}
                        className = 'input'
                    />
                    <button onClick = {this.handleClick}>提交</button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }

    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                    <Todoitem
                        key = {index} 
                        content = {item} 
                        Index = {index}
                        deleteItem = {this.handleDelete.bind(this)}
                    />
                    )
        })
    }

    handleInputChange(e) {
        const value = e.target.value
        this.setState(() => ({
            inputValue: value
        }))
    }

    handleClick() {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ""
        }))
    }

    handleDelete(index) {
        this.setState((prevState) => {
            const list = [...prevState.list]
            list.splice(index, 1)
            return {list}
        })
    }
}

export default TodoList