import { useParams } from "react-router";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const MovieView = ({ movies, user, token, handleUpdate }) => {
    const { movieId } = useParams();

    const movie = movies.find((m) => m._id === movieId);

    const [favorite, setFavorite] = useState(user.FavoriteMovies.includes(movie._id));

    useEffect(() => {
        setFavorite(user.FavoriteMovies.includes(movie._id));
    }, [movieId])

    const addFavorite = (() => {
        fetch(`https://flix-api-7f9j.onrender.com/users/${user.Username}/movies/${movieId}`, {
            method: "POST",
            headers: { Authorization: `Bearer ${token}` }
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    alert("Could not add to Favorites");
                    return false;
                }
            })
            .then((user) => {
                if (user) {
                    alert("This movie has been added to your Favorites");
                    setFavorite(true);
                    handleUpdate(user);
                }
            })
            .catch((e) => {
                alert(e)
            });
    })

    const removeFavorite = (() => {
        fetch(`https://flix-api-7f9j.onrender.com/users/${user.Username}/movies/${movieId}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` }
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    alert("Could not remove from Favorites");
                    return false;
                }
            })
            .then((user) => {
                if (user) {
                    alert("This movie has been deleted from your Favorites");
                    setFavorite(false);
                    handleUpdate(user);
                }
            })
            .catch((e) => {
                alert(e);
            });
    })

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
                {favorite ?
                    <Button variant="danger" onClick={removeFavorite}>Remove from Favorites</Button>
                    : <Button variant="success" onClick={addFavorite}>Add to Favorites</Button>}
            </Card.Body>
        </Card>
    );
};