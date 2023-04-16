import React from "react"

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function ItemPage(props) {

    const item = props.content;

    const poster = IMG_BASE_URL + item.poster_path;

    return <div className="individual-item">
        <h1>{item.title}</h1>
        <br/>
        <img className="item-poster" src={poster} alt="poster"/>

    </div>

}