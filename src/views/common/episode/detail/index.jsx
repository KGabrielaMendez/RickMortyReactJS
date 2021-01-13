import './index.css';
import moment from 'moment';

const DetailEpisodeComponent = ({ 
    name, air_date, episode, created, characters,
}) => {
    return (
        <div>
            <div className="heading">
                <h1>Detalles del Episodio</h1>
            </div>
            <div className="row">
                <div className="card">
                    <div className="card-body">
                        <p className="name">Nombre: {name}</p>
                        <p>Estreno: {air_date} </p>
                        <p>Episodio: {episode}</p>
                        <p>Fecha de creación: {moment(created).format("MMM-DD-YYYY")}</p>
                        <p>Personajes en este Episodio: </p>
                        <ul>
                            {characters.map((item) => {
                                return <li>{
                                    item
                                }</li>
                            })}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DetailEpisodeComponent;