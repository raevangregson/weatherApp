
import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';

const styles = {
    root: {
        display: "flex",
        flexGrow: 1,
        background: 'rgb(173, 208, 255)'
    },
};

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            zipcode:48438,
            error:false
        }
        this.handleChange = this.handleChange.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    handleChange(event, value) {
        this.setState({ value });
        if (value == 1) {
            this.props.history.push('/forecast')
        }
        else {
            this.props.history.push('/')
        }

    };

    onChange(e){
        this.setState({
            error:false,
            zipcode:e.target.value
        })
    }

    //checks zipcode with regex
    onClick(){
        var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(this.state.zipcode);
        if(isValidZip){
            this.setState({
                error:false
            })
            this.props.zipChange(this.state.zipcode)
        }
        else{
            this.setState({
                error:true
            })
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
                <Typography className="navMargin" variant="h5" component="h3">
                    The Weather
            </Typography>
                <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                    className="topMarginAuto"
                >
                    <Tab label="Todays Forecast" />
                    <Tab label="Weekly Forecast" />
                </Tabs>
                <TextField
                error={this.state.error}
                    id="search"
                    label="Weather in...Zipcode"
                    type="search"
                    className={classes.textField + ` searchMargin`}
                    margin="normal"
                    onChange={(e)=>this.onChange(e)}
                    />
                    <div className='search'>
                <Button onClick={()=>this.onClick()} variant="outlined" href="#outlined-buttons" className={classes.button}>
        Search
      </Button>
      </div>
            </Paper>
        );
    }
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
