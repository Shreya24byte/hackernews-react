import axios from 'axios';
import { selectField, selectJob, selectShow, selectAsk, selectPast } from '../selectors/selectField';

export const baseUrl = ' https://hacker-news.firebaseio.com/v0/';
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const jobsUrl = `${baseUrl}jobstories.json`;
export const showUrl = `${baseUrl}showstories.json`;
export const askUrl = `${baseUrl}askstories.json`;
export const pastUrl = `${baseUrl}beststories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getStory = async(storyId) => {
    const result = await axios.get(`${storyUrl + storyId}.json`)
    .then(({data}) => data && selectField(data));
    return result;
}
export const getStoryId = async () => {
    const result = await axios.get(newStoriesUrl).then(({ data }) => data);
    return result;
};

export const getJob = async(jobId) => {
    const result = await axios.get(`${storyUrl + jobId}.json`)
    .then(({data}) => data && selectJob(data));
    return result;
}
export const getJobId = async () => {
    const result = await axios.get(jobsUrl).then(({ data }) => data);
    return result;
};

export const getShow = async(showId) => {
    const result = await axios.get(`${storyUrl + showId}.json`)
    .then(({data}) => data && selectShow(data));
    return result;
}
export const getShowId = async () => {
    const result = await axios.get(showUrl).then(({ data }) => data);
    return result;
};

export const getPast = async(pastId) => {
    const result = await axios.get(`${storyUrl + pastId}.json`)
    .then(({data}) => data && selectPast(data));
    return result;
}
export const getPastId = async () => {
    const result = await axios.get(pastUrl).then(({ data }) => data);
    return result;
};
