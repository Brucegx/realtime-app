// any Js in here is automatically ran for us

import React from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/image_list';
const App = () => {
    return (
        <div>
            <ImageList /> 
        </div>
    );
};

Meteor.startup(() => {
    ReactDOM.render(<App />, document.querySelector('.container'));
});
