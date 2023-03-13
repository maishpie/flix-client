import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
    const [movies, setMovies] = useState([
        {
            _id: 1,
            Title: 'A New York Christmas Wedding',
            Description: 'A Yuletide angel shows a bride what could have been if she had followed her secret feelings for her best friend.',
            Genre: {
                Name: 'Drama',
                Description: 'Drama is a category or genre of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone.'
            },
            Director: {
                Name: 'Otoja Abit',
                Bio: "First-generation American writer/director/producer/actor OTOJA ABIT (pronounced 'O-toe-jay Abbitt') is best known for his award-winning debut short, Jitters, in which he wrote, directed, produced, and starred. Otoja expanded on his short Jitters' theme with A New York Christmas Wedding, which entered the independent film festival circuit with runs at the American Black FilmFestival, UrbanWorld Film Festival, Martha's Vineyard African-American Film Festival, among many others. The first-of-its-kind urban-leaning holiday film touched on some of the themes involving the LGBTQIA community, 21st-century views on love, religion, family, and more. Acquired by and exclusively premiering globally on Netflix on November 2020, the film was highlighted in the New York Times for it's uniqueness. Otoja's past credits include Guest Star on CBS's BULL, HBO's The Night of, NBC's Blackish, Marvel's The Defenders and NBC's limited series The Slap. The only son of driven Nigerian parents, Abit was born in Brooklyn and grew up in Queens, NY. Otoja got his start in the industry interning at The Labyrinth theatre company, his first big project was working as the assistant director on Broadway's 2011 revival of That Championship Season, directed by Gregory Mosher and starring Kiefer Sutherland, Brian Cox, Jim Gaffigan, Jason Patric, and Chris Noth. Otoja then went on to book roles in both television and film. His list of film credits includes The Humbling, directed by Barry Levinson and playing opposite Al Pacino; 'Paris' in Aleta Chappelle's Romeo & Juliet in Harlem; and gay liberation pioneer, Marsha P Johnson in Roland Emmerich's Stonewall. Otoja is a recipient of 2019 'Rising Star Award'provided by Bushwick Film Festival. With the success of Jitters, Otoja founded his production company Willful Productions.",
                Birthyear: '1985'
            },
            imageURL: 'https://m.media-amazon.com/images/M/MV5BYjM2NjZhYWMtODQwYy00ZmMzLTlhMzctMTI5MGZjMDdkOTBjXkEyXkFqcGdeQXVyMjE5OTk3NjY@._V1_QL75_UY281_CR1,0,190,281_.jpg',
            Featured: true
        },
        {
            _id: 2,
            Title: 'A Secret Love',
            Description: 'A former baseball player keeps her lesbian relationship a secret from her family for seven decades.',
            Genre: {
                Name: 'Documentary',
                Description: 'Documentary is a genre of movie making that uses video & film scenes, photographs and/or sound of real people and real events which when edited together creates a particular story, viewpoint, message or experience.'
            },
            Director: {
                Name: 'Chris Bolan',
                Bio: 'Chris Bolan is known for A Secret Love (2020), Monsterland (2020) and Billions (2016).',
                Birthyear: ''
            },
            imageURL: 'https://m.media-amazon.com/images/M/MV5BNzRlMmUzNjUtMDczOC00YjQ5LWE0NDMtY2RkNzI5ODA4NmU3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
            Featured: true
        },
        {
            _id: 3,
            Title: 'Beauty',
            Description: 'A young singer on the brink of a promising career finds herself torn between a domineering family, industry pressures and her love for her girlfriend.',
            Genre: {
                Name: 'Drama',
                Description: 'Drama is a category or genre of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone.'
            },
            Director: {
                Name: 'Andrew Dosunmu',
                Bio: 'Andrew Dosunmu is known for Mother of George (2013), Hot Irons (1999) and Restless City (2011).',
                Birthyear: ''
            },
            imageURL: 'https://m.media-amazon.com/images/M/MV5BYTA4YTlkNTktMGQwNC00N2QwLWFlMzYtMWRmZjM3ZmUzMzFjXkEyXkFqcGdeQXVyMTM2Mzg4MA@@._V1_FMjpg_UX1000_.jpg',
            Featured: true
        },
        {
            _id: 4,
            Title: 'Bruised',
            Description: "Jackie Justice, a disgraced MMA fighter who has failed at the one thing she's ever been good at - fighting. When 6-year-old Manny, the son she walked out on years ago, returns to her doorstep, Jackie has to conquer her own demons.",
            Genre: {
                Name: 'Drama',
                Description: 'Drama is a category or genre of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone.'
            },
            Director: {
                Name: 'Halle Berry',
                Bio: 'Halle Berry is an American actress. Her breakthrough film role was in the romantic comedy Boomerang (1992), alongside Eddie Murphy, which led to roles in The Flintstones (1994) and Bulworth (1998) as well as the television film Introducing Dorothy Dandridge (1999), for which she won a Primetime Emmy Award and a Golden Globe Award. She launched a production company, 606 Films, in 2014 and has been involved in the production of a number of projects in which she performed, such as the CBS science fiction series Extant (2014-2015). She appeared in the action films Kingsman: The Golden Circle (2017) and John Wick: Chapter 3 - Parabellum (2019) and made her directorial debut with the Netflix drama Bruised (2020).',
                Birthyear: '1966'
            },
            imageURL: 'https://m.media-amazon.com/images/M/MV5BMWRjZGZiNjktNDU3Ni00ZWZkLWEwNDEtZDcwMTA3ZTdmMzEzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
            Featured: false
        },
        {
            _id: 5,
            Title: 'Carol',
            Description: 'Therese Belivet spots the beautiful, elegant Carol perusing the doll displays in a 1950s Manhattan department store. The two women develop a fast bond that becomes a love with complicated consequences.',
            Genre: {
                Name: 'Drama',
                Description: 'Drama is a category or genre of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone.'
            },
            Director: {
                Name: 'Todd Haynes',
                Bio: 'Todd Haynes was always interested in art, and made amateur movies and painted while he was still a child. He attended Brown university and majored in art and semiotics. After he graduated he moved to New York City and made the controversial short film Superstar: The Karen Carpenter Story (1987).',
                Birthyear: '1961'
            },
            imageURL: 'https://m.media-amazon.com/images/M/MV5BMTczNTQ4OTEyNV5BMl5BanBnXkFtZTgwNDgyMDI3NjE@._V1_FMjpg_UX1000_.jpg',
            Featured: true
        }
    ]);

    const [selectedMovie, setSelectedMovie] = useState(null);

    if (selectedMovie) {
        return (
            <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
        );
    }

    if (movies.length === 0) {
        return <div>The list is empty!</div>;
    }

    return (
        <div>
            {movies.map((movie) => (
                <MovieCard
                    key={movie._id}
                    movie={movie}
                    onMovieClick={(newSelectedMovie) => {
                        setSelectedMovie(newSelectedMovie);
                    }}
                />
            ))}
        </div>
    );
};
