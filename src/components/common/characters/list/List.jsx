import React from 'react';
import { getCharacters } from '../../../../services/characters';
import ListComponent from '../../../../views/common/list';
import ErrorComponent from '../../../../views/common/error';
import LoadingComponent from '../../../../views/common/loading';

export default class CharacterList extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      isReady: false,
      hasError: false,
      error: null
    };
  };

  componentDidMount() {
    this.fetchCharactersData();
  }

  fetchCharactersData = () => {
    getCharacters()
      .then(res => res.json())
      .then(({ results }) => this.setState({ characters: results, isReady: true }))
  }

  render() {
    const {
      characters,
      isReady,
      hasError,
      error
    } = this.state;
    return (
      isReady ?
        <ListComponent characters={characters} />
        : hasError ?
          <ErrorComponent error={error} />
          : <LoadingComponent />
    )
  }
};

/*
const ListComponent = (props) => (
  <>
    {
      props.characters.length > 0 ?
        props.characters.map((character) => (
          <Link to={`/character/${character.id}`}>
            <CharacterCard
              character={character}
            />
          </Link>
        ))
        : <p> No hay personajes </p>
    }
  </>
);


const CharacterCard = ({ character }) => (
  <>

    <div class="container">
      <div class="row">
        <div class="card">
          
            <img src={character.image} alt="" />
         
          <div class="card-body">
            <p>{character.name}</p>
          </div>
        </div>
      </div>
    </div>
  </>
);







const ErrorComponent = ({ error }) => (
  <>
    <p> Ups! algo salió mal al traer los datos de los personajes</p>
    <p>{error}</p>
  </>
);

const LoadingComponent = () => (
  <>
    <p> Cargando...</p>
    <img src="https://media2.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif" alt="" />
  </>
)

*/