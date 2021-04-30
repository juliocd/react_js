import React, {Component, Fragment} from 'react';
import clasess from './Person.css';
import Aux from './../../../hoc/Aux';
import withClass from './../../../hoc/WithClass';
import PropTypes from 'prop-types';
import AuthContext from './../../../context/auth-context';

class Person extends Component {
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log("Auth: " + this.context.authenticated);
    }

    render() {
        console.log("[Person.js] rendering..."); 
        // Render by aux component. It's usefull when I don't need and DOM extra html element as a root
        return (
            <Aux>
                <AuthContext.Consumer>
                    {context => context.authenticated ? <p>Authenticated</p> : <p>Please, log in</p>}
                </AuthContext.Consumer>
                <p key="i2" onClick={this.props.clicked}>
                    I'm a {this.props.name} and I'm {this.props.age} years old</p>
                <p key="i3">{this.props.children}</p>
                <input key="i4" 
                    type="text" 
                    // ref={(inputEL) => {this.inputElement = inputEL}}
                    ref={this.inputElementRef}
                    onChange={this.props.changed} value={this.props.name}/>
            </Aux>
        )

        // // Fragment has the same behaviour than Aux component
        // return (
        //     <Fragment>
        //         <div key="i1" className={clasess.Person}>
        //         <p key="i2" onClick={this.props.clicked}>
        //             I'm a {this.props.name} and I'm {this.props.age} years old</p>
        //         <p>{this.props.children}</p>
        //         <input key="i3" 
        //             type="text" 
        //             onChange={this.props.changed} value={this.props.name}/>
        //         </div>
        //     </Fragment>
        // );

        // // Returning multiple elements (key property is mandatory)
        // return [
        //     <div key="i1" className={clasess.Person}>
        //     <p key="i2" onClick={this.props.clicked}>
        //         I'm a {this.props.name} and I'm {this.props.age} years old</p>
        //     <p>{this.props.children}</p>
        //     <input key="i3" 
        //         type="text" 
        //         onChange={this.props.changed} value={this.props.name}/>
        //     </div>
        // ]

        // // Returning just one unique element
        // return (
        //     <div className={clasess.Person}>
        //         <p onClick={this.props.clicked}>
        //             I'm a {this.props.name} and I'm {this.props.age} years old</p>
        //         <p>{this.props.children}</p>
        //         <input 
        //             type="text" 
        //             onChange={this.props.changed} value={this.props.name}/>
        //     </div>
        // )
    }
};

// Set the right props type for each props value
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, clasess.Person);