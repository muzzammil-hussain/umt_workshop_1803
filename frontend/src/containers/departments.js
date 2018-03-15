import React, {Component} from 'react';
import Card from '../components/card';
import {HOST_NAME} from '../Routes';


class Departments extends Component {

    /*https://reactjs.org/docs/react-component.html#the-component-lifecycle*/
    constructor(props) {
        super(props);
        this.state = {
            departments: []
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        this.setState({
            departments: []
        });

        fetch(HOST_NAME + '/depts/')
            .then(response => response.json())
            .then(parsedJSON => parsedJSON.map(department => (
                {
                    name: department
                }
            )))
            .then(departments => this.setState({
                departments
            }))
            .catch(error => console.log('parsing failed', error))

    }

    render() {
        return (
            <div>
                <h1 className="p-3">Departments</h1>
                <div className="card-columns">
                    {this.state.departments.map((e, i) =>
                        <Card key={i} title={e.name} link={"/dept/" + e.name}/>
                    )}
                </div>
            </div>
        )
    }
}

export default Departments;






