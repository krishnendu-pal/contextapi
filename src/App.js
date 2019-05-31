import React, { Component } from 'react';
import './App.scss';
import Persons from './components/Persons';
//import Persons from './components/Persons';
import { Link } from 'react-router-dom';

import { Calculation } from './components/service/calculatio';
import { Sum } from './components/service/calculatio';
import About from './components/About';
import Info from './components/Info';

import MyContext from './components/Context';


class App extends Component {


    state = {
        persons: [
            {
                id: 1,
                name: 'Frank',
                age: 20
            },
            {
                id: 2,
                name: 'David',
                age: 24
            },
            {
                id: 3,
                name: 'Lina',
                age: 28
            },
        ],
        counter: 0,
        name: ''
    }

    testHandler = () => {
        this.setState({
            name: 'Krishnendu'
        });
        console.log('testhandler hit');
    }


    handlerIncrement = () => {
        this.setState(prevState => ({
            counter: prevState.counter + 1
        }));
    }

    HandlerTryOne = () => {
        this.setState((prev) => {
            return {
                counter: prev.counter + 1
            };
        });
    }


    render() {

        let ramHouse = new Calculation(30, 20);
        let xx = ramHouse.multi();
        let xx1 = ramHouse.addi();

        let sumNew = new Sum(30, 20);
        let yy = sumNew.summation();


        const { persons, counter } = this.state;
        return (
            <div>
                <h3>
                    map function with props.
                </h3>

                <p>
                    <Link to='/info'>
                        <button>
                            Info
                        </button>
                    </Link>
                    <Link to='/about'>
                        <button>
                            about
                        </button>
                    </Link>
                </p>

                {/* <p>
                    <button onClick={this.testHandler}>
                        context test
                    </button>
                </p> */}

                <MyContext.Provider value={{
                    name: this.state.name,
                    testHandler: this.testHandler
                }}>
                    <Info onTesClick={this.testHandler} />
                    <About />


                </MyContext.Provider>

                <ul>
                    {
                        persons.map(person => {
                            return (
                                <li key={person.id}>
                                    <Persons person={person} />
                                </li>
                            );
                        })
                    }

                </ul>

                <h3>
                    Counter
                </h3>
                <p>Counter is {counter}</p>
                <button onClick={this.handlerIncrement}>Increment Button</button>

                <p>sum:{xx} , add {xx1}</p>
                <p>sum : {yy}</p>

                {/* <Switch>
                    <Route path="/about" component={About} />
                    <Route path="/info" component={Info} />
                </Switch> */}
            </div>
        );
    }
}

export default App;
