import React, { Component } from "react";
import Card from './card.jsx'
import Typography from '@material-ui/core/Typography';
import Sundown from '../../sundown.png';
import Sunrise from '../../sunrise.png';

class Current extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zipcode: this.props.search,
            currentWeather: [],
            error:false,
        }
        this.fetchData = this.fetchData.bind(this)
    }

    componentDidMount() {
        this.fetchData(this.state.zipcode)
    }

    //make sure we update our data when props change
    componentDidUpdate(prevProps){
        if(this.props.search!=prevProps.search){
            this.fetchData(this.props.search)
        }
    }

    //get data for current weather send to store inside of an array
    fetchData(zip) {
        var d = new Date();
        var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        let currentWeather = []
        fetch(`http://localhost:3000/api/current?zip=${zip}`)
            .then(response => {
                console.log(response)
                if(response.status===200){
                    return response.json()
                }
                else{
                    throw new Error('Invalid Zip.');
                }
            }
            )
            .then(results => {
                console.log(results)
                currentWeather['time'] = d.toLocaleTimeString()
                currentWeather['day'] = weekdays[d.getDay()]
                currentWeather['month'] = d.getMonth() + 1;
                currentWeather['date'] = d.getDate();
                currentWeather['city'] = results['name']
                currentWeather['temp'] = results['main']['temp']
                currentWeather['img'] = <img className='icon' src={`http://openweathermap.org/img/w/${results['weather'][0]['icon']}.png`} />
                currentWeather['setTime'] = new Date(results['sys']['sunset']*1000).toLocaleTimeString()
                currentWeather['riseTime'] = new Date(results['sys']['sunrise']*1000).toLocaleTimeString()
                currentWeather['setIcon'] = <img className={'suns sunDown'} src={Sundown} />
                currentWeather['riseIcon'] = <img className={'suns'} src={Sunrise} />
                this.setState({
                    currentWeather
                })
            }).catch(error => {
                this.setState({
                    error:true
                })
                console.error(error)});
    }

    render() {
        let { temp, city, date,month,time,day, img,setTime,riseTime,setIcon,riseIcon} = this.state.currentWeather
        return (
            this.state.error?
            <Typography>
                        Invalid Zipcode Try Again
            </Typography>
            :
            <div className="flexDisplay">
                <div className='currentDetails'>
                    <Typography className='date'>
                        {day} {month}/{date}
                    </Typography>
                    <Typography className='city'>
                        {city}
                    </Typography>
                    <div className='flexDisplay'>
                    <div className='flexDisplay centerAlign'>{riseIcon}<Typography className='times'>{riseTime}</Typography></div>
                    <div className='flexDisplay centerAlign'>{setIcon}<Typography className='times'>{setTime}</Typography></div>
                    </div>
                </div>
                <Card icon={img} now={true} time={time} temp={temp} customClass='current' />
            </div>
        );
    }
}
export default (Current);
