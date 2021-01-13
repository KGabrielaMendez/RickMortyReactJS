import React from 'react';
import { getCharacter } from '../../../../services/characters';
import DetailComponent from '../../../../views/common/detail/index';
import ErrorComponent from '../../../../views/common/error';
import LoadingComponent from '../../../../views/common/loading';
import './index.css';


export default class CharacterDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            character: {},
            isReady: false,
            hasError: false,
            error: null
        };
    };


    componentDidMount() {
        this.fetchCharacterData();
    }

    fetchCharacterData = () => {
        const characterId = this.props.match.params.id;
        console.log(characterId);
        getCharacter(characterId)
            .then(res => res.json())
            .then((data) => this.setState(
                {
                    character: data,
                    isReady: true
                }))
                console.log('gfhjghgf'+this.state.character);
    }

    render() {
        const {
            character,
            isReady,
            hasError,
            error
        } = this.state;
        return (
            <>
                {
                    isReady ?
                        <DetailComponent
                            character={character}
                        />
                        : hasError ?
                            <ErrorComponent
                                error={error}
                            />
                            : <LoadingComponent />
                }
            </>
        )
    };
};

