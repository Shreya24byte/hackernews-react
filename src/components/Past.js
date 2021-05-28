import React, {useState, useEffect} from 'react';
import {getPast} from '../services/Api';
import { StoryWrapper, StoryTitle, StoryMeta } from '../styles/StoryStyle';
import { MapTime } from '../mappers/MapTime';

export const Past = ({ pastId}) => {
    const [past, setPast] = useState({});

    useEffect(() => {
        getPast(pastId).then(data => data && data.url && setPast(data))
    }, []);
    return past && past.url ? (
       <StoryWrapper data-testid="past">
           <StoryTitle>
           <a href={past.url}>{past.title}</a>
           </StoryTitle>
           <StoryMeta>
               <span data-testid="past-score">
                   {past.score} score
               </span>
               <span data-testid="past-time">
                   {MapTime (past.time)}
               </span>
           </StoryMeta>
       </StoryWrapper>
    ) : null;
}
