import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    // Arrow Method (can be simplified)
    // getStyle = () => {}
    getStyle() {
        //Long way of the logic
        /*if(this.props.todo.completed) {
            return {
                textDecoration: 'line-through'
            }
        } else {
            return {
                textDecoration: 'none'
            }
        }*/

        return {
            //In this line, 'else' is represented by ':'
            textDecoration: this.props.todo.completed ?
            'line-through' : 'none',
            backgroundColor: this.props.todo.completed ?
            '#90ee90' : '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted'

        }
    }

    render() {
        const { id, title } = this.props.todo;

        return (
            //Inline style reference
            //<div style = {{ backgroundColor: '#90EE90'}}>
            
            //Variable style reference
            //<div style = {testStyle}>
            <div style = {this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {'     '}
                    {title}
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

//Variable style reference
/* const testStyle = {
    backgroundColor: '#90ee90'
} */

export default TodoItem
