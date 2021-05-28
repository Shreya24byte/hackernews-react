import React, { useState, useEffect } from 'react';
import { getPastId} from '../services/Api';
import { Past } from '../components/Past';
import {StoriesContainerWrapper, GlobalStyle} from '../styles/StoryContainerStyles';
import {useInfiniteScroll} from '../hooks/useInfiniteScroll';


export const PastContainer = () => {
    const [pastIds, setpastIds] = useState([]);
    const { count } = useInfiniteScroll();

  useEffect(() => {
    getPastId().then(data => setpastIds(data));
}, []);

  return (
    <>
    <GlobalStyle/>
    <StoriesContainerWrapper data-test-id="stories-container">
  {pastIds.slice(0,count).map(pastId => <Past key={pastId} pastId={pastId}/>)}
  </StoriesContainerWrapper>
  </>
  )
}
