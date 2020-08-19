import { createSelector } from 'reselect';
import { CREATE, UPDATE, FETCH_LIST, FETCH } from './actionTypes';

export default function createSelectors(resourceName) {
  const resourceSelector = state => state[resourceName];
  const entitiesSelector = state => resourceSelector(state).entities;
  const collectionSelector = createSelector([resourceSelector], ({ ids, entities }) =>
    ids.map(id => entities[id]),
  );
  const loadingStateSelector = state => resourceSelector(state).loadingState;
  const errorStateSelector = state => resourceSelector(state).errorState;

  const collectionnLoadingStateSelector = state =>
    loadingStateSelector(state)[`${FETCH_LIST}/${resourceName}`];
  const createLoadingStateSelector = state =>
    loadingStateSelector(state)[`${CREATE}/${resourceName}`];
  const updateLoadingStateSelecotr = state =>
    loadingStateSelector(state)[`${UPDATE}/${resourceName}`];
  const memberLoadingStateSelecotr = state =>
    loadingStateSelector(state)[`${FETCH}/${resourceName}`];

  const collectionErrorStateSelecotr = state =>
    errorStateSelector(state)[`${FETCH_LIST}/${resourceName}`];
  const createErrorStateSelecotr = state => errorStateSelector(state)[`${CREATE}/${resourceName}`];
  const updateErrorStateSelecotr = state => errorStateSelector(state)[`${UPDATE}/${resourceName}`];
  const memberErrorStateSelecotr = state => errorStateSelector(state)[`${FETCH}/${resourceName}`];

  const paginationSelector = state => {
    const { pagination } = resourceSelector(state);
    return {
      number: pagination.number || 0,
      size: pagination.size,
    };
  };
  return {
    resourceSelector,
    entitiesSelector,
    collectionSelector,
    collectionnLoadingStateSelector,
    createLoadingStateSelector,
    updateLoadingStateSelecotr,
    memberLoadingStateSelecotr,
    collectionErrorStateSelecotr,
    createErrorStateSelecotr,
    updateErrorStateSelecotr,
    memberErrorStateSelecotr,
    paginationSelector,
  };
}
