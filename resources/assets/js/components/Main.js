import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/* An example React component */
class Main extends Component {
    render() {
        return (
            <div>
            <h3>All Products</h3>
        </div>
    );
    }
}

export default Main;


if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}