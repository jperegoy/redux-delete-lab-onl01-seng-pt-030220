import { v4 as uuidv4 } from 'uuid';

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      /**
       * Strictly speaking `Math.random()` doesn't prevent IDs from being
       * the same, despite the odds being astronomically low.
       */
      const band = {
        id: Math.random(),
        name: action.name,
        uuid: uuidv4()
      };

      return { ...state, bands: [...state.bands, band] }
    case 'DELETE_BAND':
      const bands = state.bands.filter(band => band.uuid !== action.uuid);
      return { bands };
    default:
      return state;
  }
};
