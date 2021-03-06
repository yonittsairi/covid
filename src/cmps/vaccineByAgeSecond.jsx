import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { covidService } from '../services/covidService';
import { chartColors } from '../services/colors'

export default class VaccineByAgeSecond extends React.Component {
    state = {

        labels: ['Jan', 'Febr', 'Mar',
            'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: '',
                // backgroundColor: '#ee0a61',
                // borderColor: 'none',
                // borderWidth: 0,
                // hoverBackgroundColor: 'pink',
                // offset: true,
                // barPercentage: 0,
                // maxBarThickness: 8,
                // minBarLength: 2,
                // minBarLength: 1,
                // order: 6,
                // legend: { display: false },
                data: [],
                backgroundColor: [...chartColors],
                hoverBackgroundColor: [...chartColors]
            }
        ]
    }







    async componentDidMount() {
        console.log(this.state);
        var { datasets } = this.state
        var data = await covidService.getDataVaccineByage()
        data = data.records
        console.log(data);

        var accCases = data.reduce((acc, obj) => {
            acc[obj.age_group] = + obj.second_dose
            return acc
        }, {})
        datasets[0].data = Object.values(accCases)
        var labels = Object.keys(accCases)
        this.setState({ datasets: datasets, labels: labels })

    }


    render() {
        // console.log(this.state);
        return (
            <div className="chart-cont">
                <Pie
                    data={this.state}
                    options={{
                        title: {
                            display: true,
                            text: 'מספר מתחסנים מנה שניה לפי גיל',
                            fontSize: 20,
                            type: 'horizontalBar'
                            // legend: 'none'
                        },
                        legend: {
                            display: true,
                            position: "right"
                        }
                        // scales: {
                        //     yAxes: [{
                        //         ticks: {
                        //             // min: 0,
                        //             // beginAtZero: true
                        //         }
                        //     }]
                        // }
                    }}
                />
            </div>
        );
    }
}