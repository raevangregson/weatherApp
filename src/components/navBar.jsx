
import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = {
    root: {
        display:"flex",
        flexGrow: 1,
        background:'rgb(173, 208, 255)'
    },
};

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event, value) {
        this.setState({ value });
    };

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
                        id="standard-search"
                        label="Weather in...Zipcode"
                        type="search"
                        className={classes.textField+` searchMargin`}
                        margin="normal"
                    />
            </Paper>
        );
    }
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
