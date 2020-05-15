import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap'
import CircularProgress from '@material-ui/core/CircularProgress'

class ProgressBar extends Component {

    state = {
        loading : true
    }

    componentDidMount(){
        this.setState({
            loading : false
        })
    }

    render() {
        
        return (
            <div>
                {this.state.loading ? <CircularProgress/> : ''}
                
            </div>
        );
    }
}

export default ProgressBar;