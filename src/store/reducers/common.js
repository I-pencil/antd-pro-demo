/*
* common reducer file
*/
export const dashboardData = (state, payload) => ({
  ...state,
  collapsed: payload.collapsed,
});
