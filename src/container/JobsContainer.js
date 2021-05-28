import React, { useState, useEffect } from 'react';
import { getJobId} from '../services/Api';
import { Jobs } from '../components/Jobs';
import {StoriesContainerWrapper, GlobalStyle} from '../styles/StoryContainerStyles';
import {useInfiniteScroll} from '../hooks/useInfiniteScroll';


export const JobsContainer = () => {
    const [jobIds, setjobIds] = useState([]);
    const { count } = useInfiniteScroll();

  useEffect(() => {
    getJobId().then(data => setjobIds(data));
}, []);

  return (
    <>
    <GlobalStyle/>
    <StoriesContainerWrapper data-test-id="stories-container">
  {jobIds.slice(0,count).map(jobId => <Jobs key={jobId} jobId={jobId}/>)}
  </StoriesContainerWrapper>
  </>
  )
}
