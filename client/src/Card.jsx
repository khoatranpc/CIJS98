import './Card.css';

const Card = (props) => {
    return (
        <div className="card" onClick={props.abc}>
            {props.children}
            <h1>HHIHI</h1>
            <div className="name">Name: {props.name}</div>
            <div className="age">Price: {Number(props.price).toLocaleString()}</div>
        </div>
    )
}

export default Card;