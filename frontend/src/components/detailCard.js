import React from 'react';

function DetailCard(props) {
    return (
        <div className="card text-center">
            <img style={{width: 'auto'}} className="card-img-top p-3" src={props.data.avatar} alt="Avatar"/>
            <h5 className="card-title">{props.data.first_name + " " + props.data.last_name}</h5>
            <div className="card-body text-left">
                <p className="card-text"><b>ID:</b> {props.data.id}</p>
                <p className="card-text"><b>Email:</b> {props.data.email}</p>
                <p className="card-text"><b>Gender: </b> {props.data.gender}</p>
                <p className="card-text"><b>Department: </b> {props.data.dept}</p>
            </div>
        </div>
    );
}

export default DetailCard;