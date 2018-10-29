import React from 'react';
import { Collapse, Button } from 'antd';
import { AgGridReact } from 'ag-grid-react';
import styles from 'styles/list.less';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'styles/agGrid.less';
import BrowserExport from 'components/BrowserExport';

const dataList = [
  {
    FRUITSNUM01: 2954,
    FRUITSNUM02: 208,
    FRUITSAMT01: '467708970.73',
    FRUITSAMT02: '1365878491.45',
    FRUITSAMT03: '12372145447.15',
    FRUITSAMT04: '444718.61',
    FRUITSAMT: '14206177627.95',
    FRUITS_ADMDIV_CODE: '3201',
    FRUITSNUM: 6040,
    FRUITSNUM03: 271,
    FRUITS_ADMDIV_VALUE: '南京市',
    FRUITSNUM04: 2602,
    rowIndex: 1,
  },
  {
    FRUITSNUM01: 317,
    FRUITSNUM02: 77,
    FRUITSAMT01: '21070.14',
    FRUITSAMT02: '4156.10',
    FRUITSAMT03: '4.76',
    FRUITSAMT04: '730.78',
    FRUITSAMT: '25961.79',
    FRUITS_ADMDIV_CODE: '3202',
    FRUITSNUM: 415,
    FRUITSNUM03: 2,
    FRUITS_ADMDIV_VALUE: '无锡市',
    FRUITSNUM04: 19,
    rowIndex: 2,
  },
  {
    FRUITSNUM01: 47,
    FRUITSNUM02: 0,
    FRUITSAMT01: '2406.46',
    FRUITSAMT02: '0.00',
    FRUITSAMT03: '193.00',
    FRUITSAMT04: '106.00',
    FRUITSAMT: '2705.46',
    FRUITS_ADMDIV_CODE: '3203',
    FRUITSNUM: 55,
    FRUITSNUM03: 4,
    FRUITS_ADMDIV_VALUE: '徐州市',
    FRUITSNUM04: 4,
    rowIndex: 3,
  },
  {
    FRUITSNUM01: 238,
    FRUITSNUM02: 13,
    FRUITSAMT01: '18870.37',
    FRUITSAMT02: '56.50',
    FRUITSAMT03: '0.00',
    FRUITSAMT04: '26.00',
    FRUITSAMT: '18952.87',
    FRUITS_ADMDIV_CODE: '3204',
    FRUITSNUM: 254,
    FRUITSNUM03: 0,
    FRUITS_ADMDIV_VALUE: '常州市',
    FRUITSNUM04: 3,
    rowIndex: 4,
  },
  {
    FRUITSNUM01: 260,
    FRUITSNUM02: 25,
    FRUITSAMT01: '59883.93',
    FRUITSAMT02: '1049.80',
    FRUITSAMT03: '64.00',
    FRUITSAMT04: '26778.82',
    FRUITSAMT: '87776.54',
    FRUITS_ADMDIV_CODE: '3205',
    FRUITSNUM: 304,
    FRUITSNUM03: 3,
    FRUITS_ADMDIV_VALUE: '苏州市',
    FRUITSNUM04: 16,
    rowIndex: 5,
  },
  {
    FRUITSNUM01: 124,
    FRUITSNUM02: 20,
    FRUITSAMT01: '2447.90',
    FRUITSAMT02: '784.49',
    FRUITSAMT03: '0.00',
    FRUITSAMT04: '0.00',
    FRUITSAMT: '3232.39',
    FRUITS_ADMDIV_CODE: '3206',
    FRUITSNUM: 144,
    FRUITSNUM03: 0,
    FRUITS_ADMDIV_VALUE: '南通市',
    FRUITSNUM04: 0,
    rowIndex: 6,
  },
  {
    FRUITSNUM01: 16,
    FRUITSNUM02: 0,
    FRUITSAMT01: '757.00',
    FRUITSAMT02: '0.00',
    FRUITSAMT03: '90.00',
    FRUITSAMT04: '0.00',
    FRUITSAMT: '847.00',
    FRUITS_ADMDIV_CODE: '3207',
    FRUITSNUM: 18,
    FRUITSNUM03: 2,
    FRUITS_ADMDIV_VALUE: '连云港市',
    FRUITSNUM04: 0,
    rowIndex: 7,
  },
  {
    FRUITSNUM01: 28,
    FRUITSNUM02: 0,
    FRUITSAMT01: '1331.50',
    FRUITSAMT02: '0.00',
    FRUITSAMT03: '40.00',
    FRUITSAMT04: '0.00',
    FRUITSAMT: '1371.50',
    FRUITS_ADMDIV_CODE: '3208',
    FRUITSNUM: 29,
    FRUITSNUM03: 1,
    FRUITS_ADMDIV_VALUE: '淮安市',
    FRUITSNUM04: 0,
    rowIndex: 8,
  },
  {
    FRUITSNUM01: 104,
    FRUITSNUM02: 6,
    FRUITSAMT01: '4798.01',
    FRUITSAMT02: '386.00',
    FRUITSAMT03: '0.00',
    FRUITSAMT04: '210.00',
    FRUITSAMT: '5394.01',
    FRUITS_ADMDIV_CODE: '3209',
    FRUITSNUM: 112,
    FRUITSNUM03: 0,
    FRUITS_ADMDIV_VALUE: '盐城市',
    FRUITSNUM04: 2,
    rowIndex: 9,
  },
  {
    FRUITSNUM01: 51,
    FRUITSNUM02: 1,
    FRUITSAMT01: '1732.45',
    FRUITSAMT02: '200.00',
    FRUITSAMT03: '1399.41',
    FRUITSAMT04: '1074.38',
    FRUITSAMT: '4406.24',
    FRUITS_ADMDIV_CODE: '3210',
    FRUITSNUM: 143,
    FRUITSNUM03: 7,
    FRUITS_ADMDIV_VALUE: '扬州市',
    FRUITSNUM04: 84,
    rowIndex: 10,
  },
  {
    FRUITSNUM01: 170,
    FRUITSNUM02: 25,
    FRUITSAMT01: '7333.05',
    FRUITSAMT02: '908.24',
    FRUITSAMT03: '75.15',
    FRUITSAMT04: '1382.70',
    FRUITSAMT: '9699.14',
    FRUITS_ADMDIV_CODE: '3211',
    FRUITSNUM: 300,
    FRUITSNUM03: 7,
    FRUITS_ADMDIV_VALUE: '镇江市',
    FRUITSNUM04: 98,
    rowIndex: 11,
  },
  {
    FRUITSNUM01: 9,
    FRUITSNUM02: 4,
    FRUITSAMT01: '25712.00',
    FRUITSAMT02: '3322.00',
    FRUITSAMT03: '0.00',
    FRUITSAMT04: '0.00',
    FRUITSAMT: '29034.00',
    FRUITS_ADMDIV_CODE: '3212',
    FRUITSNUM: 13,
    FRUITSNUM03: 0,
    FRUITS_ADMDIV_VALUE: '泰州市',
    FRUITSNUM04: 0,
    rowIndex: 12,
  },
];
const bottomData = [
  {
    FRUITSNUM01: 4318,
    FRUITSAMT01: 467855313.53999996,
    FRUITSNUM02: 379,
    FRUITSAMT02: 1365889354.58,
    FRUITSNUM03: 297,
    FRUITSAMT03: 12372147313.47,
    FRUITSNUM04: 2828,
    FRUITSAMT04: 475027.29000000004,
    FRUITSNUM: 7827,
    FRUITSAMT: 14206367008.890001,
    FRUITS_ADMDIV_VALUE: '总计',
  },
];

