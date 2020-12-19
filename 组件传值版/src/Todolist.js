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
    }
    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="inputArea">输入内容</label>
                    <input
                        id = "inputArea" 
                        value = {this.state.inputValue}
                        onChange = {this.handleInputChange.bind(this)}
                        className = 'input'
                    />
                    <button onClick = {this.handleClick.bind(this)}>提交</button>
                </div>
                <ul>
                    {this.state.list.map((item, index) => {
                        return (
                                    <div>
                                        {/* <li 
                                            key={index} 
                                            onClick={this.handleDelete.bind(this, index)}
                                            dangerouslySetInnerHTML = {{__html: item}}
                                        >
                                        </li> */}
                                        <Todoitem 
                                            content = {item} 
                                            Index = {index}
                                            deleteItem = {this.handleDelete.bind(this)}
                                        />
                                    </div>
                                )
                    })}
                </ul>
            </Fragment>
        )
    }

    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ""
        })
    }

    handleDelete(index) {
        console.log(index)
        const list = [...this.state.list]
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
}

export default TodoList