import React,{Component} from 'react';
import MyContext from './Context';


class About extends Component{
    render(){
        return(
            <div>
                <MyContext.Consumer>
                    {(context) => <p>about page. Name is {context.name} </p>}                    
                </MyContext.Consumer>
               
            </div>
        );
    }
}

export default About;
