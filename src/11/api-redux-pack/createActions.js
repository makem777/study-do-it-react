import { FETCH_LIST, CREATE, FETCH, UPDATE, RESET } from './actionTypes';
import Api from '../../08/Api';

export default (resourceName, key = 'id') => ({
  collection: (params = {}, meta = {}) => ({
    type: FETCH_LIST,
    promise: Api.get(resourceName, { params }),
    meta: {
      ...meta,
      key,
      resourceName,
    },
  }),
  member: (id, params = {}, meta = {}) => ({
    type: FETCH,
    promise: Api.get(`${resourceName}/${id}`, { params }),
    meta: {
      ...meta,
      key,
      resourceName,
    },
  }),
  create: (id, data, params = {}, meta = {}) => ({
    type: CREATE,
    promise: Api.get(resourceName, data, { params }),
    meta: {
      ...meta,
      key,
      resourceName,
    },
  }),
  update: (id, data, params = {}, meta = {}) => ({
    type: UPDATE,
    promise: Api.get(`${resourceName}/${id}`, data, { params }),
    meta: {
      ...meta,
      key,
      resourceName,
    },
  }),
  reset: () => ({
    type: RESET,
    meta: { resourceName },
  }),
});
