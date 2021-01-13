import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getEpisodeName } from '../../services/episodes';

const EpisodeName = ({ episodes }) => {
    const [name, setName] = useState('');

    const loadEpisode = () => {
        const fetchEpisodeName = async (episodesList) => {
            if (episodesList && episodesList.length === 0) {
                return;
            }
            try {
                const resp = await getEpisodeName(episodesList[0]);
                const { name: episodeName } = await resp.json();
                setName(episodeName);
            } catch (_e) { }
        }
    
        fetchEpisodeName(episodes);
      }

    useEffect(loadEpisode, [])

    return <p>{name}</p>;
}

EpisodeName.propTypes = {
    episodes: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default EpisodeName
