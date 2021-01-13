
import moment from 'moment';
import EpisodeName from '../../../components/episodeName'

const DetailComponent = ({ character }) => (
    <div className="container">
        <div className="heading">
            <h1>Detalles del Personaje</h1>
        </div>
        <div className="row">
            <div className="card">
                <img src={character.image} alt="" />

                <div className="card-body">
                    <p className="name">{character.name}</p>

                    <p id={character.status} className="color-status">{character.status} </p>
                    <p>{character.species}</p>
                    <p>{character.gender}</p>
                    <p className="subtitles">Última ubicación conocida:</p>
                    <p> {character.location.name}</p>
                    <p className="subtitles">Visto por primera vez en:</p>
                    <p className="subtitles">Episodio:</p>
                    <EpisodeName episodes={character.episode} />
                    <p className="subtitles">Fecha de creación:</p>
                    <p> {moment(character.created).format("MMM-DD-YYYY")}</p>
                </div>

            </div>
        </div>
    </div>
);

export default DetailComponent;

