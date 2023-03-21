import { Card } from "react-bootstrap";

export const MovieCard = ({ movie, onMovieClick }) => {
    return (<Card className="h-100" onClick={() => onMovieClick(movie)} variant="link">
        <Card.Img variant="bottom" src={movie.imageURL} />
        <Card.Body>
            <Card.Title>{movie.Title}</Card.Title>
            <Card.Text>{movie.Director.Name}</Card.Text>
        </Card.Body>
    </Card>);
};