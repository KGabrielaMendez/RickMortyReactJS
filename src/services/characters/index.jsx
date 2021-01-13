//import CharacterList from "../../components/common/characters/list/List";

const API_URL = `https://rickandmortyapi.com/api/character/`;

export const getCharacters = () => fetch(API_URL);

/* 
class myComponent extends React.Component {
    componentDidMount(){
        const apiUrl = 'https://rickandmortyapi.com/api/character';
        fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log('Estos datos son los que solicitaste', data));
  }
  render() {
    return <h1>my Component has Mounted, Check the browser 'console' </h1>;
  }
}
export default myComponent; */
    
export const getCharacter = (characterId) =>  fetch(`${API_URL}/${characterId}`);

export const getCharacterEp =(API_URL_CHARACTER) => fetch(API_URL_CHARACTER);
 
