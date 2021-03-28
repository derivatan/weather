import React from "react"
import axios from "axios";

export default class Forecast extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let name = ""
        if (this.props.data !== null) {
            name = this.props.data.location.Name
        }

        // TODO render the data here.

        return (
            <div>
                <h3>{name}</h3>
            </div>
        )
    }
}