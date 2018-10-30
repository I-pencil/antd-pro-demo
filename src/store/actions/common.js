/*
* Action Creator
*/

import * as types from '../action-types';

export const createMenuCollapsed = payload => ({
  type: types.MENU_COLLAPSED,
  payload,
});
