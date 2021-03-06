import React, {Component} from 'reac';

class errorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (error, info) => {
        this.state({hasError: true, errorMessage: error});
    }

    reder() {
        if (this.state.hasError){
            return <h1>{this.state.errorMessage}</h1>
        }else{
            return this.props.children;
        }
    }
}

export default errorBoundary;