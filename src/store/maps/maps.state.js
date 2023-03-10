import Model from '../entities/model';
import EntityAdapter from '../entities/entityAdapter';

export const maps = new Model();
export const mapsAdapter = new EntityAdapter(maps, 'name');

export const events = new Model();
export const eventsAdapter = new EntityAdapter(events, 'id');

export const initialState = {
  maps: mapsAdapter.getInitialState(),
  currentMap: null,
  currentTileset: null,
  currentEvents: eventsAdapter.getInitialState()
};

export default initialState;
