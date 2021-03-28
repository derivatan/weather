import React from "react"
import ReactDOM from "react-dom"
import App from "./componenet/App"

// TODO: This would be better as environment variables.
global.serverURL = 'http://localhost:5000'

ReactDOM.render(
    <App />,
    document.getElementById("root")
);