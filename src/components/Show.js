import React, {useState, useEffect} from 'react';
import {getShow} from '../services/Api';
import { StoryWrapper, StoryTitle, StoryMeta } from '../styles/StoryStyle';
import { MapTime } from '../mappers/MapTime';
export const Show = ({ showId}) => {
    const [show, setShow] = useState({});

    useEffect(() => {
        getShow(showId).then(data => data && data.url && setShow(data))
    }, []);
    return show && show.url ? (
       <StoryWrapper data-testid="show">
           <StoryTitle>
           <a href={show.url}>{show.title}</a>
           </StoryTitle>
           <StoryMeta>
               <span >
                   {show.score} score
               </span>
               <span>
                   by {show.by} 
               </span>
               <span >
                   {MapTime (show.time)}
               </span>
           </StoryMeta>
       </StoryWrapper>
    ) : null;
}
