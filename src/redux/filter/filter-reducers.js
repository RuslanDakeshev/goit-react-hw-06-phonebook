import { FILTER_VALUE } from './filter-types';


export const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case FILTER_VALUE:
      return [payload];

    default:
      return state;
  }
};
