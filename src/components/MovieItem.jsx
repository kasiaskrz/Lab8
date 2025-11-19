import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const MovieItem = (props) => {
    return (
        <div>

            {/* card component from bootstrap */}
            <Card className="text-center">
                <Card.Body>

                    {/* display movie title passed as a prop */}
                    <Card.Title>{props.myMovies.title}</Card.Title>
                    {/* display movie poster */}
                    <img style={{ width: '200px', height: 'auto', borderRadius: '8px' }}
                        src={props.myMovies.poster}></img>
                </Card.Body>
                {/* footer section displaying the year */}
                <Card.Footer className="text-muted">{props.myMovies.year}</Card.Footer>
                <Link className='btn btn-primary' to={"/edit/" + props.myMovies._id}>Edit</Link>
            </Card>
        </div>
    );
}

{/* export component */ }
export default MovieItem;