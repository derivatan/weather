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
            console.log(response.data.locations)
        })
    }

    render() {
        const options =  [<option value="">-</option>]
        this.state.locations.forEach((location, i) => {
            options.push(<option value={location.Id}>{location.Name}</option>)
        })

        return (
            <select>
                {options}
            </select>
        )
    }
}