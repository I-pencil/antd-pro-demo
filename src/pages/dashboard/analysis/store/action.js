/*
* Action Creator
*/
import * as types from '../../../store/action-types';

export const fetchTotalSold = () => {
  return {
    type: types.ANALYSIS_TOTAL_SOLD,
    payload: {
      totalAmount: 126560,
      weeklyRatio: '12%',
      dailyRatio: '11%',
      dailyAmount: 12423,
    },
  }
}
