import React, { Component } from "react";
import Card from './card.jsx'
import Typography from '@material-ui/core/Typography';

class Forecast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zipCode:this.props.search,
            forecast:[],
            dates:[{'month':1,'date':1},{'month':1,'date':1},{'month':1,'date':1},{'month':1,'date':1},{'month':1,'date':1}]
        }
        this.fetchData = this.fetchData.bind(this)
    }

    componentWillMount() {
        this.fetchData(this.state.zipCode)
    }


    //make sure we update our data when props change
    componentWillReceiveProps(nextProps){
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
                let forecast = [{0:[]}, {1:[]}, {2:[]}, {3:[]}, {4:[]}, {5:[]}, {6:[]}]
                let dates = []
                results['list'].forEach(cast=>{
                    let forecastDate = new Date(cast['dt_txt'])
                    let month = forecastDate.getUTCMonth() + 1;
                    let date = forecastDate.getUTCDate();
                    dates.push({'month':month,'date':date})
                    forecast[forecastDate.getDay()][forecastDate.getDay()].push(cast)
                }   
                )
                dates = dates.filter((date, index, self) => self.findIndex(t => t.month === date.month && t.date === date.date) === index)
                this.setState({
                    forecast,
                    dates
                })
            }).catch(error => console.error(error));
    }

    render() {
        let forecast = this.state.forecast
        let d = new Date()
        let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        let today = d.getDay()
        return (
            <div>
                <Typography className='week'>
                    Week
                </Typography>
                <div className="flexDisplay">
                    <Card now={false} month={this.state.dates[0]['month']} date={this.state.dates[0]['date']} content={forecast[today]} day={weekdays[today]} customClass='weekCard leftMarginAuto'/>
                    <Card now={false} month={this.state.dates[1]['month']} date={this.state.dates[1]['date']} content={forecast[(today+1)>=6?0:today+1]} day={weekdays[(today+1)>=6?0:today+1]} customClass='weekCard secondDay'/>
                    <Card now={false} month={this.state.dates[2]['month']} date={this.state.dates[2]['date']} content={forecast[(today+2)>=6?0+1:today+2]} day={weekdays[(today+2)>=6?0+1:today+2]} customClass='weekCard thirdDay'/>
                    <Card now={false} month={this.state.dates[3]['month']} date={this.state.dates[3]['date']} content={forecast[(today+3)>=6?0+2:today+3]} day={weekdays[(today+3)>=6?0+2:today+3]} customClass='weekCard fourthDay'/>
                    <Card now={false} month={this.state.dates[4]['month']} date={this.state.dates[4]['date']} content={forecast[(today+4)>=6?0+2:today+4]} day={weekdays[(today+4)>=6?0+3:today+4]} customClass='weekCard lastCard'/>
                </div>
            </div>
        );
    }
}
export default (Forecast);
