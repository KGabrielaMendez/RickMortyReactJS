import React from 'react';
import { getEpisode } from './../../../../services/episodes/index';
import DetailEpisodeComponent from '../../../../views/common/episode/detail';
import ErrorComponent from '../../../../views/common/error';
import LoadingComponent from '../../../../views/common/loading';

export default class EpisodeDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            episode:{},
            characterEp:[],
            isReady: false,
            hasError: false,
            error: null
        };
    };

    componentDidMount () {
        this.fetchEpisodeData();
    }

    fetchEpisodeData = () => {
        const { match: { params: { id } } } = this.props;
        getEpisode(id)
        .then(res => res.json())
        .then((episode)=> this.setState(
            {
                episode,
                isReady:true
            } ))
    }

    render(){
        const {
            episode,
            isReady,
            hasError,
            error
        } = this.state;

        if (isReady) {
            return <DetailEpisodeComponent {...episode} />;
        }

        if (hasError) {
            return <ErrorComponent error={error} />;
        }

        return <LoadingComponent />;
    }

}