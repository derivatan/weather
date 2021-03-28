import React from "react"
import axios from "axios"
import LocationSelect from "./LocationSelect";
import Forecast from "./Forecast";

export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            slogan: "",
            location: "",
        }
        axios.get(global.serverURL).then(data => {
            this.setState({slogan: data.data})
        })

        this.setLocation = this.setLocation.bind(this)
    }

    setLocation(locationId) {
        this.setState({location: locationId})
    }

    render() {
        return (
            <div>
                <h1>Weather</h1>
                <h3>{this.state.slogan}</h3>
                <LocationSelect setLocation={this.setLocation}/>
                <Forecast location={this.state.location}/>
            </div>
        )
    }
}