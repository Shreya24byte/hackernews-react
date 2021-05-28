import React, {useState, useEffect} from 'react';
import {getJob} from '../services/Api';
import { StoryWrapper, StoryTitle, StoryMeta, StoryMetaElement } from '../styles/StoryStyle';
import { MapTime } from '../mappers/MapTime';
export const Jobs = ({ jobId}) => {
    const [job, setJob] = useState({});

    useEffect(() => {
        getJob(jobId).then(data => data && data.url && setJob(data))
    }, []);
    return job && job.url ? (
       <StoryWrapper data-testid="job">
           <StoryTitle>
           <a href={job.url}>{job.title}</a>
           </StoryTitle>
           <StoryMeta>
               <span data-testid="job-time">
                   <StoryMetaElement color="#000">Posted:</StoryMetaElement>
                   {MapTime (job.time)}
               </span>
           </StoryMeta>
       </StoryWrapper>
    ) : null;
}
