import '@babel/polyfill';
import 'url-polyfill';
import dva from 'dva';

// import createHistory from 'history/createHashHistory';
// user BrowserHistory
import createHistory from 'history/createBrowserHistory';
import 'moment/locale/zh-cn';
import './index.less';

// 1. Initialize
const app = dva({
  history: createHistory({
    basename: 'BrowserExportExcel',
  }),
});

app.router(require('./router').default);
// 5. Start
app.start('#root');

export default app._store; // eslint-disable-line

export { app };
