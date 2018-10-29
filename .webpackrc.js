const path = require('path');

export default {
  entry: 'src/index.js',

  // extraBabelIncludes: [/node_modules\/@ckeditor\/\S*/],
  extraBabelPlugins: [
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }, 'antd'],
    [
      'import',
      {
        libraryName: 'lodash',
        libraryDirectory: '',
        camel2DashComponentName: false, // default: true
      },
      'lodash',
    ],
    [
      'import',
      {
        libraryName: 'react-virtualized',
        libraryDirectory: 'dist/commonjs', // default: lib
        camel2DashComponentName: false, // default: true
      },
      'react-virtualized',
    ],
    [
      'import',
      {
        libraryName: '@material-ui',
        libraryDirectory: 'core', // default: lib
        camel2DashComponentName: false, // default: true
      },
      '@material-ui',
    ],
  ],
  env: {
    development: {
      extraBabelPlugins: ['dva-hmr'],
      publicPath: '/',
    },
  },
  externals: {
    '@antv/data-set': 'DataSet',
    bizcharts: 'BizCharts',
    rollbar: 'rollbar',
  },
  alias: {
    components: path.resolve(__dirname, 'src/components/'),
    config: path.resolve(__dirname, 'src/config/'),
    styles: path.resolve(__dirname, 'src/styles/'),
    public: path.resolve(__dirname, 'public'),
  },
  ignoreMomentLocale: true,
  theme: './src/theme.js',
  html: {
    template: './src/index.ejs',
  },
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  // disableDynamicImport: false,
  publicPath: '/BrowserExportExcel',
  hash: true,
};
