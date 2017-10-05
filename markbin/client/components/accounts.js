import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

class Accounts extends Component {
    componentDidMount() {
        // Render the Blaze accounts form the find the div
        // we just render in the 'render' method and palce 
        // the Blaze accounts form in that div
        this.view = Blaze.render(Template.loginButtons, 
            ReactDOM.findDOMNode(this.refs.container));
        
        
    }

    componentWillUnmount() {
        // Go find the forms we created and destory them
        // We need to clean up those forms ourselves
        Blaze.remove(this.view);
    }

    render() {
        return (
            <div ref="container"></div>
        );
    }
}

export default Accounts;