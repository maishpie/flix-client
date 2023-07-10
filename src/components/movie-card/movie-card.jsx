import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
    return (
        <Card className="h-100">
            <div className="aspect-ratio-16-9">
                <Card.Img variant="bottom" src={movie.imageURL} className="aspect-ratio-object-fit" />
            </div>
            <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>{movie.Director.Name}</Card.Text>
                <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
                    <Button className="float-end" variant="link">Open</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};