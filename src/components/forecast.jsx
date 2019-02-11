import React, { Component } from "react";
import Card from './card.jsx'
import Typography from '@material-ui/core/Typography';

class Forecast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zipCode:this.props.search,
            forecast:[],
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
                results['list'].forEach(cast=>{
                    let forecastDate = new Date(cast['dt_txt'])
                    forecast[forecastDate.getDay()][forecastDate.getDay()].push(cast)
                }   
                )
                this.setState({
                    forecast
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
                    <Card now={false} content={forecast[today]} day={weekdays[today]} customClass='weekCard leftMarginAuto'/>
                    <Card now={false} content={forecast[(today+1)>=6?0:today+1]} day={weekdays[(today+1)>=6?0:today+1]} customClass='weekCard secondDay'/>
                    <Card now={false} content={forecast[(today+2)>=6?0+1:today+2]} day={weekdays[(today+2)>=6?0+1:today+2]} customClass='weekCard thirdDay'/>
                    <Card now={false} content={forecast[(today+3)>=6?0+2:today+3]} day={weekdays[(today+3)>=6?0+2:today+3]} customClass='weekCard fourthDay'/>
                    <Card now={false} content={forecast[(today+4)>=6?0+2:today+4]} day={weekdays[(today+4)>=6?0+3:today+4]} customClass='weekCard lastCard'/>
                </div>
            </div>
        );
    }
}
export default (Forecast);
