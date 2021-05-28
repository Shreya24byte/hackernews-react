import React, { useState, useEffect } from 'react';
import { getShowId} from '../services/Api';
import { Show } from '../components/Show';
import {StoriesContainerWrapper, GlobalStyle} from '../styles/StoryContainerStyles';
import {useInfiniteScroll} from '../hooks/useInfiniteScroll';


export const ShowContainer = () => {
    const [showIds, setshowIds] = useState([]);
    const { count } = useInfiniteScroll();

  useEffect(() => {
    getShowId().then(data => setshowIds(data));
}, []);

  return (
    <>
    <GlobalStyle/>
    <StoriesContainerWrapper data-test-id="stories-container">
  {showIds.slice(0,count).map(showId => <Show key={showId} showId={showId}/>)}
  </StoriesContainerWrapper>
  </>
  )
}
