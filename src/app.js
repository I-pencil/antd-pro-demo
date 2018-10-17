import React from 'react';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { hot } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import './styles/global.less';
import routes from './routes';

const App = () => {
  return (
    <LocaleProvider locale={zhCN}>
      <BrowserRouter>
        {routes}
      </BrowserRouter>
    </LocaleProvider>
  );
}

export default hot(module)(App);
