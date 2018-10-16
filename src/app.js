import React from 'react';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { hot } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import DashBoard from './pages/dashboard';
import './styles/global.less';

const App = () => {
  return (
    <LocaleProvider locale={zhCN}>
      <BrowserRouter>
        <DashBoard></DashBoard>
      </BrowserRouter>
    </LocaleProvider>
  );
}

export default hot(module)(App);
