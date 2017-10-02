import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Links } from '../../imports/collections/link';

class LinkList extends Component {
    render() {
        return(
            <div>List of Links of click</div>
        );
    }
}

export default createContainer(() => {
    Meteor.subscribe('links');

    return { links: Links.find({}).fetch()};
}, LinkList);