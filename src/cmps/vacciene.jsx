import React from 'react';
import { Bar } from 'react-chartjs-2';
import { covidService } from '../services/covidService';


export default class Vaccine extends React.Component {
    state = {

        labels: ['Jan', 'Febr', 'Mar',
            'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: '',
                backgroundColor: '#ee0a61',
                borderColor: 'none',
                borderWidth: 0,
                // hoverBackgroundColor: 'pink',
                // offset: true,
                // barPercentage: 0,
                maxBarThickness: 8,
                minBarLength: 2,
                // minBarLength: 1,
                order: 6,
                legend: { display: false },
                data: []
            }
        ]
    }







    async componentDidMount() {
        var data = await covidService.getData()
        data = data.records
        console.log(data);
        data = data.filter(status => status.date === "2021-02-28")
        var accCases = data.reduce((acc, obj) => {
            acc[obj.town] = + obj.accumulated_vaccination_first_dose
            return acc
        }, {})

        var array = Object.entries(accCases).filter(obj => !isNaN(obj[1]))
        console.log(array);
        var a = array.sort((a, b) => b[1] - a[1]).map(el => {
            return +el[1]
        });
        var b = array.sort((a, b) => b[1] - a[1]).map(el => {
            return el[0]
        });
        console.log(a, b);
        var { datasets, labels } = this.state
        datasets[0].data = a.slice(0, 41)
        labels = b.slice(0, 41)
        this.setState({ datasets: datasets, labels: labels })

    }


    render() {
        // console.log(this.state);
        return (
            <div className="chart-cont">
                <Bar
                    data={this.state}
                    options={{
                        title: {
                            display: true,
                            text: 'מספר מתחסנים מנה ראשונה מצטבר נכון ל- 28/02/2021',
                            fontSize: 20,
                            // legend: 'none'
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    min: 0,
                                    beginAtZero: true
                                }
                            }]
                        }
                        , legend: {
                            display: false,
                            position: "right"
                        }
                    }}
                />
            </div>
        );
    }
}