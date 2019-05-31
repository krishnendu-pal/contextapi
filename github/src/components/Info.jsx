import React, { Component } from 'react';
import MyContext from './Context';
import PropTypes from 'prop-types';

class Info extends Component {

    render() {
        console.log('props====', this.props);
        return (
            <div>
                <MyContext.Consumer>
                    {(context) => <div>
                        <p> info page Name is {context.name}</p>
                        <button onClick={this.props.onTesClick}>
                            context test
                        </button></div>
                    }
                </MyContext.Consumer>
            </div>
        );
    }
}

Info.propTypes = {
    onTesClick: PropTypes.func,
};

export default Info;
