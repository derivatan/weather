import React from "react"
import axios from "axios"
import LocationSelect from "./LocationSelect";

export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            slogan: ""
        }
        axios.get(global.serverURL).then(data => {
            this.setState({
                slogan: data.data
            })
        })
    }

    render() {
        return (
            <div>
                <h1>Weather</h1>
                <h3>{this.state.slogan}</h3>
            </div>
        )
    }
}