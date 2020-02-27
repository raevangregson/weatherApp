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

//Class is called weather card so we dont conflict with material ui card using to make our own custom default card.
class WeatherCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hourForecast:[]
        }
        this.makeContent = this.makeContent.bind(this)
    }

    componentDidMount(){
        !this.props.now?this.makeContent(this.props.content):false
    }

    componentDidUpdate(nextProps){
        if(this.props.content!=nextProps.content){
            this.makeContent(nextProps.content)
        }
    }

    /*
    for the forecast component I separate each hourly info into its own small element,
    I then store them into an array that can be used easily inside of our render method.
    */

    makeContent(content){
        let hourForecast = []
        if(content!=undefined && Object.keys(content)[0].length>0){
                content.forEach(hour=>{
                    let d = new Date(hour.dt_txt)
                    let time = d.toLocaleTimeString()
                    let icon = <img src={`http://openweathermap.org/img/w/${hour.weather[0].icon}.png`} />
                    hourForecast.push(
                        <div key={time}>
                        <Typography>
                          {time}
                        </Typography>
                        <Typography>
                          {hour.main.temp}℉
                        </Typography>
                        <Typography>
                          {icon}
                        </Typography>
                        </div>
                            )});     
        }
        this.setState({
            hourForecast
        })
    }

    render() {
        const { classes } = this.props;
        return (
           <Card className={`${classes.card} card ${this.props.customClass}`}>
      <CardContent>
        {
        this.props.now ?
        <Typography className={'now'}>
          Now
        </Typography>
        :
        <Typography className={'now'}>
          {this.props.day} {this.props.month}/{this.props.date}
        </Typography>
        }
        {
          /*
          if this card is for the current weather we style it differently then one use for the forecasst
          aka we use different props
          */
        }
        {
        this.props.now ?
        <div>
        <Typography className='now'>
          {this.props.time}
        </Typography>
        <Typography className='temp'>
          {this.props.temp}℉
        </Typography>
        <Typography component="p">
          {this.props.icon}
        </Typography>
        </div>
        :
        <div>
            {this.state.hourForecast}
        </div>
        }
      </CardContent>
      <CardActions>
      {
        //just a dumby button if we wanted to add more features in the future
      }
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
