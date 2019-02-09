import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  };

class WeatherCard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const { classes } = this.props;
        const bull = <span className={classes.bullet}>•</span>;
        return (
           <Card className={`${classes.card} card ${this.props.customClass}`}>
      <CardContent>
        {
        this.props.now ?
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Now
        </Typography>
        :
        null
        }
        <Typography variant="h5" component="h2">
          {this.props.time}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {this.props.temp}
        </Typography>
        <Typography component="p">
          {this.props.icon}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        );
    }
}

WeatherCard.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(WeatherCard);