const { Panel } = Collapse;

export default class FourSkillContractStatistics extends React.PureComponent {
  // eslint-disable-next-line
  createState() {
    const topOptions = { alignedGrids: [] };
    const bottomOptions = { alignedGrids: [] };

    topOptions.alignedGrids.push(bottomOptions);
    bottomOptions.alignedGrids.push(topOptions);

    return {
      topOptions,
      bottomOptions,
      columnDefs: [
        {
          headerName: '',
          width: 30,
          field: 'rowIndex',
          hidden: true,
          suppressMovable: true,
          cellStyle: {
            textAlign: 'center',
            padding: '5px 0',
            color: '#595959',
            backgroundColor: '#f0f0f0',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '500',
            boxShadow: '0 2px 0px 0 rgba(0,0,0,0.15)',
          },
        },
        {
          headerName: '区域',
          field: 'FRUITS_ADMDIV_VALUE',
          width: 150,
          cellStyle: {
            textAlign: 'center',
          },
          style: {
            alignment: { vertical: 'bottom', horizontal: 'center' },
          },
          cellRendererFramework: ({ value }) => {
            if (value) return <a style={{ color: 'green' }}>{value}</a>;
            return '总计';
          },
        },
        {
          headerName: '奇异果',
          children: [
            {
              headerName: '水果箱数',
              field: 'FRUITSNUM01',
              width: 100,
              cellStyle: {
                textAlign: 'center',
              },
              style: {
                alignment: { vertical: 'bottom', horizontal: 'right' },
              },
            },
            {
              headerName: '成交额(万元)',
              field: 'FRUITSAMT01',
              width: 180,
              cellStyle: {
                textAlign: 'right',
              },
              style: {
                numFmt: '0.00',
                alignment: { vertical: 'bottom', horizontal: 'right' },
              },
            },
          ],
        },
        {
          headerName: '火龙果',
          children: [
            {
              headerName: '水果箱数',
              field: 'FRUITSNUM02',
              width: 100,
              cellStyle: {
                textAlign: 'center',
              },
              style: {
                alignment: { vertical: 'bottom', horizontal: 'right' },
              },
            },
            {
              headerName: '成交额(万元)',
              field: 'FRUITSAMT02',
              width: 180,
              cellStyle: {
                textAlign: 'right',
              },
              style: {
                numFmt: '0.00',
                alignment: { vertical: 'bottom', horizontal: 'right' },
              },
            },
          ],
        },
        {
          headerName: '西瓜',
          children: [
            {
              headerName: '水果箱数',
              field: 'FRUITSNUM03',
              width: 100,
              cellStyle: {
                textAlign: 'center',
              },
              style: {
                alignment: { vertical: 'bottom', horizontal: 'right' },
              },
            },
            {
              headerName: '成交额(万元)',
              field: 'FRUITSAMT03',
              width: 180,
              cellStyle: {
                textAlign: 'right',
              },
              style: {
                alignment: { vertical: 'bottom', horizontal: 'right' },
                numFmt: '0.00',
              },
            },
          ],
        },
        {
          headerName: '水蜜桃',
          children: [
            {
              headerName: '水果箱数',
              field: 'FRUITSNUM04',
              width: 100,
              cellStyle: {
                textAlign: 'center',
              },
              style: {
                alignment: { vertical: 'bottom', horizontal: 'right' },
              },
            },
            {
              headerName: '成交额(万元)',
              field: 'FRUITSAMT04',
              width: 180,
              cellStyle: {
                textAlign: 'right',
              },
              style: {
                numFmt: '0.00',
                alignment: { vertical: 'bottom', horizontal: 'right' },
              },
            },
          ],
        },
        {
          headerName: '合计',
          children: [
            {
              headerName: '水果箱数',
              field: 'FRUITSNUM',
              width: 100,
              cellStyle: {
                textAlign: 'center',
              },
              style: {
                alignment: { vertical: 'bottom', horizontal: 'right' },
              },
            },
            {
              headerName: '成交额(万元)',
              field: 'FRUITSAMT',
              width: 180,
              cellStyle: {
                textAlign: 'right',
              },

              style: {
                numFmt: '0.00',
                alignment: { vertical: 'bottom', horizontal: 'right' },
              },
            },
          ],
        },
      ],
    };
  }

