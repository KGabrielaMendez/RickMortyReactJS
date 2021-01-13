import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CharacterList, CharacterDetail } from "../components/common/characters/";
import EpisodeDetail from '../components/common/episode/detail';

//definir frutas
//para retornar directamente jsx se pone parentesis en ves de llaves
const Routes = () => (
    <Switch>
        <Route exact path="/characters" component={CharacterList} />
        <Route exact path="/character/:id" component={CharacterDetail} />
        <Route exact path="/episode/:id" component={EpisodeDetail} />
    </Switch>
)

export default Routes;