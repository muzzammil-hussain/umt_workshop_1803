import React from 'react';
import {Link} from 'react-router-dom'

function Card(props) {
    const title = <h5 className="card-title">{props.title}</h5>,
        link = props.link ? <Link to={props.link}>{title}</Link> : title;

    return (
        <div className="card text-center">
            {props.imageUrl ? <img style={{width: 'auto'}} className="card-img-top p-3" src={props.imageUrl} alt="Avatar"/> : ""}
            <div className="card-body">
                {link}
                <small className="card-text">{props.text}</small>
            </div>
        </div>
    );
}

export default Card;