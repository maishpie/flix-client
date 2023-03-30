import { useParams } from "react-router";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MovieView = ({ movies }) => {
    const { movieId } = useParams();

    const movie = movies.find((m) => m._id === movieId);
    return (
        <Card>
            <Card.Img variant="top" src={movie.imageURL} />
            <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Subtitle>{movie.Director.Name}</Card.Subtitle>
                <Card.Text>Genre: {movie.Genre.Name} </Card.Text>
                <Card.Text>{movie.Description}</Card.Text>
                <Link to={`/`}>
                    <Button variant="primary" >Back</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};