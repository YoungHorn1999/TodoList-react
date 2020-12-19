import React, { Component } from 'react'

class Todoitem extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    render() {
        const { content } = this.props
        return (
            <div onClick={this.handleClick}>
                {content}
            </div>
        )
    }

    handleClick() {
        const { deleteItem,Index } = this.props
        deleteItem(Index)
    }
}

export default Todoitem