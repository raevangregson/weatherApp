import React, { Component } from "react";
import Card from './card.jsx'
import Typography from '@material-ui/core/Typography';
import Sundown from '../../sundown.png';
import Sunrise from '../../sunrise.png';

class Current extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zipcode: null,
            currentWeather: []
        }
        this.fetchData = this.fetchData.bind(this)
    }

    componentWillMount() {
        this.fetchData()
    }

    fetchData() {
        let currentWeather = []
        fetch(`http://localhost:3000/api/current?zip=48438`)
            .then(response => response.json()
            )
            .then(results => {
                console.log(results)
                currentWeather['city'] = results['name']
                currentWeather['temp'] = results['main']['temp']
                currentWeather['img'] = results['weather'][0]['icon']
                currentWeather['description'] = results['weather'][0]['description']
                currentWeather['main'] = results['weather'][0]['main']
                currentWeather['set'] = results['sys']['sunset']
                currentWeather['rise'] = results['sys']['sunrise']
                this.setState({
                    currentWeather
                })
            }).catch(error => console.error(error));
    }

    render() {
        var d = new Date();
        var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        var month = d.getUTCMonth() + 1;
        var date = d.getUTCDate();
        let day = weekdays[d.getDay()]
        var time = d.toLocaleTimeString()
        let { temp, city, description, img, main, set,rise } = this.state.currentWeather
        let riseTime = new Date(rise*1000).toLocaleTimeString()
        let setTime = new Date(set*1000).toLocaleTimeString()
        console.log(riseTime)
        console.log(setTime)
        let icon = <img className='icon' src={`http://openweathermap.org/img/w/${img}.png`} />
        let sundown = <img className={'suns sunDown'} src={Sundown} />
        let sunrise = <img className={'suns'} src={Sunrise} />
        return (
            <div className="flexDisplay">
                <div className='currentDetails'>
                    <Typography className='date'>
                        {day} {month}/{date}
                    </Typography>
                    <Typography className='city'>
                        {city}
                    </Typography>
                    <div className='flexDisplay'>
                    <div className='flexDisplay centerAlign'>{sunrise}<Typography className='times'>{riseTime}</Typography></div>
                    <div className='flexDisplay centerAlign'>{sundown}<Typography className='times'>{setTime}</Typography></div>
                    </div>
                </div>
                <Card icon={icon} now={true} time={time} temp={temp} customClass='current' />
            </div>
        );
    }
}
export default (Current);
