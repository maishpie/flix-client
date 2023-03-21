import { Card, Button } from "react-bootstrap";

export const MovieView = ({ movie, onBackClick }) => {
    return (
        <Card>
            <Card.Img variant="top" src={movie.imageURL} />
            <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Subtitle>{movie.Director.Name}</Card.Subtitle>
                <Card.Text>Genre: {movie.Genre.Name} </Card.Text>
                <Card.Text>{movie.Description}</Card.Text>
                <Button variant="primary" onClick={onBackClick}>Back</Button>
            </Card.Body>
        </Card>
    );
};