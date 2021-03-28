import React from "react"
import axios from "axios";

export default class Forecast extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                This is a forecast for {this.props.location}
            </div>
        )
    }
}