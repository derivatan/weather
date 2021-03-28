import React from "react"
import axios from "axios"
import LocationSelect from "./LocationSelect";
import Forecast from "./Forecast";

export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            slogan: "",
            forecastData: null,
        }
        axios.get(global.serverURL).then(response => {
            this.setState({slogan: response.data})
        })

        this.setLocation = this.setLocation.bind(this)
    }

    setLocation(locationId) {
        axios.get(global.serverURL + "/forecast/" + locationId).then(response => {
            this.setState({forecastData: response.data})
        })
    }

    render() {
        return (
            <div>
                <h1>Weather</h1>
                <h3>{this.state.slogan}</h3>
                <LocationSelect setLocation={this.setLocation}/>
                <Forecast data={this.state.forecastData}/>
            </div>
        )
    }
}