import Analysis from '../pages/dashboard/analysis';
import Monitor from '../pages/dashboard/monitor';
import Workplace from '../pages/dashboard/workplace';

export default [
  {
    id: 1,
    path: 'dashboard/analysis',
    component: Analysis,
  },
  {
    id: 2,
    path: 'dashboard/monitor',
    component: Monitor,
  },
  {
    id: 3,
    path: 'dashboard/workplace',
    component: Workplace,
  },
];
