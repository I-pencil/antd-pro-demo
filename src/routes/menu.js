import Analysis from '../pages/dashboard/analysis/analysis';
import Monitor from '../pages/dashboard/monitor';
import Workplace from '../pages/dashboard/workplace';

export default [
  {
    id: 1,
    rank: 1,
    name: 'Dashboard',
    icon: 'dashboard',
  },
  {
    id: 11,
    pid: 1,
    rank: 2,
    name: '分析页',
    path: '/dashboard/analysis',
    component: Analysis,
  },
  {
    id: 12,
    pid: 1,
    rank: 2,
    name: '监控页',
    path: '/dashboard/monitor',
    component: Monitor,
  },
  {
    id: 13,
    pid: 1,
    rank: 2,
    name: '工作台',
    path: '/dashboard/workplace',
    component: Workplace,
  },
];
