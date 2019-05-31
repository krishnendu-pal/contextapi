import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

// const Persons = (props) => {
//     const { name, age } = props;
//     return (
//         <Fragment>
//             Name: {name}, Age {age}.
//         </Fragment>
//     );
// };

class Persons extends Component {
    render() {
        const { name, age } = this.props.person;
        console.log('props',this.props);
        return (
            <Fragment>
                Name: {name}, Age {age}.
            </Fragment>
        );
    }
}

Persons.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    person:PropTypes.object
};

export default Persons;
