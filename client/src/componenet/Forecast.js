import React from "react"
import m from 'moment'

export default class Forecast extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let data = this.props.data

        let Wsymb2 = new Map()
        Wsymb2[1] = "Clear sky"
        Wsymb2[2] = "Nearly clear sky"
        Wsymb2[3] = "Variable cloudiness"
        Wsymb2[4] = "Halfclear sky"
        Wsymb2[5] = "Cloudy sky"
        Wsymb2[6] = "Overcast"
        Wsymb2[7] = "Fog"
        Wsymb2[8] = "Light rain showers"
        Wsymb2[9] = "Moderate rain showers"
        Wsymb2[10] = "Heavy rain showers"
        Wsymb2[11] = "Thunderstorm"
        Wsymb2[12] = "Light sleet showers"
        Wsymb2[13] = "Moderate sleet showers"
        Wsymb2[14] = "Heavy sleet showers"
        Wsymb2[15] = "Light snow showers"
        Wsymb2[16] = "Moderate snow showers"
        Wsymb2[17] = "Heavy snow showers"
        Wsymb2[18] = "Light rain"
        Wsymb2[19] = "Moderate rain"
        Wsymb2[20] = "Heavy rain"
        Wsymb2[21] = "Thunder"
        Wsymb2[22] = "Light sleet"
        Wsymb2[23] = "Moderate sleet"
        Wsymb2[24] = "Heavy sleet"
        Wsymb2[25] = "Light snowfall"
        Wsymb2[26] = "Moderate snowfall"
        Wsymb2[27] = "Heavy snowfall"

        let name = ""
        let content = []
        if (data !== null) {
            name = <h3>{data.location.Name}</h3>

            content.push(
                <thead>
                    <tr key="-1">
                        <td>Time</td>
                        <td>Temperature</td>
                        <td>Weather</td>
                    </tr>
                </thead>
            )


            let tableBody = []
            data.rawData.timeSeries.forEach((elem, i) => {
                let time = m(elem.validTime)
                let temp = elem.parameters.filter(e => e.name === "t")[0]
                let note = elem.parameters.filter(e => e.name === "Wsymb2")[0]

                tableBody.push(
                    <tr key={i}>
                        <td className="time">{time.format("dddd (D/M) HH:mm")}</td>
                        <td className="temp">{temp.values[0]}</td>
                        <td className="note">{Wsymb2[note.values[0]]}</td>
                    </tr>
                )
            })
            content.push(<tbody>{tableBody}</tbody>)
        }

        return (
            <div>
                {name}
                <table className="content">{content}</table>
            </div>
        )
    }
}