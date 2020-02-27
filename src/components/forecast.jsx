import React, { Component } from "react";
import Card from './card.jsx'
import Typography from '@material-ui/core/Typography';

class Forecast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zipCode:this.props.search,
            cards:[],
        }
        this.fetchData = this.fetchData.bind(this)
    }

    componentDidMount() {
        this.fetchData(this.state.zipCode)
    }

    //make sure we update our data when props change
    componentDidUpdate(nextProps){
        if(this.props.search!=nextProps.search){
            this.fetchData(nextProps.search)
        }
    }

    //fetch forecast data and seperate into the 7 days of the week inside of an array
    fetchData(zip) {        
        fetch(`http://localhost:3000/api/forecast?zip=${zip}`)
            .then(response => response.json()
            )
            .then(results => {
                let forecast = {'Sunday':[], 'Monday':[], 'Tuesday':[], 'Wednesday':[], 'Thursday':[], 'Friday':[], "Saturday":[]}
                let dates = []
                results['list'].forEach(cast=>{
                    let forecastDate = new Date(cast['dt_txt'])
                    let month = forecastDate.getMonth() + 1;
                    let date = forecastDate.getDate();
                    let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                    let day = weekdays[forecastDate.getDay()]; 
                    dates.push({'month':month,'date':date, 'day':day})
                    forecast[day].push(cast)
                })
                dates = dates.filter((date, index, self) => self.findIndex(t => t.month === date.month && t.date === date.date) === index)
                const cards = this.getForecast(dates,forecast)
                this.setState({
                    cards
                })
            }).catch(error => console.error(error));
    }

    getForecast(dates, forecast){
        let cards = []
        dates.forEach(weekday=>{
            cards.push(<Card key={weekday.date} now={false} month={weekday.month} date={weekday.date} content={forecast[weekday.day]} day={weekday.day} customClass='weekCard'/>)
        })
        return (cards)
    }

    render() {
        return (
            <div>
                <Typography className='week'>
                    Week
                </Typography>
                <div className="flexDisplay">
                    {this.state.cards}
                </div>
            </div>
        );
    }
}

export default (Forecast);
