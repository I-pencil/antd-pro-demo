/*
* Action Creator
*/

import * as types from '../action-types';

export const createMenuCollapsed = (state, payload) => ({
  type: types.MENU_COLLAPSED,
  payload,
});
