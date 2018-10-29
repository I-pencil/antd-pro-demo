import React from 'react';
import { LocaleProvider } from 'antd';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { hot } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes';
import reducers from './store/reducers';
import './styles/global.less';

const store = createStore(reducers);

const App = () => (
  <LocaleProvider locale={zhCN}>
    <Provider store={store}>
      <BrowserRouter>
        {routes}
      </BrowserRouter>
    </Provider>
  </LocaleProvider>
);

export default hot(module)(App);
