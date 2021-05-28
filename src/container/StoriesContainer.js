import React, { useState, useEffect } from 'react';
import { getStoryId} from '../services/Api';
import { Story } from '../components/Story';
import {StoriesContainerWrapper, GlobalStyle} from '../styles/StoryContainerStyles';
import {useInfiniteScroll} from '../hooks/useInfiniteScroll';


export const StoriesContainer = () => {
    const [storyIds, setStoryIds] = useState([]);
    const { count } = useInfiniteScroll();

  useEffect(() => {
    getStoryId().then(data => setStoryIds(data));
}, []);

  return (
    <>
    <GlobalStyle/>
    <StoriesContainerWrapper data-test-id="stories-container">
  {storyIds.slice(0,count).map(storyId => <Story key={storyId} storyId={storyId}/>)}
  </StoriesContainerWrapper>
  </>
  )
}