  state = {
    columnDefs: [],
    ...this.createState(),
  };

  render() {
    return (
      <div>
        <Collapse bordered={false} defaultActiveKey={['1']} className={styles.collapseNonePadding}>
          <Panel
            header={
              <span>
                四种水果统计<span style={{ color: '#f00' }}>【按所在区划统计】</span>
              </span>
            }
            key="1"
          >
            <div style={{ padding: 6 }}>
              <Button
                icon="export"
                onClick={() =>
                  BrowserExport({
                    title: '四种水果销售额',
                    sheetName: '四种水果销售额统计',
                    columns: this.state.columnDefs.filter((_, index) => index),
                    rows: dataList.concat(bottomData),
                    filename: '四种水果销售额统计.xlsx',
                  })
                }
              >
                导出Excel
              </Button>
            </div>
            <div style={{ width: '100%' }} className="ag-theme-balham noX">
              <AgGridReact
                rowData={dataList}
                enableColResize
                gridOptions={this.state.topOptions}
                columnDefs={this.state.columnDefs}
                domLayout="autoHeight"
                overlayNoRowsTemplate="无数据"
              />
            </div>

            <div style={{ width: '100%', height: '46px' }} className="ag-theme-balham">
              <AgGridReact
                rowData={bottomData}
                gridOptions={this.state.bottomOptions}
                columnDefs={this.state.columnDefs}
                headerHeight="0"
                rowStyle={{ fontWeight: 'bold' }}
                overlayNoRowsTemplate=" "
              />
            </div>
          </Panel>
        </Collapse>
      </div>
    );
  }
}
