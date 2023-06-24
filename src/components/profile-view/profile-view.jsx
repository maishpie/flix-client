import React from "react";
import { Row, CardGroup, Col, Card, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";

export const ProfileView = ({ user, token, movies, handleUpdate, onLoggedOut }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");

    let favoriteMovies = movies.filter((movie) =>  {
        return user.FavoriteMovies.includes(movie._id)
    })


    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            Username: username,
            Password: password,
            Email: email,
            Birthday: birthday
        }

        fetch(`https://flix-api-7f9j.onrender.com/users/${user.Username}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    alert("Something went wrong");
                    return false;
                }
            })
            .then((user) => {
                if (user) {
                    alert("Updated information successfully");
                    handleUpdate(user);
                }
            })
            .catch((e) => {
                alert(e);
            });
    }

    const handleDelete = () => {
        fetch(`https://flix-api-7f9j.onrender.com/users/${user.Username}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` }
        })
            .then((response) => {
                if (response.ok) {
                    alert("Your account has been deleted!");
                    onLoggedOut();
                    window.location.replace("/login");
                } else {
                    alert("Something went wrong");
                }
            })
            .catch((e) => {
                alert(e);
            });
    }

    return (
        <>
            <Col className="mt-5 mb-5" md={12}>
                <Card>
                    <Card.Title>Hello {user.Username}!</Card.Title>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Title>Update Information</Card.Title>
                    <Card.Subtitle>Password is required to make any changes</Card.Subtitle>
                    <Card.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Label>Username: </Form.Label>
                                <Form.Control
                                    type="text"
                                    value={username}
                                    placeholder={user.Username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password:</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter your password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Email:</Form.Label>
                                <Form.Control
                                    type="email"
                                    value={email}
                                    placeholder={user.Email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Birthday:</Form.Label>
                                <Form.Control
                                    type="date"
                                    value={birthday}
                                    placeholder={user.Birthday}
                                    onChange={(e) => setBirthday(e.target.value)} />
                            </Form.Group>
                            <Button variant="primary" type="submit">Submit</Button>
                            <Button variant="danger" onClick={() => {
                                if (confirm("Are you sure? Your account will be permanently deleted.")) {
                                    handleDelete();
                                }
                            }}>Delete Account</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <h4>Your Favorite Movies</h4>
            </Col>
            <Col md={12} className="p-2">
                {favoriteMovies.length === 0 && (
                    <Card>
                        <Card.Title>No favorites</Card.Title>
                    </Card>
                )}

                {
                    <CardGroup as={Row} className="mt-3 mb-3">
                        {
                            favoriteMovies.map((movie) => (
                                <Card key={movie._id} className="mr-1 p-2" style={{ marginRight: '2rem', maxWidth: '20rem' }}>
                                    <Card.Img variant="top" src={movie.imageURL} />
                                    <Card.Body>
                                        <Card.Title>{movie.Title}</Card.Title>
                                        <Card.Text>{movie.Director.Name}</Card.Text>
                                        <Card.Text>{movie.Genre.Name}</Card.Text>
                                    </Card.Body>
                                </Card>)
                            )
                        }
                    </CardGroup>
                }
            </Col>


        </>

    );
};