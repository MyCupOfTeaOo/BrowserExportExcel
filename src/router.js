/*
 * @Author: zouwendi 
 * @Date: 2018-08-14 15:47:18 
 * @Last Modified by: zwd
 * @Last Modified time: 2018-10-29 09:49:41
 * @Description: app入口
 */
import React from 'react';
import { routerRedux, Route, Redirect, Switch } from 'dva/router';
import { LocaleProvider, Spin } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import dynamic from 'dva/dynamic';
import Example from './Example';

const { ConnectedRouter } = routerRedux;
dynamic.setDefaultLoadingComponent(() => {
  return <Spin size="large" />;
});

function RouterConfig({ history }) {
  return (
    <LocaleProvider locale={zhCN}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/example" component={Example} />
          <Redirect to="/example" />
        </Switch>
      </ConnectedRouter>
    </LocaleProvider>
  );
}

export default RouterConfig;
