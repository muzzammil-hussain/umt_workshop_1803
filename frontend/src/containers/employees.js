import React, {Component} from 'react';

import Card from '../components/card';
import {HOST_NAME} from '../Routes';

class Employees extends Component {
    constructor(props) {
        super(props);
        this.deptName = props.match.params.name;
        this.state = {
            employees: []
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        this.setState({
            departments: []
        });

        fetch(HOST_NAME + '/filter/dept/' + this.deptName )
            .then(response => response.json())
            .then(parsedJSON => parsedJSON.map(employee => (
                employee
            )))
            .then(employees => this.setState({
                employees
            }))
            .catch(error => console.log('parsing failed', error))

    }

    render() {
        return (
            <div>
                <h1 className="p-3">Employees</h1>
                <div className="card-columns">
                    {this.state.employees.map((e, i) =>
                        <Card key={i}
                              title={e.first_name + " " + e.last_name}
                              text={"Empolyee ID : " + e.id}
                              imageUrl = {e.avatar}
                              link = {"/employee/" + e.id}
                        />
                    )}
                </div>
            </div>
        )
    }
}

export default Employees;