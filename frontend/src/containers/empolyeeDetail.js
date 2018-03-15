import React, {Component} from 'react';

import DetailCard from '../components/detailCard';
import {HOST_NAME} from '../Routes';

class EmployeeDetail extends Component {
    constructor(props) {
        super(props);
        this.id = props.match.params.id;
        this.state = {
            employeeDetail: []
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        this.setState({
            employeeDetail: []
        });

        fetch(HOST_NAME + '/view/' + this.id )
            .then(response => response.json())
            .then(employeeDetail => this.setState({
                employeeDetail
            }))
            .catch(error => console.log('parsing failed', error))

    }

    render() {
        return (
            <div>
                <h1 className="p-3">Employee Detail</h1>
                <div className="card-columns">
                    {/*<DetailCard data={this.state.employeeDetail}/>*/}
                </div>
            </div>
        )
    }
}

export default EmployeeDetail;