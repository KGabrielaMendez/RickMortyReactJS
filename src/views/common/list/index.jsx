import {Link} from 'react-router-dom';
import './List.css';
//import CharacterList from '../../../components/common/characters/list/List';

const ListComponent = (children) => {
    return (
          
        children.characters.length > 0 ?
          children.characters.map((character) => (
            <Link to={`/character/${character.id}`}>
              <CharacterCard
                character={character}
              />
            </Link>
          ))
          : <p> No hay personajes </p>
      )
    };
  const CharacterCard = ({ character }) => (
    
      <div className="container">
        <div className="row">
          <div className="card">
            
              <img src={character.image} alt="" />
           
            <div className="card-body">
              <p>{character.name}</p>
            </div>
          </div>
        </div>
      </div>
  
  );
  export default ListComponent;