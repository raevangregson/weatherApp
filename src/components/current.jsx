import React, { Component } from "react";
import Card from './card.jsx'
import Typography from '@material-ui/core/Typography';

class Current extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.fetchData = this.fetchData.bind(this)
    }

    componentWillMount(){

    }

    fetchData(){

    }

    render() {
        return (
            <div className="flexDisplay">
                <div className='currentDetails'>
                <Typography variant="h5" component="h2">
                    Day Date
        </Typography>
        <Typography variant="h5" component="h2">
                    City Name
        </Typography>
        </div>
                <Card now={true} customClass='current'/>
            </div>
        );
    }
}
export default (Current);
