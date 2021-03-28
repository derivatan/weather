import React from "react"
import axios from "axios";

export default class LocationSelect extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            locations: []
        }

        axios.get(global.serverURL + '/locations').then(response => {
            this.setState({locations: response.data.locations})
        })

        this.selectLocation = this.selectLocation.bind(this)
    }

    selectLocation(event) {
        this.props.setLocation(event.target.value)
    }

    render() {
        const options = [<option key="-1" value="">-</option>]
        this.state.locations.forEach((location, i) => {
            options.push(<option key={location.Id} value={location.Id}>{location.Name}</option>)
        })

        return (
            <select onChange={this.selectLocation}>
                {options}
            </select>
        )
    }
}