import React from "react"
import axios from "axios"

export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            slogan: ""
        }
        axios.get('http://localhost:5000').then(data => {
            this.setState({
                slogan: data.data
            })
        }).catch(error => {
            console.log(error)
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