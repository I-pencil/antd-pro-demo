/*
* Action Creator file
*/

import * as types from '../action-types';

export const createMenuCollapsed = payload => ({
  type: types.TOGGLE_MENU_COLLAPSED,
  collapsed: payload,
});
