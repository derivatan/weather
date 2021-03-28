import React from "react"
import ReactDOM from "react-dom"
import App from "./componenet/App"

// This should be moved into and environment variable
global.serverURL = 'http://localhost:5000'

ReactDOM.render(
    <App />,
    document.getElementById("root")
);