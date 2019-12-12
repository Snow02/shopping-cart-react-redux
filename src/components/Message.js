import React, {Component} from 'react';

class Message extends Component {

    render() {
        return (
            <h4 className = "message-buy">
                <span className="badge amber darken-2">{this.props.children}</span>
            </h4>
        );
    }
}

export default Message;