import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

const ItemCard = (props) => {

    const link = '/item/' + props.id;

    return <Link to={link}>
        <Card>
            <div className="item-container">
                <img src = {IMG_BASE_URL + props.poster_path}/>
                <h6 className="card-title">{props.title}</h6>
            </div>
        </Card>
    </Link>

}

export default ItemCard;